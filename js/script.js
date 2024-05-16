const boxes = document.querySelectorAll(".box");
const ratingElement = document.querySelector("#rating-number");
const btn = document.querySelector(".btn");

// Add click event to boxes.
// When a box is clicked, save the rating to local storage and redirect to thank-you.html
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Remove "selected" class from all boxes
    boxes.forEach((b) => b.classList.remove("selected"));

    // Add "selected" class to the clicked box
    box.classList.add("selected");

    const rating = box.getAttribute("data-value");

    localStorage.setItem("rating", rating);
  });
});

if (btn) {
  btn.addEventListener("click", () => {
    window.location.href = "thank-you.html";
  });
}

// Get rating from local storage
if (ratingElement) {
  const rating = localStorage.getItem("rating");
  if (rating) {
    ratingElement.textContent = rating;
  } else {
    ratingElement.textContent = "N/A";
  }
}
