document.addEventListener("DOMContentLoaded", function(){
    const user = {
    // Lấy tên người dùng từ sessionStorage
        fullName: sessionStorage.getItem("fullName"),
        email: sessionStorage.getItem("email"),
        phone: sessionStorage.getItem("phone"),
        address: sessionStorage.getItem("address"),
        avatar: sessionStorage.getItem("avatar")
    };
    
    // Kiểm tra nếu người dùng đã đăng nhập, nếu không chuyển về trang đăng nhập
    if (user.email) {
        // Cập nhật thông tin vào các phần tử trong trang profile
        document.getElementById("fullNameDisplay").textContent = user.fullName;
        document.getElementById("emailDisplay").textContent = user.email;
        document.querySelector('input[name="fullName"]').value = user.fullName;
        document.querySelector('input[name="phone"]').value = user.phone;
        document.querySelector('input[name="address"]').value = user.address;
        // Hiển thị ảnh đại diện
        const avatarElement = document.getElementById("avatarDisplay");
        avatarElement.src = user.avatar; // Đặt đường dẫn ảnh đại diện

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Không tìm thấy thông tin tài khoản!',
            text: 'Bạn chưa đăng nhập vui lòng đăng nhập.'
        }).then(() => {
            window.location.href = "../../index.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    function renderCart(){
        const checkOutTable = document.querySelector("tbody");
        checkOutTable.innerHTML = "";
        
        let totalInvoice = 0;
        let shippingFee = 20000;

        cart.forEach(product => {
            const row = document.createElement("tr");

            row.innerHTML = `
            <td><img src="${product.image}" alt="${product.title}" /></td>
            <td>${product.title}</td>
            <td>${product.quantity}</td>
            <td>${(product.price * product.quantity).toLocaleString()}₫</td>
        `;

        checkOutTable.appendChild(row);

        totalInvoice += product.price * product.quantity;
        });
        document.querySelector("#cost").innerText = totalInvoice.toLocaleString() + '₫';
        let totalWithShipping = totalInvoice + shippingFee;
        document.querySelector("#total").innerText = totalWithShipping.toLocaleString() + '₫';
    }
    renderCart();
});