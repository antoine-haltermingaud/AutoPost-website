function addAnimationOnLoad() {
  const title = document.querySelector(".title");
  const description = document.querySelector(".description");
  const button = document.querySelector(".cta-button");

  title.classList.add("animate");
  description.classList.add("animate");
  button.classList.add("animate");
}

window.addEventListener("load", addAnimationOnLoad);

window.addEventListener("scroll", () => {
  const title = document.querySelector(".title");
  const description = document.querySelector(".description");

  const titleOffset = title.getBoundingClientRect().top;
  const descriptionOffset = description.getBoundingClientRect().top;

  const screenHeight = window.innerHeight;

  if (titleOffset < screenHeight * 0.75) {
    title.classList.add("animate");
  }

  if (descriptionOffset < screenHeight * 0.75) {
    description.classList.add("animate");
  }
});

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("show");
}

// Close the menu when a link is clicked (optional)
document.querySelectorAll(".menu a").forEach((item) => {
  item.addEventListener("click", () => {
    const menu = document.querySelector(".menu");
    menu.classList.remove("show");
  });
});

function addAnimationOnScroll() {
  const listItems = document.querySelectorAll(".features-list li");

  listItems.forEach((item) => {
    const itemOffset = item.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (itemOffset < screenHeight * 0.75) {
      item.classList.add("animate");
    }
  });
}

window.addEventListener("scroll", addAnimationOnScroll);
window.addEventListener("load", addAnimationOnScroll);
