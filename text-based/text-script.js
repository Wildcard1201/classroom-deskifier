
// Sample student Object

class Student {
    constructor(name, vision, avoid) {
        this.name = name; // student name
        this.vision_pref = vision; // vision-based distance preference
        this.student_avoid = avoid; // student to avoid sitting by
    }
}

const bob = new Student('Bob', 'near', 'Steve')
const rachel = new Student('Rachel', null, null)
const steve = new Student('Steve', null, 'Bob')
const jill = new Student('Jill', 'far', null)
const kenny = new Student('Kenny', null, 'Bob')
const beth = new Student('Beth', null, null)

const students = [];

students.push(bob, rachel, steve, jill, kenny, beth)

console.log(students)

const rosterDisplay= document.getElementById('roster')

rosterDisplay.innerHTML = 'test'

// these are the two desk pods that the students should end up in
const podOne = []
const podTwo = []

// sorting order:  1. vision, 2. avoidance

students