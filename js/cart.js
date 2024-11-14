document.addEventListener("DOMContentLoaded", () => {
  // Lấy giỏ hàng từ sessionStorage
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  // Hiển thị các sản phẩm trong giỏ hàng
  function renderCart() {
    const cartTableBody = document.querySelector("tbody");
    cartTableBody.innerHTML = ""; // Xóa dữ liệu cũ

    let totalInvoice = 0;

    cart.forEach(product => {
      // Tạo một dòng trong bảng cho mỗi sản phẩm
      const row = document.createElement("tr");

      row.innerHTML = `
        <td><a href="#" class="delete-btn">Xóa</a></td>
        <td><img src="${product.image}" alt="${product.title}" /></td>
        <td>${product.title}</td>
        <td>${product.price.toLocaleString()}₫</td>
        <td><input type="number" value="${product.quantity}" min="1" max="100" class="quantity-input"></td>
        <td>${(product.price * product.quantity).toLocaleString()}₫</td>
      `;

      cartTableBody.appendChild(row);

      // Cộng dồn vào tổng hóa đơn
      totalInvoice += product.price * product.quantity;
    });

    // Cập nhật tổng giỏ hàng
    document.querySelector("tfoot p strong").innerText = totalInvoice.toLocaleString() + '₫';

    // Cập nhật các sự kiện xóa sản phẩm và thay đổi số lượng
    addEventListeners();
  }

  // Thêm sự kiện xóa sản phẩm
  function addEventListeners() {
    // Thêm sự kiện click cho các nút xóa
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        const row = this.closest('tr'); // Tìm dòng (row) chứa nút "Xóa"
        const productTitle = row.querySelector("td:nth-child(3)").textContent.trim();
        
        // Tìm sản phẩm trong giỏ hàng và xóa
        cart = cart.filter(product => product.title !== productTitle);
        sessionStorage.setItem("cart", JSON.stringify(cart));

        // Cập nhật lại bảng giỏ hàng
        renderCart();
      });
    });

    // Thêm sự kiện thay đổi số lượng
    const quantityInputs = document.querySelectorAll('.quantity-input');
    quantityInputs.forEach(input => {
      input.addEventListener("input", function() {
        const row = this.closest('tr');
        const productTitle = row.querySelector("td:nth-child(3)").textContent.trim();
        
        // Cập nhật số lượng sản phẩm trong giỏ hàng
        const newQuantity = parseInt(this.value);
        if (newQuantity < 1) this.value = 1;
        if (newQuantity > 100) this.value = 100;

        const product = cart.find(item => item.title === productTitle);
        if (product) {
          product.quantity = newQuantity;
          product.totalPrice = product.price * newQuantity;
        }

        // Lưu lại giỏ hàng và cập nhật tổng giỏ hàng
        sessionStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      });
    });
  }
  const cartButton = document.querySelector('.cart-btn2');
  if (cartButton) {
    cartButton.addEventListener('click', function(event) {
      if (cart.length === 0) {
        event.preventDefault(); // Ngừng chuyển hướng đến trang khác
        Swal.fire({
          title: "Giỏ hàng bạn đang trống",
          text: "Vui lòng thêm sản phẩm vào giỏ hàng để thanh toán",
          icon: "warning",
          confirmButtonText: "OK"
        });
      }
    });
  }
  // Gọi hàm renderCart để hiển thị sản phẩm trong giỏ hàng khi trang tải xong
  renderCart();
});
