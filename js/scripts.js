var imageSlider = document.getElementById('imagesSlider');

var images = ["url('img/images1.jpeg')", "url('img/images2.jpeg')", "url('img/images3.jpeg')", "url('img/images4.jpeg')"];
var counter = 0;


function carousel() {
  imagesSlider.style.backgroundImage = images[counter];
  counter++;
  if (counter > 3) {
    counter = 0;
  }
}
setInterval(carousel, 3000);
