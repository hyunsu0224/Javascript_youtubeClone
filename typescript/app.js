var studentID = 10;
var studentName = 'Jenny Kim';
var age = 21;
var gender = 'female';
var subject = 'Javascript';
var couseCompleted = false;
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["genderNeutral"] = "genderNeutral";
})(GenderType || (GenderType = {}));
var student1 = {
    studentID: 123456,
    studentName: 'Jenny Kim',
    age: 30,
    gender: 'Female',
    subject: 'Javascript',
    couseCompleted: false
};
function getStudentDetails(studentID) {
    return {
        studentID: 123456,
        studentName: 'Jenny Kim',
        gender: 'Female',
        subject: 'Javascript',
        couseCompleted: false
    };
}
function saveStudentDetails(student) {
}
saveStudentDetail(student1);
