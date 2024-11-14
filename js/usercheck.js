document.addEventListener("DOMContentLoaded" ,function(){
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
    if(!user.username){
        Swal.fire({
            icon: 'error',
            title: 'Không tìm thấy thông tin tài khoản!',
            text: 'Bạn chưa đăng nhập vui lòng đăng nhập.'
        }).then(() => {
            window.location.href = "../../index.html";
        });
    }
});