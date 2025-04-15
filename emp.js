document.getElementById('employeeForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const position = document.getElementById('position').value;
    const salary = document.getElementById('salary').value;
  
    // Create a new row in the table
    const table = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
  
    // Insert cells
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
  
    // Add data to cells
    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = position;
    cell4.innerHTML = salary;
    cell5.innerHTML = '<button class="delete-btn" onclick="deleteEmployee(this)">Delete</button>';
  
    // Clear the form
    document.getElementById('employeeForm').reset();
  });
  
  // Function to delete an employee row
  function deleteEmployee(button) {
    const row = button.parentElement.parentElement;
    row.remove();
  }