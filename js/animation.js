const listProduct = document.getElementById("list-product");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

nextBtn.addEventListener("click", () => {
  // Di chuyển sản phẩm đầu tiên ra cuối
  const firstProduct = listProduct.querySelector(".product-item");
  listProduct.appendChild(firstProduct);
});

prevBtn.addEventListener("click", () => {
  // Di chuyển sản phẩm cuối lên đầu
  const lastProduct = listProduct.querySelector(".product-item:last-child");
  listProduct.insertBefore(lastProduct, listProduct.firstChild);
});
