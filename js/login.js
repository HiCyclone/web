let eyeicon = document.getElementById("eyeicon");
        let password = document.getElementById("password");
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


        const users = [
            { 
                username: "user1", 
                email: "user1@gmail.com", 
                password: "123",
                fullName: "Khỉ Cha",
                description: "Tôi là khỉ cha",  
                dob: "2005-01-03", 
                country: "Việt Nam", 
                phone: "093 897 2544",
                address: "273 Đ. An Dương Vương, Phường 3, Quận 5, Hồ Chí Minh",
                avatar: "../../image/hethong/avatar1.png" 
             },
            
             { 
                username: "user2", 
                email: "user2@gmail.com", 
                password: "123",
                fullName: "Đồn Lình",
                description: "Tôi là khỉ con",  
                dob: "2005-11-10", 
                country: "Việt Nam", 
                phone: "090 808 7817",
                address: "123 Đường 3/2, Phường 3, Quận 10, Hồ Chí Minh",
                avatar: "../../image/hethong/avatar2.png" 
             },
        ];
        
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault();
        
            const login = document.getElementById("login").value;
            const password = document.getElementById("password").value;
        
            // Kiểm tra thông tin đăng nhập
            const user = users.find(user => (user.username === login || user.email === login) && user.password === password);
        
            if (user) {
                // Lưu thông tin vào sessionStorage
                sessionStorage.setItem("username", user.username);
                sessionStorage.setItem("fullName", user.fullName);
                sessionStorage.setItem("email", user.email);
                sessionStorage.setItem("description", user.description);
                sessionStorage.setItem("dob", user.dob);
                sessionStorage.setItem("country", user.country);
                sessionStorage.setItem("phone", user.phone);
                sessionStorage.setItem("address", user.address);
                sessionStorage.setItem("avatar", user.avatar);
        
                Swal.fire({
                    title: "Đăng nhập thành công!",
                    text: "Chuyển đến trang thông tin tài khoản",
                    icon: "success"
                }).then(() => {
                    window.location.href = "../user/user.html";
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Đăng nhập không thành công!",
                    text: "Tên đăng nhập hoặc mật khẩu sai"
                });
            }
        });
        
