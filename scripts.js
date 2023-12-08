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

var theToggle = document.getElementById("toggle");

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
  return new RegExp(" " + className + " ").test(" " + elem.className + " ");
}
// addClass
function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += " " + className;
  }
}
// removeClass
function removeClass(elem, className) {
  var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
  if (hasClass(elem, className)) {
    while (newClass.indexOf(" " + className + " ") >= 0) {
      newClass = newClass.replace(" " + className + " ", " ");
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, "");
  }
}
// toggleClass
function toggleClass(elem, className) {
  var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
  if (hasClass(elem, className)) {
    while (newClass.indexOf(" " + className + " ") >= 0) {
      newClass = newClass.replace(" " + className + " ", " ");
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, "");
  } else {
    elem.className += " " + className;
  }
}

theToggle.onclick = function () {
  toggleClass(this, "on");
  return false;
};

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
