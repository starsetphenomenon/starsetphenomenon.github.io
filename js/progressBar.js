let progitems, viewItems, progressBar;

function init() {
  progitems = document.querySelectorAll(".progress_item");
  progressBar = document.querySelector(".progress_bar");
  createSpans();
}

function createSpans() {
  progitems.forEach((item, key) => {
    const elememt = document.createElement("span");

    elememt.setAttribute("id", `prog__elem${key}`);
    progressBar.appendChild(elememt);
    item.setAttribute("data-id", `prog__elem${key}`);
  });

  console.log(document.querySelectorAll(`section[data-id]`));
}

function removeClass() {
  document
    .getElementById("progress_bar")
    .querySelectorAll("span")
    .forEach((item) => {
      item.classList.remove("active");
    });
}

window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("data-id");

      console.log(entry.intersectionRatio);
      if (entry.intersectionRatio > 0) {
        document.getElementById(id).classList.add("active");
      } else {
        document.getElementById(id).classList.remove("active");
      }
    });
  });

  document.querySelectorAll(`section[data-id]`).forEach((section) => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", init);
