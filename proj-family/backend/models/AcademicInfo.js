const mongoose = require('mongoose');
const academicInfoSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  grades: [{ subject: String, grade: String }],
  attendance: [{ date: Date, status: String }],
  assignments: [{ title: String, dueDate: Date }]
});

module.exports = mongoose.model('AcademicInfo', academicInfoSchema);