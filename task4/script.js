// Global student data array
var students = [];

// Add student functionality
function addStudent() {
  var name = prompt("Enter student's name:");
  if (!name || name.trim() === '') {
    alert("Name cannot be empty.");
    return;
  }

  var marks = [];
  for (var i = 1; i <= 5; i++) {
    var mark = prompt("Enter marks for subject " + i + " (out of 100):");
    mark = parseInt(mark, 10);
    if (isNaN(mark) || mark < 0 || mark > 100) {
      alert("Marks must be a number between 0 and 100.");
      return;
    }
    marks.push(mark);
  }

  // Calculate total and average marks
  var total = 0;
  for (var j = 0; j < marks.length; j++) {
    total += marks[j];
  }
  var average = (total / marks.length).toFixed(2);

  // Add student data to the array
  students.push({
    name: name,
    marks: marks,
    total: total,
    average: average
  });

  // Update the table
  updateTable();
}

// Update the table dynamically
function updateTable() {
  var tableBody = document.getElementById("student-table").querySelector("tbody");
  tableBody.innerHTML = ""; // Clear existing rows

  for (var i = 0; i < students.length; i++) {
    var row = "<tr>";
    row += "<td>" + students[i].name + "</td>";
    for (var j = 0; j < students[i].marks.length; j++) {
      row += "<td>" + students[i].marks[j] + "</td>";
    }
    row += "<td>" + students[i].total + "</td>";
    row += "<td>" + students[i].average + "</td>";
    row += "</tr>";
    tableBody.innerHTML += row;
  }
}

// Add event listener to the button
document.getElementById("add-student-btn").onclick = addStudent;

// Change div color on mouse events
var colorDiv = document.getElementById("color-div");
colorDiv.onmousemove = function() {
  colorDiv.style.backgroundColor = "lightgreen";
};
colorDiv.onmouseout = function() {
  colorDiv.style.backgroundColor = "lightblue";
};

// Array operations
var numbers = [10, 20, 30, 40];

// Add a number to the end of the array
function addNumberToEnd(number) {
  numbers[numbers.length] = number;
}

// Remove the first number from the array
function removeFirstNumber() {
  for (var i = 1; i < numbers.length; i++) {
    numbers[i - 1] = numbers[i];
  }
  numbers.length -= 1;
}

// Insert a number at a specific index
function insertNumberAtIndex(index, number) {
  for (var i = numbers.length; i > index; i--) {
    numbers[i] = numbers[i - 1];
  }
  numbers[index] = number;
}

// Replace all occurrences of a number
function replaceNumber(oldNumber, newNumber) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === oldNumber) {
      numbers[i] = newNumber;
    }
  }
}

// Sort array in ascending order (without using sort())
function sortArrayAscending() {
  for (var i = 0; i < numbers.length - 1; i++) {
    for (var j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        var temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
}

// Reverse array (without using reverse())
function reverseArray() {
  var start = 0;
  var end = numbers.length - 1;
  while (start < end) {
    var temp = numbers[start];
    numbers[start] = numbers[end];
    numbers[end] = temp;
    start++;
    end--;
  }
}

// Find the index of a specific number
function findIndexOfNumber(number) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === number) {
      return i;
    }
  }
  return -1; // Number not found
}
