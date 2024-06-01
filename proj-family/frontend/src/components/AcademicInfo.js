import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AcademicInfo = ({ studentId }) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:5000/academic/student/${studentId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setInfo(response.data);
    };
    fetchInfo();
  }, [studentId]);

  return (
    <div>
      {info && (
        <>
          <h2>Grades</h2>
          <ul>
            {info.grades.map((grade, index) => (
              <li key={index}>{grade.subject}: {grade.grade}</li>
            ))}
          </ul>
          <h2>Attendance</h2>
          <ul>
            {info.attendance.map((att, index) => (
              <li key={index}>{att.date}: {att.status}</li>
            ))}
          </ul>
          <h2>Assignments</h2>
          <ul>
            {info.assignments.map((assignment, index) => (
              <li key={index}>{assignment.title}: {assignment.dueDate}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default AcademicInfo;
