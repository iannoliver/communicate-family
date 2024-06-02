import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get('http://localhost:5000/students');
      setStudents(response.data);
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {students.map(student => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Email: {student.email}</p>
          <p>Grades: Math - {student.grades.math}, Science - {student.grades.science}</p>
          <p>Attendance: {student.attendance}</p>
          <p>Parent: {student.parent.name} ({student.parent.email})</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
