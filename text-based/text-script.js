
// student object

class Student {
    constructor(name, vision, avoid) {
        this.name = name; // student name
        this.vision_pref = vision; // vision-based distance preference
        this.student_avoid = avoid; // student to avoid sitting by
    }
}

const bob = new Student('Bob', 'near', null)
const rachel = new Student('Rachel', null, null)
const steve = new Student('Steve', null, null)
const jill = new Student('Jill', 'far', null)
const kenny = new Student('Kenny', null, 'Bob')
const beth = new Student('Beth', null, null)

const students = [];
students.push(bob, rachel, steve, jill, kenny, beth)
console.log(students)

const rosterDisplay= document.getElementById('roster')



const roster_raw = students.forEach((e) => {
    console.log(`Name: ${e.name} Vision: ${e.vision_pref} Avoid: ${e.student_avoid}`)
    return (`${e.name} ${e.vision_pref} ${e.student_avoid}`)
})

const testArray = [
    {name: 'Student1'},
    {name: 'Student2'},
    {name: 'Student3'},
    {name: 'Student4'}
]

let testDisplay = ''

testArray.forEach((e) => {
    testDisplay += e.name
})

rosterDisplay.innerHTML = 'display ' + testDisplay

// these are the two desk pods that the students should end up in
const podOne = []   // front of room - should include Bob (vision near)
const podTwo = []   // back of room - Should include Kenny (avoidance of Bob) and Jill (vision far)
// Rachel, Steve, and Beth should be randomly assigned to any remaining seats
// each pod should have exactly three students

// sorting order:  1. vision, 2. avoidance

