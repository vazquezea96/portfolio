document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementsByTagName("body");
  const themeSwitcherButton = document.getElementById("toggle");

  themeSwitcherButton.addEventListener("click", function () {
    // Toggle the 'light-theme' class on the body
    document.body.classList.toggle("light-theme");


    // Toggle any specific styles for other elements if needed
    content.classList.toggle("light-theme-content");

    // Save the user's preference in localStorage
    const isLightTheme = document.body.classList.contains("light-theme");
    localStorage.setItem("isLightTheme", isLightTheme);
  });

  // Check the user's preference from localStorage on page load
  const savedTheme = localStorage.getItem("isLightTheme");
  if (savedTheme === "true") {
    document.body.classList.add("light-theme");
    // You may need to add specific styles for other elements here
  }
});
