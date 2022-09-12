# Logic notes

## Student Criteria
Student-specific criteria that affect seating placement
- **Eyesight** - Students with poor eyesight may need to sit near the front of the room to see the board
- **Illness** - Students with long-term illness may need to sit near the door for reastroom access or medical care
- **Injury** - Students with an injury may need to be accomodated; leg injury may need a desk with easy access, arm in a cast may require no other student on a particular side, etc
- **Behavior** - Students with disciplinary issues may need to be away from other students, or specific students may need to be separated

---
## Classroom Layouts
### Desk Arrangments
- **Spaced columns** - desks are spaced evenly apart from one another in neat columns facing the front. The traditional layout most people picture.
- **Staggered columns** - similar to spaced columns but each row is staggered horizontally to create a diamond pattern. Increased spacing between students for privacy or pandemic requirements. Takes up more space.
- **Pods/Groups** - groups of desks, usually 4 to 6, arranged in a group and facing each other, i.e. two deks on one side facing an opposite set of desks. Similar to sitting at a table facing one another.
- **Tables** - similar to pods but actually using tables instead of desks. Options for table shape and number of students.
- **U-shaped** - Desks are arranged in a large 'U' shape, allowing the teacher to teach in the center and be seen by everyone up-close.
- **Custom** - make your own custom layout.

### Sorting Methods
*All methods use entered data to avoid conflicts and place students with needs where they need to be*
- **Random** - completely random placement. Can be repeated until desired layout is produced.
- **Class number** - students arranged by their assigned class number
- **Alphabetical** - students arranged by last name
- **Student-chosen** - allow students to pick their own seats and enter info manually. Good luck.

---

## Features and Options
- 'Lock' button/manual student assignment
- History feature to remember previous layouts
- Use history to prevent repeat layouts
- Add 'landmarks' to layout for room orientation, i.e. teacher desk, door, windows, tables, counters, etc.

---

## Technical

### Initial Plan

#### CSS Grid
- Use CSS grid to create a large interactive grid space to represent the classroom
- Each grid cell can be either 'active' or 'inactive'
- Active cells represent desks, inactive cells represent open space
- Pre-selected layouts would automatically set the state of cells appropriately
- In custom mode, user can click cells to toggle their states, allowing for any custom layout

#### JS Logic
*First thoughts, subject to change*
- Create two arrays of students, one for students with restrictions, one for students without
- Iterate though the restricted students first, placing them appropriately throughout the classroom
- Iterate through the unrestricted array next, filling in the remaining spots

*Desks/Groups*
- Desks can either be single entities, in such arrangements as spaced columns, etc, or they can be organized in logical groups in the case of pods/tables
- This must be taken into account when sorting students
- Example - for single-entity desks, students' criteria is only compared against one another to determine immediately adjacent conflicts
- For logical groups, the entire group's criteria must be compared in order to prevent group-wide conflicts