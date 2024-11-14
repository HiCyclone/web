let eyeicon = document.getElementById("eyeicon");
        let password = document.getElementById("password");
        let reeyeicon = document.getElementById("reeyeicon");
        let repassword = document.getElementById("repassword");
        eyeicon.onclick = function(){
            if(password.type == "password"){
                password.type = "text";
                eyeicon.src = "../../image/hethong/eye-open.png"
            }
            else{
                password.type = "password";
                eyeicon.src = "../../image/hethong/eye.png"
            }
        }
        reeyeicon.onclick = function(){
            if(repassword.type == "password"){
                repassword.type = "text";
                reeyeicon.src = "../../image/hethong/eye-open.png"
            }
            else{
                repassword.type = "password";
                reeyeicon.src = "../../image/hethong/eye.png"
            }
        }

const users = [
    { username: "user1", email: "user1@gmail.com", password: "123" },
    { username: "user2", email: "user2@gmail.com", password: "123" }
];
document.getElementById("registerForm")
document.addEventListener("submit",function (event){
    event.preventDefault();
    const username =document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repassword = document.getElementById("repassword").value;
    if(password !== repassword){
        Swal.fire({
            icon: "error",
            title: "Mật khẩu nhập lại không trùng",
            text: "Vui lòng nhập đúng mật khẩu",
            
          });
        return;
    }
    // Kiểm tra xem email hoặc username đã tồn tại chưa
    const userExists = users.some(user => user.email === email || user.username === username);
    if (userExists) {
        Swal.fire({
            icon: "error",
            title: "Tài khoản đã tồn tại.",
            text: " Vui lòng đăng nhập hoặc sử dụng thông tin khác.",
            
          });
        return;
    }
    users.push({ username, email, password });
    Swal.fire({
        title: "Đăng ký thành công!",
        text: "Chuyển đến trang chủ",
        icon: "success"
    }).then(()=>{
        window.location.href = "login.html"; // Điều hướng đến trang đăng nhập
    });
    
    
});    
