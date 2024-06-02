// src/components/Dashboard.js
import React, {useState, useEffect} from "react";
import axios from 'axios';
import "../styles/dashboard.css";

const Dashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get("http://localhost:5000/students");
      setStudents(response.data);
    };
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/students/${id}`);
      // Atualiza a lista de alunos removendo o aluno excluído
      setStudents(prevStudents => prevStudents.filter(student => student.id !== id));
    } catch (error) {
      console.error('Failed to delete student:', error);
    }
  };


  return (
    <div>
      <h2>Dashboard</h2>
      {students.length > 0 ? (
        students.map((student) => (
          <div key={student.id} className="student-info">
            <h3>{student.name}</h3>
            <button className="dashboard-student-card-delete" onClick={() => handleDelete(student.id)}>x</button>
            <p>Email: {student.email}</p>
            <p>
              Grades: Math - {student.grades.math}, Science -{" "}
              {student.grades.science}
            </p>
            <p>Attendance: {student.attendance}</p>
            <p>
              Parent: {student.parent.name} ({student.parent.email})
            </p>
          </div>
        ))
      ) : (
        <p>No students found</p>
      )}
    </div>
  );
};

export default Dashboard;
