import { useState, useEffect } from 'react';
import api from '../services/api';

export const useDashboardData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [collegeRes, majorRes, gpaRes, enrollmentRes, gradesRes] = 
          await Promise.all([
            api.get('/colleges/enrollment'),
            api.get('/users/majors'),
            api.get('/colleges/department-gpa'),
            api.get('/classes/course-enrollment'),
            api.get('/classes/course-grades')
          ]);

        setData({
          enrollmentByCollege: collegeRes.data,
          enrollmentByMajor: majorRes.data,
          avgGpaByDepartment: gpaRes.data,
          courseEnrollment: enrollmentRes.data,
          avgGradeByCourse: gradesRes.data
        });
      } catch (err) {
        setError('Failed to fetch dashboard data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
