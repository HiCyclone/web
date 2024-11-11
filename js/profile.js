document.addEventListener("DOMContentLoaded", function(){
    const user = {
        username: sessionStorage.getItem("username"), // Lấy tên người dùng từ sessionStorage
        fullName: sessionStorage.getItem("fullName"),
        email: sessionStorage.getItem("email"),
        description: sessionStorage.getItem("description"),
        dob: sessionStorage.getItem("dob"),
        country: sessionStorage.getItem("country"),
        phone: sessionStorage.getItem("phone"),
        address: sessionStorage.getItem("address"),
        avatar: sessionStorage.getItem("avatar")
    };
    
    // Kiểm tra nếu người dùng đã đăng nhập, nếu không chuyển về trang đăng nhập
    if (user.username) {
        // Cập nhật thông tin vào các phần tử trong trang profile
        document.getElementById("usernameDisplay").textContent = user.username;
        document.getElementById("fullNameDisplay").textContent = user.fullName;
        document.getElementById("emailDisplay").textContent = user.email;
        document.getElementById("descriptionDisplay").textContent = user.description;
        document.getElementById("dobDisplay").textContent = user.dob;
        document.getElementById("countryDisplay").textContent = user.country;
        document.getElementById("phoneDisplay").textContent = user.phone;
        document.getElementById("addressDisplay").textContent = user.address;
        // Hiển thị ảnh đại diện
        const avatarElement = document.getElementById("avatarDisplay");
        avatarElement.src = user.avatar; // Đặt đường dẫn ảnh đại diện
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Không tìm thấy thông tin tài khoản!',
            text: 'Bạn chưa đăng nhập hoặc thông tin tài khoản bị mất.'
        }).then(() => {
            window.location.href = "../../index.html";
        });
    }
});