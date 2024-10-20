const headerBtn = document.querySelector(".mobile-btn");
const headerMenu = document.querySelector(".fixed-header > .menu");

headerBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("show");
});

const fixedHeaderSet = () => {
  if (document.documentElement.clientWidth <= 767) {
    document.querySelector(".fixed-header").classList.add("mobile");
  } else {
    document.querySelector(".fixed-header").classList.remove("mobile");
  }
};

window.addEventListener("scroll", function () {
  var top = this.scrollY;

  if (top > 80) {
    document.querySelector(".fixed-header").classList.add("fixed");
  } else {
    document.querySelector(".fixed-header").classList.remove("fixed");
  }
});

document.addEventListener("DOMContentLoaded", fixedHeaderSet);

window.onload = function () {
  document.querySelector(".background-img").classList.add("show");
};

window.addEventListener("resize", fixedHeaderSet);

const handleResponse = (response) => {
  console.log("blogger response", response);
  var post_number = Object.keys(response.items).length; //number of posts
  var post_content = "";

  post_number = post_number > 6 ? 6 : post_number;

  for (i = 0; i < post_number; i++) {
    post_content += `<div class="postcard">
      <p class="blog-title">${response.items[i].title}</p>
      <p class="blog-content"></p>
      <p class="published">${response.items[i].published}</p>
      <a class="blog-link-btn" href="${response.items[i].url}" target="_blank"> View </a>
    </div>`;
  }
  document.querySelector(".blog-inner").innerHTML = post_content;

  document.querySelectorAll(".blog-content").forEach((e, i) => {
    e.innerHTML = `<div class="blog-filter"></div>${response.items[i].content}`;
  });

  document.getElementById("video-p-btn").addEventListener("click", () => {
    window.open("./portfolio_video.html");
  });
  document.getElementById("prog-p-btn").addEventListener("click", () => {
    window.open("./portfolio_programming.html");
  });
  document.getElementById("blog-btn").addEventListener("click", () => {
    window.open("https://willjo1029.blogspot.com", "_blank");
  });
  document.getElementById("main-skill-btn").addEventListener("click", () => {
    window.open("./about.html#skills");
  });
  document.getElementById("about-btn").addEventListener("click", () => {
    window.open("./about.html");
  });
  document.getElementById("activity-btn").addEventListener("click", () => {
    window.open("./about.html#activities");
  });
};
