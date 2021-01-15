let studentID:number = 10;
let studentName:string = 'Jenny Kim';
let age:number = 21;
let gender:string = 'female';
let subject:string = 'Javascript';
let couseCompleted:boolean = false;

enum GenderType {           //숫자 열거형 numeric enum
    Male = 'male',                   //숫자 0 대신 male을 넣는 방법은
    Female = 'female',                 //string enum이 있다. 그냥 문자를 할당해주면된다.
    genderNeutral = 'genderNeutral'
}

let student1 = {           //자바스크립트의 var const같은 느낌
    studentID: 123456,
    studentName: 'Jenny Kim',
    age: 30,
    gender: 'Female',
    subject: 'Javascript',
    couseCompleted: false
}

interface Student {
    //인터페이스의 이름의 첫글자는 대문자
    readonly studentID: number ,    //읽기전용
    studentName: string,
    age?: number,          //물음표를 넣으면 유무 상관없는 property로 선언
    gender: 'male' | 'female' | 'genderNeutral',   // '|'을 쓰면 enum과 같은 효과
    subject: string,
    couseCompleted:boolean
}

function getStudentDetails(studentID: number) : Student
{
    return {
        studentID: 123456,
        studentName: 'Jenny Kim',
        gender: 'Female',
        subject: 'Javascript',
        couseCompleted: false
    };
}

function saveStudentDetails (student : Student) :void{
    
}

saveStudentDetail(student1);