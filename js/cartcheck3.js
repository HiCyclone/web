document.getElementById("cartBox").addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn điều hướng mặc định
    Swal.fire({
      title: "Bạn cần đăng nhập để sử dụng giỏ hàng",
      text: "Vui lòng đăng nhập để tiếp tục",
      icon: "info",
      confirmButtonText: "Đăng nhập"
    }).then((result) => {
      if (result.isConfirmed) {
        // Chuyển hướng đến trang đăng nhập sau khi người dùng nhấn "Đăng nhập"
        window.location.href = "../../login.html";
      }
    });
  });
  document.getElementById("cartIcon").addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn điều hướng mặc định
    Swal.fire({
      title: "Bạn cần đăng nhập để sử dụng giỏ hàng",
      text: "Vui lòng đăng nhập để tiếp tục",
      icon: "info",
      confirmButtonText: "Đăng nhập"
    }).then((result) => {
      if (result.isConfirmed) {
        // Chuyển hướng đến trang đăng nhập khi người dùng xác nhận
        window.location.href = "../../login.html";
      }
    });
  });
  