document.addEventListener("DOMContentLoaded", function () {
  const countElement = document.querySelector(".quantity_detail .number"); // Lấy phần tử số lượng
  let count = parseInt(countElement.textContent); // Khởi tạo số lượng

  // Thêm sự kiện cho nút tăng
  document.querySelector(".number-plus").addEventListener("click", function () {
    console.log("Nút tăng được nhấp"); // Kiểm tra sự kiện
    count++; // Tăng số lượng lên 1
    countElement.textContent = count; // Cập nhật số lượng trong thẻ number
  });

  // Thêm sự kiện cho nút giảm
  document
    .querySelector(".number-minus")
    .addEventListener("click", function () {
      console.log("Nút giảm được nhấp"); // Kiểm tra sự kiện
      if (count > 1) {
        count--; // Giảm số lượng đi 1
        countElement.textContent = count; // Cập nhật số lượng trong thẻ number
      }
    });
});
