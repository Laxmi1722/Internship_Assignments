var colorDiv = document.getElementById("color-div");

colorDiv.addEventListener("mousemove", function () {
  colorDiv.style.backgroundColor = "lightgreen";
});

colorDiv.addEventListener("mouseout", function () {
  colorDiv.style.backgroundColor = "lightblue";
});
