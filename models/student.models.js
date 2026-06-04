const mongooes = require ("mongooes");

const studentSchema = new mongooes.schema({
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