(() => {
  const slider = document.querySelector("#image-slider");
  const prevBtn = document.querySelector("#prev-btn");
  const nextBtn = document.querySelector("#next-btn");
  let slideWidth = slider.clientWidth;

  let currentIndex = 0;

  function showSlide(index) {
    const newTransformValue = -index * slideWidth + "px";

    console.log(newTransformValue);
    slider.style.transform = "translateX(" + newTransformValue + ")";
  }

  function nextSlide() {
    console.log(currentIndex);
    currentIndex++;

    if (currentIndex >= slider.children.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = slider.children.length - 1;
    }
    showSlide(currentIndex);
  }

  function updateSlideWidth() {
    slideWidth = slider.clientWidth;
    showSlide(currentIndex);
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  window.addEventListener("resize", updateSlideWidth);

  updateSlideWidth();
})();

/*light box*/

const lightbox = document.querySelector("#flavor-lightbox");
const images = document.querySelectorAll(".box_img");
const content = document.querySelector("#flavor-lightbox article");

let flavors = [
  {
    name: "Original",
    description: "Original Taste",
    image: "images/original.jpg",
  },
  {
    name: "Grapes",
    description: "Grapes taste",
    image: "images/grapes.jpg",
  },
  {
    name: "Orange",
    description: "Orange taste",
    image: "images/orange.jpg",
  },
];

function fillContent(event) {
  event.preventDefault();

  const flavorIndex = this.dataset.flavorIndex;
  const flavor = flavors[flavorIndex];

  console.log(this.dataset.flavorIndex);

  content.innerHTML = "";

  // Set the flavor name
  let flavorName = document.createElement("h3");
  flavorName.innerText = flavor.name;
  flavorName.classList.add("lb_heading");
  content.appendChild(flavorName);

  // Set the flavor description
  let flavorDescription = document.createElement("p");
  flavorDescription.innerText = flavor.description;
  flavorDescription.classList.add("lb_text");
  content.appendChild(flavorDescription);

  // Set the flavor image
  let flavorImage = document.createElement("img");
  flavorImage.src = flavor.image;
  flavorImage.alt = flavor.name;
  flavorImage.classList.add("lb_image");
  content.appendChild(flavorImage);

  lightbox.style.display = "block";
}

// Attach event listeners to each image
images.forEach(function (img, index) {
  img.dataset.flavorIndex = index;
  img.addEventListener("click", function (event) {
    console.log("Image clicked:", this.src);
    fillContent.call(this, event);
  });
});

const lightboxClose = document.querySelector(".lightbox_close");
lightboxClose.addEventListener("click", function (event) {
  event.preventDefault();
  lightbox.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});

//thank you message

document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("subscribe-button");

  button.addEventListener("click", function () {
    var messageElement = document.getElementById("thank-you-message");

    messageElement.textContent = "Thank you for subscribing!";

    messageElement.style.display = "block";
  });
});
