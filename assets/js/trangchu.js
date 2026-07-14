document.addEventListener("DOMContentLoaded", function () {
        const consultantForm = document.getElementById("consultantForm");

    if (consultantForm) {
        consultantForm.addEventListener("submit", function (event) {
             event.preventDefault();
            const parentName = document.getElementById("fullName").value.trim();
            const phoneNumber = document.getElementById("phoneNumber").value.trim();
            const ageGroup = document.getElementById("learningGoal").value;
            if (parentName === "" || phoneNumber === "") {
                alert("Ba mẹ vui lòng điền đầy đủ họ tên và số điện thoại nhé!");
                return;
            }

           alert(`Cảm ơn Anh/Chị ${parentName} đã đăng ký! BrightEnglish sẽ liên hệ tư vấn lộ trình cho bé (${ageGroup}) qua số điện thoại ${phoneNumber} trong vòng 24 giờ tới.`);
               consultantForm.reset();
        });
    }
});
