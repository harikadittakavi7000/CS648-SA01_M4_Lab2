/*eslint-env browser*/

// all employees

let allEmployees = [[101, "Harika Dittakavi", 11, "hdittakavi@gmail.com", "Administrative"],
    [102, "Priyanka Dittakavi", 12, "pdittakavi@gmail.com", "Executive"],
    [103, "Meeta Kapoor", 13, "mkapoor@gmail.com", "Marketing"],
    [104, "Aishwariya Chunduru", 14, "achunduru@gmail.com", "Human Resources"],
    [105, "Prasanthi Movva", 15, "pmovva@vgmail.com", "Sales"]]

if (localStorage.getItem('employees') !== null) {
    allEmployees = JSON.parse(localStorage.getItem('employees'))
}

let addEmployeeForm     = document.getElementById('addEmployeeForm')
let empTable    = document.getElementById('empTable')
let empCount    = document.getElementById('empCount')

buildGrid()

// adding the data

addEmployeeForm.addEventListener('submit', (emp) => {
    emp.preventDefault();
    let employeeID       = parseInt(document.getElementById('id').value)
    let employeeName     = document.getElementById('name').value
    let employeeExtention      = parseInt(document.getElementById('extension').value)
    let employeeEmail    = document.getElementById('email').value
    let employeeDepartment     = document.getElementById('department').value
    let newEmployees = [employeeID, employeeName, employeeExtention, employeeEmail, employeeDepartment]
    allEmployees.push(newEmployees)
    buildGrid()
    addEmployeeForm.reset()
    addEmployeeForm.id.focus()
})

// removing the data

empTable.addEventListener('click', (emp) => {
    if (emp.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            let rowIndex = emp.target.parentNode.parentNode.rowIndex
            allEmployees.splice(rowIndex - 1, 1)
            buildGrid()
        }
    }
})

// building the grid

function buildGrid() {
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

// storing data
    
localStorage.setItem('employees', JSON.stringify(allEmployees))
}
