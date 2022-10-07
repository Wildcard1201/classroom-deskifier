
// Sample student Object

function Student(name, vision, avoid, prefer, academic) {
    this.name = name;                       // student name
    this.vision_pref = vision;              // vision-based distance preference
    this.student_avoid = avoid;             // student to avoid sitting by
    this.student_prefer = prefer;           // preferred student to sit by
    this.academic = academic;               // academic tier 1-3
}

const bob = new Student('Bob', 'near', 'Steve', null, 2)
const rachel = new Student('Rachel', null, null, 'Beth', 3)
const steve = new Student('Steve', null, 'Bob', null, 1)

const students = [];

students.push(bob, rachel)

console.log(students)

const rosterDisplay= document.getElementById('roster')

rosterDisplay.innerHTML = 'test'