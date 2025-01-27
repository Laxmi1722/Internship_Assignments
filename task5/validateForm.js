document.getElementById("user-form").addEventListener("submit", function (event) {
    var name = document.getElementById("name").value.trim();
    var age = parseInt(document.getElementById("age").value, 10);
  
    if (name === "") {
      alert("Name cannot be empty.");
      event.preventDefault();
    } else if (isNaN(age) || age < 18) {
      alert("Age must be 18 or above.");
      event.preventDefault();
    }
  });
  