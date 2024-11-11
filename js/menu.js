const menuToggle = document.getElementById("menuToggle");
const sub_menu = document.getElementById("sub_menu");
const sub_menu_child = document.getElementById("sub_menu_child");
const sub_menu2 = document.getElementById("sub_menu2");
const sub_menu_child_1 = document.querySelector(".sub_menu_child_1"); // SÁCH THIẾU NHI
const sub_menu3 = document.getElementById("sub_menu3");
const sub_menu_child_2 = document.querySelector(".sub_menu_child_2"); // SÁCH KỸ NĂNG
const sub_menu4 = document.getElementById("sub_menu4");

// Sự kiện nhấp vào để hiện/ẩn menu chính
menuToggle.addEventListener("click", function (event) {
  event.stopPropagation();
  sub_menu.style.display =
    sub_menu.style.display === "block" ? "none" : "block";
});

// Sự kiện nhấp vào để hiện/ẩn menu con 1 (SÁCH MẦM NON)
sub_menu_child.addEventListener("click", function (event) {
  event.stopPropagation();
  // Ẩn tất cả các menu con khác trước khi hiện sub_menu2
  sub_menu3.style.display = "none"; // Ẩn SÁCH THIẾU NHI
  sub_menu4.style.display = "none"; // Ẩn SÁCH KỸ NĂNG
  sub_menu2.style.display =
    sub_menu2.style.display === "block" ? "none" : "block"; // Hiện/ẩn SÁCH MẦM NON
});

// Sự kiện nhấp vào để hiện/ẩn menu con 2 (SÁCH THIẾU NHI)
sub_menu_child_1.addEventListener("click", function (event) {
  event.stopPropagation();
  // Ẩn tất cả các menu con khác trước khi hiện sub_menu3
  sub_menu2.style.display = "none"; // Ẩn SÁCH MẦM NON
  sub_menu4.style.display = "none"; // Ẩn SÁCH KỸ NĂNG
  sub_menu3.style.display =
    sub_menu3.style.display === "block" ? "none" : "block"; // Hiện/ẩn SÁCH THIẾU NHI
});

// Sự kiện nhấp vào để hiện/ẩn menu con 3 (SÁCH KỸ NĂNG)
sub_menu_child_2.addEventListener("click", function (event) {
  event.stopPropagation();
  // Ẩn tất cả các menu con khác trước khi hiện sub_menu4
  sub_menu2.style.display = "none"; // Ẩn SÁCH MẦM NON
  sub_menu3.style.display = "none"; // Ẩn SÁCH THIẾU NHI
  sub_menu4.style.display =
    sub_menu4.style.display === "block" ? "none" : "block"; // Hiện/ẩn SÁCH KỸ NĂNG
});

// Sự kiện nhấp ra ngoài để ẩn menu
document.addEventListener("click", function () {
  sub_menu.style.display = "none";
  sub_menu2.style.display = "none"; // Ẩn SÁCH MẦM NON
  sub_menu3.style.display = "none"; // Ẩn SÁCH THIẾU NHI
  sub_menu4.style.display = "none"; // Ẩn SÁCH KỸ NĂNG
});
