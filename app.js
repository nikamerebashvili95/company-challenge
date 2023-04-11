// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
// ********** fixed navbar ************

const navbar = document.getElementById("nav");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 78) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////
const slidereffect = document.querySelectorAll(".news-img");
const leftslide = document.getElementById("left");
const rightslide = document.getElementById("right");

const savedImg = [
  "./assets/images/slider/img-1.png",
  "./assets/images/slider/img-2.png",
  "./assets/images/slider/img-3.png",
  "./assets/images/slider/img-4.png",
];

let starter = 1;

function slideright(rightslide) {
  starter += 1;
  for (let i = 0; i < slidereffect.length; i++) {
    slidereffect[i].src = savedImg[(starter + i) % savedImg.length];
  }
}

function slideleft(leftslide) {
  starter -= 1;
  if (starter < 0) {
    starter = savedImg.length - 1;
  }
  for (let i = 0; i < slidereffect.length; i++) {
    slidereffect[i].src = savedImg[(starter + i) % savedImg.length];
  }
}

console.log(slidereffect);
