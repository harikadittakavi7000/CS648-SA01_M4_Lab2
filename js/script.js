/*eslint-env browser*/

//all employees
let allEmployees = [[80180181, "Ritesh Deshmukh", 1298, "edeshmukh@gmail.com", "Marketing"],
    [80180182, "Genelia Deshmukh", 1278, "gdeshmukh@gmail.com", "Sales"],
    [80180183, "Shahid Kapoor", 6778, "skapoor12@gmail.com", "Administrative"],
    [80180184, "Meera Kapoor", 9090, "mkapoor78@gmail.com", "Executive"],
    [80180185, "Kiara Advani", 6789, "kadvani@vgmail.com", "Quality Assurance"]]

if (localStorage.getItem('employees') !== null) {
    allEmployees = JSON.parse(localStorage.getItem('employees'))
}

let addform     = document.getElementById('addForm')
let empTable    = document.getElementById('empTable')
let empCount    = document.getElementById('empCount')
Gridbuilding()

//add that data
addform.addEventListener('submit', (e) => {
    e.preventDefault();
    let employeeID       = parseInt(document.getElementById('id').value)
    let employeeName     = document.getElementById('name').value
    let employeeExtention      = parseInt(document.getElementById('extension').value)
    let employeeEmail    = document.getElementById('email').value
    let employeeDepartment     = document.getElementById('department').value
    let newEmployees = [employeeID, employeeName, employeeExtention, employeeEmail, employeeDepartment]
    allEmployees.push(newEmployees)
    Gridbuilding()
    addform.reset()
    addform.id.focus()
})

//remove that data
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            let rowIndex = e.target.parentNode.parentNode.rowIndex
            allEmployees.splice(rowIndex - 1, 1)
            Gridbuilding()
        }
    }
})

// Build the required grid

function Gridbuilding() {
    empTable.lastElementChild.remove()
    let tbody = document.createElement('tbody')
    for (let employee of allEmployees) {
        tbody.innerHTML += 
        `<tr>
            <td>${employee[0]}</td>
            <td>${employee[1]}</td>
            <td>${employee[2]}</td>
            <td>${employee[3]}</td>
            <td>${employee[4]}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `}
empTable.appendChild(tbody);
empCount.value = `(${allEmployees.length})`

//Store the required data
    
localStorage.setItem('employees', JSON.stringify(allEmployees))
}
