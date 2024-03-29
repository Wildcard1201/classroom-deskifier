
// student object
class Student {
    constructor(name, vision, avoid) {
        this.name = name; // student name
        this.vision_pref = vision; // vision-based distance preference
        this.student_avoid = avoid; // student to avoid sitting by
    }
}

// create students
const bob = new Student('Bob', 'near', null)
const rachel = new Student('Rachel', null, null)
const steve = new Student('Steve', null, null)
const jill = new Student('Jill', 'far', null)
const kenny = new Student('Kenny', null, 'Bob')
const beth = new Student('Beth', null, null)

// add students to array
const students = [];
students.push(bob, rachel, steve, jill, kenny, beth)
console.log(students)

// display roster on page
const rosterDisplay= document.getElementById('roster')
let rosterRaw = ''
students.forEach((e) => {
    rosterRaw += `Name: ${e.name}   ---> Vision Preference: ${e.vision_pref} Avoid: ${e.student_avoid} </br>`
})
rosterDisplay.innerHTML = rosterRaw

// get the sorting method
const sortButtons = document.querySelectorAll('input[name="sort"]')
const testButton = document.getElementById('test-btn')

testButton.addEventListener('click', test)

let sortValue
function test() {
    console.log('you hit the test button')

    for (let i = 0; i < sortButtons.length; i++) {
        if (sortButtons[i].checked) {
        sortValue = sortButtons[i].value;
        break
        }
    }
    console.log('Sort value: ' + sortValue)
}

const globalTestBtn = document.getElementById('test-btn-global')
globalTestBtn.addEventListener('click', bigTest)

function bigTest() {
    console.log('Global sort test: ' + sortValue)
}

const goButton = document.getElementById('btn-sort')
goButton.addEventListener('click', go)

function go() {
    students.forEach( (s) => {
        if(s.name === 'Beth') {
            podOne.push(s)
        } else {
            podTwo.push(s)
        }
    })
    let podOneRaw = ''
    let podTwoRaw = ''

    podOne.forEach((e) => {
        podOneRaw += `Name: ${e.name}   ---> Vision Preference: ${e.vision_pref} Avoid: ${e.student_avoid} </br>`
    })
    podTwo.forEach((e) => {
        podTwoRaw += `Name: ${e.name}   ---> Vision Preference: ${e.vision_pref} Avoid: ${e.student_avoid} </br>`
    })


    document.getElementById('output').innerHTML = `Pod One: </br>${podOneRaw} </br>
    Pod Two: </br>${podTwoRaw}`


    console.log('Pod one: ' + podOne)
    console.log('Pod two: ' + podTwo)
}



// these are the two desk pods that the students should end up in
var podOne = []   // front of room - should include Bob (vision near)
var podTwo = []   // back of room - Should include Kenny (avoidance of Bob) and Jill (vision far)
// Rachel, Steve, and Beth should be randomly assigned to any remaining seats
// each pod should have exactly three students

// sorting order:  1. vision, 2. avoidance


