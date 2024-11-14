document.addEventListener("DOMContentLoaded", function() {
    // Lấy thông tin tài khoản từ sessionStorage
    const username = sessionStorage.getItem('username');
    const fullName = sessionStorage.getItem('fullName');
    const email = sessionStorage.getItem('email');
    const description = sessionStorage.getItem('description');
    const dob = sessionStorage.getItem('dob');
    const country = sessionStorage.getItem('country');
    const phone = sessionStorage.getItem('phone');
    const address = sessionStorage.getItem('address');
    const avatar = sessionStorage.getItem('avatar');

    // Kiểm tra nếu có dữ liệu tài khoản
    if (username) {
        // Điền dữ liệu vào các trường trong form
        document.querySelector('input[name="username"]').value = username;
        document.querySelector('input[name="fullName"]').value = fullName;
        document.querySelector('input[name="email"]').value = email;
        document.querySelector('textarea[name="description"]').value = description;
        document.querySelector('input[name="dob"]').value = dob;
        document.querySelector('select[name="country"]').value = country;
        document.querySelector('input[name="phone"]').value = phone;
        document.querySelector('input[name="address"]').value = address;

        // Cập nhật avatar
        if (avatar) {
            document.querySelector('img#avatar').src = avatar; // Cập nhật ảnh avatar từ sessionStorage
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Không tìm thấy thông tin tài khoản!',
            text: 'Bạn chưa đăng nhập vui lòng đăng nhập'
        }).then(() => {
            window.location.href = "../../index.html";
        });
    }

    // Xử lý khi người dùng nhấn "Lưu thay đổi"
    document.querySelector('.btn-custom').addEventListener('click', function () {
        const updatedAccount = {
            username: document.querySelector('input[name="username"]').value,
            fullName: document.querySelector('input[name="fullName"]').value,
            email: document.querySelector('input[name="email"]').value,
            description: document.querySelector('textarea[name="description"]').value,
            dob: document.querySelector('input[name="dob"]').value,
            country: document.querySelector('select[name="country"]').value,
            phone: document.querySelector('input[name="phone"]').value,
            address: document.querySelector('input[name="address"]').value
        };

        // Cập nhật thông tin trong sessionStorage
        sessionStorage.setItem('username', updatedAccount.username);
        sessionStorage.setItem('fullName', updatedAccount.fullName);
        sessionStorage.setItem('email', updatedAccount.email);
        sessionStorage.setItem('description', updatedAccount.description);
        sessionStorage.setItem('dob', updatedAccount.dob);
        sessionStorage.setItem('country', updatedAccount.country);
        sessionStorage.setItem('phone', updatedAccount.phone);
        sessionStorage.setItem('address', updatedAccount.address);

        Swal.fire('Cập nhật thành công', '', 'success');
    });
});


// Xử lý reset ảnh đại diện
document.querySelector('.btn-default').addEventListener('click', function() {
    // Reset avatar về mặc định
    document.querySelector('img').src = "../image/hethong/avatar.png"; // Reset về ảnh mặc định
    document.querySelector('input[type="file"]').value = ""; // Xóa chọn ảnh
});

// Xử lý hủy bỏ thay đổi (load lại trang)
document.getElementById("cancelButton").addEventListener('click', function() {
    Swal.fire({
        title: "Bạn có muốn hủy những thay đổi?",
        text: "Đặt những thông tin trở lại",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Có tôi muốn hủy!"
    }).then((result) => {
        if (result.isConfirmed) {
            // Nếu người dùng xác nhận, tải lại trang
            Swal.fire({
                title: "Các thay đổi đã hủy!",
                text: "Những thông tin của bạn đã trở lại ban đầu.",
                icon: "success"
            }).then(() => {
                location.reload(); // Tải lại trang sau khi xác nhận
            });
        }
    });
});



document.getElementById("phone").addEventListener("input", function(e) {
    let input = e.target.value.replace(/\D/g, ''); // Chỉ giữ lại các chữ số
    if (input.length > 10) input = input.substring(0, 10); // Giới hạn tối đa 10 chữ số

    // Chia dãy số thành các phần với định dạng 0xx xxx xxxx
    let formattedInput = input;
    if (input.length > 3) {
        formattedInput = input.substring(0, 3) + ' ' + input.substring(3);
    }
    if (input.length > 6) {
        formattedInput = input.substring(0, 3) + ' ' + input.substring(3, 6) + ' ' + input.substring(6);
    }

    e.target.value = formattedInput;
});



