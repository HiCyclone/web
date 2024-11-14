let slideIndex = 1;
showSlides(slideIndex);

// Nút tiếp theo / trước
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Hiển thị slide hiện tại
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Tự động chuyển đổi slide sau 5 giây
setInterval(function () {
  plusSlides(1);
}, 7000);

