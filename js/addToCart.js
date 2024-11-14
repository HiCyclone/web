document.addEventListener("DOMContentLoaded", () => {
    const addToCartButton = document.querySelector(".btn-addcart");
    const quantityElement = document.querySelector(".number");
    let quantity = parseInt(quantityElement.textContent); // Lấy số lượng ban đầu từ giao diện

    // Lấy giá trị price cố định từ .current (không thay đổi)
    const price = parseFloat(document.querySelector(".current").textContent.replace("đ", "").replace(",", ""));

    // Thêm sự kiện tăng/giảm số lượng
    document.querySelector(".number-plus").addEventListener("click", () => {
        quantity += 1;
        quantityElement.textContent = quantity;
    });

    document.querySelector(".number-minus").addEventListener("click", () => {
        if (quantity > 1) {
            quantity -= 1;
            quantityElement.textContent = quantity;
        }
    });

    addToCartButton.addEventListener("click", (event) => {
        event.preventDefault();

        // Lấy đường dẫn hình ảnh từ thẻ <img> trong HTML
        const imageSrc = document.querySelector(".product-image").src;

        // Tạo đối tượng sản phẩm
        const product = {
            id: document.querySelector(".sku").textContent.trim(),
            title: document.querySelector(".product-title").textContent.trim(),
            author: document.querySelector(".author").textContent.trim(),
            price: price, // Giá cố định
            quantity: quantity, // Số lượng được chọn
            totalPrice: price * quantity, // Tổng giá dựa trên giá và số lượng
            image: imageSrc // Lấy đường dẫn hình ảnh từ HTML
        };

        // Lưu giỏ hàng vào sessionStorage
        let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity += product.quantity;
            existingProduct.totalPrice = existingProduct.price * existingProduct.quantity;
        } else {
            cart.push(product);
        }

        sessionStorage.setItem("cart", JSON.stringify(cart));
        Swal.fire({
            title: "Thành công!",
            text: "Sản phẩm đã được thêm vào giỏ hàng!",
            icon: "success"
        });
    });
});
