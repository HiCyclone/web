// Hàm để lấy thông tin các sản phẩm từ HTML
function getProductsFromHTML() {
  const productItems = document.querySelectorAll(".product-item");
  const products = [];

  productItems.forEach((item) => {
    const name = item.querySelector(".product-name")
      ? item.querySelector(".product-name").textContent
      : "";
    const image = item.querySelector(".product-image")
      ? item.querySelector(".product-image").src
      : "";
    const price = item.querySelector(".discount-tag")
      ? item
          .querySelector(".discount-tag")
          .previousElementSibling.textContent.trim()
      : "";
    const originalPrice = item.querySelector(".original-price")
      ? item.querySelector(".original-price").textContent.trim()
      : "";
    const discount = item.querySelector(".discount-tag")
      ? item.querySelector(".discount-tag").textContent
      : "";

    // Lấy đường dẫn từ thẻ <a>
    const link = item.querySelector("a.product-name")
      ? item.querySelector("a.product-name").getAttribute("href")
      : "#"; // Đảm bảo giá trị hợp lệ

    products.push({
      name,
      image,
      price,
      originalPrice,
      discount,
      link, // Thêm link vào sản phẩm
    });
  });

  return products;
}

// Dữ liệu sản phẩm từ HTML
const products = getProductsFromHTML();
let currentPage = localStorage.getItem("currentPage")
  ? parseInt(localStorage.getItem("currentPage"))
  : 1; // Lấy currentPage từ localStorage nếu có, mặc định là 1 nếu không có

// Hàm để tải nội dung trang sản phẩm
function loadPage(pageNumber) {
  const productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = ""; // Xóa nội dung trang trước

  const pageProducts = products.slice((pageNumber - 1) * 4, pageNumber * 4); // Giới hạn số sản phẩm trên mỗi trang, ví dụ 4 sản phẩm mỗi trang
  pageProducts.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    // Kiểm tra và đảm bảo product.link có giá trị hợp lệ
    const productLink = product.link ? product.link : "#"; // Đảm bảo có giá trị mặc định nếu product.link không xác định

    productItem.innerHTML = `
      <a href="${productLink}" class="product-link" onclick="localStorage.setItem('currentPage', ${pageNumber})">
        <img src="${product.image}" alt="${product.name}" class="product-image">
      </a>
      <a href="${productLink}" class="product-name" onclick="localStorage.setItem('currentPage', ${pageNumber})">${product.name}</a>
      <p>
          <del class="original-price">${product.originalPrice}</del>
          ${product.price}
          <span class="discount-tag">${product.discount}</span>
      </p>
    `;

    productContainer.appendChild(productItem);
  });

  currentPage = pageNumber; // Cập nhật trang hiện tại
  localStorage.setItem("currentPage", currentPage); // Lưu currentPage vào localStorage
  updatePageButtons(); // Cập nhật trạng thái các nút
}

// Hàm để chuyển đến trang tiếp theo
function nextPage() {
  const totalPages = Math.ceil(products.length / 4); // Tổng số trang
  if (currentPage < totalPages) {
    const nextPage = currentPage + 1;
    loadPage(nextPage);
  }
}

// Hàm để chuyển đến trang trước đó
function prevPage() {
  const prevPage = currentPage - 1 >= 1 ? currentPage - 1 : 1; // Kiểm tra xem có thể quay lại trang trước không
  loadPage(prevPage);
}

// Hàm để cập nhật trạng thái các nút chuyển trang
function updatePageButtons() {
  const totalPages = Math.ceil(products.length / 4);

  // Vô hiệu hóa nút prev và next nếu ở trang đầu hoặc trang cuối
  document.getElementById("nextButton").disabled = currentPage === totalPages;
  document.getElementById("prevButton").disabled = currentPage === 1;

  // Cập nhật trạng thái các số trang
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.getElementById(`page${i}`);
    if (pageButton) {
      // Xóa lớp 'active' khỏi tất cả các nút trang
      pageButton.classList.remove("active");

      // Thêm lớp 'active' cho nút trang hiện tại
      if (currentPage === i) {
        pageButton.classList.add("active");
      }
    }
  }
}

// Tải trang đầu tiên khi trang web được mở
window.onload = function () {
  loadPage(currentPage); // Tải trang từ giá trị currentPage đã lưu
};
