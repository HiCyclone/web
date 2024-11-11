// Lấy tất cả các nút "Xóa"
const deleteButtons = document.querySelectorAll('.delete-btn');

// Thêm sự kiện click cho từng nút
deleteButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    const row = this.closest('tr'); // Tìm dòng (row) chứa nút "Xóa"
    row.remove(); // Xóa dòng khỏi bảng
  });
});

function updateCart() {
  let rows = document.querySelectorAll("tbody tr"); // Lấy tất cả các hàng trong bảng
  let totalInvoice = 0; // Biến lưu tổng hóa đơn

  rows.forEach(row => {
    // Lấy giá và số lượng của từng sản phẩm
    let price = parseFloat(row.querySelector("td:nth-child(4)").innerText.replace('₫', '').replace(',', ''));
    let quantity = parseInt(row.querySelector("input[type='number']").value);

    // Tính tổng cho từng sản phẩm và hiển thị
    let total = price * quantity;
    row.querySelector("td:nth-child(6)").innerText = total.toLocaleString() + '₫';

    // Cộng vào tổng hóa đơn
    totalInvoice += total;
  });

  // Hiển thị tổng hóa đơn
  document.querySelector("tfoot p strong").innerText = totalInvoice.toLocaleString() + '₫';
}

// Thêm sự kiện khi số lượng thay đổi
document.querySelectorAll("input[type='number']").forEach(input => {
  input.addEventListener("input", updateCart);
});

// Hàm xóa sản phẩm và cập nhật tổng hóa đơn
function deleteProduct(event) {
  // Ngăn chặn hành động mặc định của liên kết
  event.preventDefault();

  // Lấy hàng hiện tại và xóa nó khỏi bảng
  const row = event.target.closest("tr");
  row.remove();

  // Cập nhật lại tổng hóa đơn
  updateCart();
}

// Thêm sự kiện cho nút "Xóa" của từng sản phẩm
document.querySelectorAll("td a").forEach(deleteButton => {
  deleteButton.addEventListener("click", deleteProduct);
});

// Gọi hàm để cập nhật ngay khi tải trang
updateCart();

