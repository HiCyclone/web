// Lấy các mục chính và các danh sách con
const menuToggle1 = document.getElementById("menu_Toggle");
const menuToggle2 = document.getElementById("menu_Toggle_2");
const menuToggle3 = document.getElementById("menu_Toggle_3");

const subMenu1 = document.getElementById("sub_menu_left_1");
const subMenu2 = document.getElementById("sub_menu_left_2");
const subMenu3 = document.getElementById("sub_menu_left_3");

// Hàm để hiển thị hoặc ẩn menu con
function toggleMenu(subMenu) {
  subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
}

// Thêm sự kiện click cho các mục
menuToggle1.addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn chuyển hướng
  toggleMenu(subMenu1); // Hiển thị/ẩn SÁCH MẦM NON
  subMenu2.style.display = "none"; // Ẩn các menu con khác
  subMenu3.style.display = "none";
});

menuToggle2.addEventListener("click", function (event) {
  event.preventDefault();
  toggleMenu(subMenu2); // Hiển thị/ẩn SÁCH THIẾU NHI
  subMenu1.style.display = "none";
  subMenu3.style.display = "none";
});

menuToggle3.addEventListener("click", function (event) {
  event.preventDefault();
  toggleMenu(subMenu3); // Hiển thị/ẩn SÁCH KỸ NĂNG
  subMenu1.style.display = "none";
  subMenu2.style.display = "none";
});
document.addEventListener("click", function (event) {
  // Kiểm tra xem người dùng có nhấp vào menu hoặc các mục con không
  if (
    !event.target.closest(".cartegory_item") && // Kiểm tra nếu nhấp không vào bất kỳ mục nào
    !event.target.closest("#sub_menu_left_1") &&
    !event.target.closest("#sub_menu_left_2") &&
    !event.target.closest("#sub_menu_left_3")
  ) {
    // Ẩn tất cả các menu con khi nhấp bên ngoài
    subMenu1.style.display = "none";
    subMenu2.style.display = "none";
    subMenu3.style.display = "none";
  }
});
