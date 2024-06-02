// src/components/Students.js
import React from 'react';
import '../styles/students.css';

const Students = () => {
  const students = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      grades: { math: 'A', science: 'B' },
      attendance: '95%',
      parent: { name: 'Jane Doe', email: 'jane@example.com' },
    },
    // Adicione mais alunos conforme necessário
  ];

  return (
    <div>
      <h2>Students Information</h2>
      {students.length > 0 ? (
        students.map(student => (
          <div key={student.id} className="student-info">
            <h3>{student.name}</h3>
            <p>Email: {student.email}</p>
            <p>Grades: Math - {student.grades.math}, Science - {student.grades.science}</p>
            <p>Attendance: {student.attendance}</p>
            <p>Parent: {student.parent.name} ({student.parent.email})</p>
          </div>
        ))
      ) : (
        <p>No students found</p>
      )}
    </div>
  );
};

export default Students;
