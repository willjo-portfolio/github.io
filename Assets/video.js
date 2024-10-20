dim = 10;
width = 10;
height = 10;

// add the squares
const addSquares = () => {
  return new Promise((resolve) => {
    document.querySelectorAll(".video-line").forEach((e) => {
      var toAdd = document.createDocumentFragment();
      for (var i = 0; i < dim; i++) {
        for (var j = 0; j < dim; j++) {
          var label = j + i * dim;
          var name = "b" + label;
          console.log(name);
          var div = document.createElement(name);
          div.style.width = width + "px";
          div.style.height = height + "px";
          div.style.backgroundColor = "white";
          div.style.display = "block";
          div.style.marginLeft = "10px";
          div.style.padding = "10px";
          toAdd.appendChild(div);
        }
      }
      e.appendChild(toAdd);
    });

    resolve();
  });
};

addSquares().then(() => {
  swiperFunction();
});

const swiperFunction = () => {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
