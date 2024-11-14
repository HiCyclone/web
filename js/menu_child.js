// Lấy các phần tử mũi tên và các menu con
const arrow1 = document.querySelector(".cartegory-item:nth-child(3) .span-arr");
const arrow2 = document.querySelector(".cartegory-item:nth-child(4) .span-arr");
const arrow3 = document.querySelector(".cartegory-item:nth-child(5) .span-arr");

const subMenu1 = document.getElementById("sub_menu_left_1");
const subMenu2 = document.getElementById("sub_menu_left_2");
const subMenu3 = document.getElementById("sub_menu_left_3");

// Hàm để hiển thị hoặc ẩn menu con và xoay mũi tên
function toggleMenu(subMenu, arrowIcon) {
  if (subMenu.style.display === "block") {
    subMenu.style.display = "none";
    arrowIcon.classList.remove("rotate"); // Xoay mũi tên trở lại
  } else {
    subMenu.style.display = "block";
    arrowIcon.classList.add("rotate"); // Xoay mũi tên xuống
  }
}

// Gắn sự kiện click vào từng mũi tên để mở/đóng menu con
arrow1.addEventListener("click", (event) => {
  event.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài

  toggleMenu(subMenu1, arrow1); // Hiển thị menu con SÁCH MẦM NON
  subMenu2.style.display = "none";
  subMenu3.style.display = "none";

  arrow2.classList.remove("rotate");
  arrow3.classList.remove("rotate");
});

arrow2.addEventListener("click", (event) => {
  event.stopPropagation();

  toggleMenu(subMenu2, arrow2); // Hiển thị menu con SÁCH THIẾU NHI
  subMenu1.style.display = "none";
  subMenu3.style.display = "none";

  arrow1.classList.remove("rotate");
  arrow3.classList.remove("rotate");
});

arrow3.addEventListener("click", (event) => {
  event.stopPropagation();

  toggleMenu(subMenu3, arrow3); // Hiển thị menu con SÁCH KỸ NĂNG
  subMenu1.style.display = "none";
  subMenu2.style.display = "none";

  arrow1.classList.remove("rotate");
  arrow2.classList.remove("rotate");
});

// Ẩn tất cả menu con khi nhấp ra ngoài
document.addEventListener("click", function (event) {
  if (
    !event.target.closest(".cartegory_item") &&
    !event.target.closest("#sub_menu_left_1") &&
    !event.target.closest("#sub_menu_left_2") &&
    !event.target.closest("#sub_menu_left_3")
  ) {
    subMenu1.style.display = "none";
    subMenu2.style.display = "none";
    subMenu3.style.display = "none";

    // Đặt lại tất cả mũi tên
    arrow1.classList.remove("rotate");
    arrow2.classList.remove("rotate");
    arrow3.classList.remove("rotate");
  }
});
