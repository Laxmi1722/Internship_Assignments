var numbers = [10, 20, 30, 40];

// Add a number to the end of the array
function addNumberToEnd(number) {
  numbers[numbers.length] = number;
  console.log("After adding:", numbers);
}

// Remove the first number from the array
function removeFirstNumber() {
  for (var i = 1; i < numbers.length; i++) {
    numbers[i - 1] = numbers[i];
  }
  numbers.length -= 1;
  console.log("After removing first number:", numbers);
}

// Insert a number at a specific index
function insertNumberAtIndex(index, number) {
  for (var i = numbers.length; i > index; i--) {
    numbers[i] = numbers[i - 1];
  }
  numbers[index] = number;
  console.log("After inserting at index " + index + ":", numbers);
}

// Replace all occurrences of a number with another number
function replaceNumber(oldNumber, newNumber) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === oldNumber) {
      numbers[i] = newNumber;
    }
  }
  console.log("After replacing " + oldNumber + " with " + newNumber + ":", numbers);
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
  console.log("After sorting:", numbers);
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
  console.log("After reversing:", numbers);
}

// Find the index of a specific number
function findIndexOfNumber(number) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === number) {
      console.log("Index of " + number + ":", i);
      return i;
    }
  }
  console.log(number + " not found.");
  return -1;
}

// Example usage
addNumberToEnd(50);
removeFirstNumber();
insertNumberAtIndex(2, 25);
replaceNumber(25, 100);
sortArrayAscending();
reverseArray();
findIndexOfNumber(100);
