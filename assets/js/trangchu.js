// Chờ cho toàn bộ giao diện HTML tải xong rồi mới chạy JS
document.addEventListener("DOMContentLoaded", function () {
    
    // Tìm form tư vấn bằng ID đã đặt trong HTML
    const consultantForm = document.getElementById("consultantForm");

    if (consultantForm) {
        consultantForm.addEventListener("submit", function (event) {
            // Ngăn chặn hành động tải lại trang mặc định của form
            event.preventDefault();

            // Lấy dữ liệu từ các ô nhập liệu
            const parentName = document.getElementById("fullName").value.trim();
            const phoneNumber = document.getElementById("phoneNumber").value.trim();
            const ageGroup = document.getElementById("learningGoal").value;

            // Kiểm tra nhanh xem đã nhập đủ thông tin chưa
            if (parentName === "" || phoneNumber === "") {
                alert("Ba mẹ vui lòng điền đầy đủ họ tên và số điện thoại nhé!");
                return;
            }

            // Hiển thị thông báo đăng ký thành công cho phụ huynh
            alert(`Cảm ơn Anh/Chị ${parentName} đã đăng ký! BrightEnglish sẽ liên hệ tư vấn lộ trình cho bé (${ageGroup}) qua số điện thoại ${phoneNumber} trong vòng 24 giờ tới.`);
            
            // Xóa sạch dữ liệu trong form sau khi gửi thành công
            consultantForm.reset();
        });
    }
});
