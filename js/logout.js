function confirmLogout() {
  Swal.fire({
    title: "Bạn có chắc chắn muốn đăng xuất?",
    text: "Bạn sẽ cần đăng nhập lại để truy cập vào tài khoản.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Đăng xuất",
    cancelButtonText: "Hủy"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Đã đăng xuất!",
        text: "Bạn đã được đăng xuất khỏi tài khoản.",
        icon: "success"
      }).then(() => {
        // Điều hướng đến trang đăng xuất hoặc trang chủ
        window.location.href = "../../index.html";
      });
    }
  });
}