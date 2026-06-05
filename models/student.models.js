const mongoose = require ("mongoose");

const studentSchema = new mongoose.schema({
    studentRegistrationNumber:String,
    studentId: String,
    studentName: String,
    fatherGaurdianName:String,
    class:String,
    emergencyConatct: Number,
    studentProfileImageUrl:String
});

const Student = mongoose.model("Student",studentSchema);

module.exports = Student;