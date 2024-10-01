const registerBtns = document.querySelectorAll('.js-register-btn')
const loginBtns = document.querySelectorAll('.js-login-btn')
const modals = document.querySelectorAll('.modal')

const modalRegister = document.getElementById('register-modal')
const modalLogin = document.getElementById('login-modal')

const modalContainers = document.querySelectorAll('.js-modal-container')

function showLoginModal() {
    modalLogin.style.display = "flex";
}
function showResigterModal() {
    modalRegister.style.display = "flex";
}
function hideLoginModal() {
    modalLogin.style.display = "none";
}
function hideRegisterModal() {
    modalRegister.style.display = "none";
}
loginBtns.forEach(function (event) {
    event.addEventListener('click', function () {
        if (!event.classList.contains('auth-form__switch-btn')) {
            showLoginModal();
        }
        else {
            hideRegisterModal();
            showLoginModal();
        }
    })
})
registerBtns.forEach(function (event) {
    event.addEventListener('click', function () {
        if (!event.classList.contains('auth-form__switch-btn')) {
            showResigterModal();
        }
        else {
            hideLoginModal();
            showResigterModal();
        }
    })
})

// modal.addEventListener('click', hideBuyModal)
for (const modal of modals) {
    modal.addEventListener('click', function (event) {
        if (event.currentTarget == modalRegister) {
            hideRegisterModal();
        }
        if (event.currentTarget == modalLogin) {
            hideLoginModal();
        }
    })
}
for (const modalContainer of modalContainers) {
    modalContainer.addEventListener('click', function (event) {
        event.stopPropagation()
    })
}
// Lấy phần tử icon
const likeIcon = document.getElementById("heart");

// Thêm sự kiện click vào icon
likeIcon.addEventListener("click", function () {
    const iconElement = likeIcon.querySelector("i");

    // Kiểm tra nếu có class fa-regular (icon chưa nhấn)
    if (iconElement.classList.contains("fa-regular")) {
        // Đổi sang fa-solid (icon đã nhấn)
        iconElement.classList.remove("fa-regular");
        iconElement.classList.add("fa-solid");
        iconElement.style.color = "red"; // Thay đổi màu sang đỏ
    } else {
        // Nếu đã là fa-solid (icon đã nhấn), đổi lại thành fa-regular (icon chưa nhấn)
        iconElement.classList.remove("fa-solid");
        iconElement.classList.add("fa-regular");
        iconElement.style.color = ""; // Trả lại màu mặc định (đen) khi chưa like
    }
});
