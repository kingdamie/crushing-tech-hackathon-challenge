var currentOpenDropdown = null;
var currentOpenIcon = null;

function toggleNotificationDropdown(dropdownId, iconId) {
  var dropdown = document.getElementById(dropdownId);
  var icon = document.getElementById(iconId);

  // Close the currently open dropdown if exists
  if (currentOpenDropdown && currentOpenDropdown !== dropdown) {
    currentOpenDropdown.style.display = "none";
    resetStyles(currentOpenIcon);
  }

  // Toggle display
  dropdown.style.display =
    dropdown.style.display === "none" || dropdown.style.display === ""
      ? "block"
      : "none";

  // Toggle styles
  if (dropdown.style.display === "block") {
    applyStyles(icon);
    currentOpenDropdown = dropdown;
    currentOpenIcon = icon;
  } else {
    resetStyles(icon);
  }
}

function applyStyles(element) {
  element.style.borderStyle = "solid";
  element.style.borderColor = "#005bd3";
  element.style.borderWidth = "2px";
  element.style.background = "#656266";
}

function resetStyles(element) {
  element.style.borderStyle = "";
  element.style.borderColor = "";
  element.style.borderWidth = "";
  element.style.background = "";
}

function togglePlanVisibility() {
  var planContainer = document.getElementById("planContainer");
  planContainer.classList.toggle("visible");
}

function toggleIcons() {
  const downIcon = document.querySelector(".down-icon");
  const firstSvg = downIcon.querySelector("svg:first-child");
  const secondSvg = downIcon.querySelector("svg:last-child");

  firstSvg.style.display =
    firstSvg.style.display === "none" ? "inline-block" : "none";
  secondSvg.style.display =
    secondSvg.style.display === "none" ? "inline-block" : "none";

  const stepItems = document.querySelector(".step-items");
  stepItems.classList.toggle("hidden");
}

function updateProgress(itemId) {
  var checkbox = document.getElementById(itemId);
  var progressBar = document.getElementById("progressBar");
  var completedCount = document.getElementById("completedCount");

  // Update progress bar
  var completedItems = document.querySelectorAll(
    ".step-items input:checked"
  ).length;
  var totalItems = document.querySelectorAll(".step-items input").length;
  var progressPercentage = (completedItems / totalItems) * 100;
  progressBar.style.width = progressPercentage + "%";

  // Update completed count
  completedCount.textContent =
    completedItems + " / " + totalItems + " completed";
}

const svgButtons = document.querySelectorAll(".svgButton");

svgButtons.forEach((svgButton) => {
  const defaultSvg = svgButton.querySelector(".defaultSvg");
  const hoverSvg = svgButton.querySelector(".hoverSvg");
  const clickSvg = svgButton.querySelector(".clickSvg");
  const fourthSvg = svgButton.querySelector(".fourthSvg");

  let isClicked = false;

  svgButton.addEventListener("mouseover", function () {
    if (!isClicked) {
      defaultSvg.style.display = "none";
      hoverSvg.style.display = "block";
      clickSvg.style.display = "none";
    }
  });

  svgButton.addEventListener("mouseout", function () {
    if (!isClicked) {
      defaultSvg.style.display = "block";
      hoverSvg.style.display = "none";
      clickSvg.style.display = "none";
    }
  });

  svgButton.addEventListener("click", function () {
    if (!isClicked) {
      hoverSvg.style.display = "none";
      clickSvg.style.display = "block";
      clickSvg.classList.add("rotate");
      isClicked = true;

      setTimeout(function () {
        clickSvg.style.display = "none";
        clickSvg.classList.remove("rotate");
        fourthSvg.style.display = "block";
      }, 1000);
    } else {
      fourthSvg.style.display = "none";
      hoverSvg.style.display = "none";
      clickSvg.style.display = "none";
      clickSvg.classList.remove("rotate");
      defaultSvg.style.display = "none";
      isClicked = false;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {

  var headings = document.querySelectorAll("h2");

  headings.forEach(function (heading) {
    heading.addEventListener("click", function () {

      var paragraph = this.nextElementSibling;

      var customCheckbox = this.closest(".custom-checkbox");

      headings.forEach(function (otherHeading) {
        var otherParagraph = otherHeading.nextElementSibling;

        if (otherParagraph !== paragraph) {
          otherParagraph.style.display = "none";
        }
        
      });

      paragraph.style.display =
        paragraph.style.display === "none" ? "flex" : "none";

      if (paragraph.style.display === "flex") {
        customCheckbox.style.alignItems = "flex-start";
      } else {
        customCheckbox.style.alignItems = "center";
      }


    });
  });
});
