function toastMsg({ title = '', message = '', type = 'info', duration = 3000 }) {
    let main = document.getElementById('toast');

    if (main) {
        let toast = document.createElement('div');
        let icons = {
            success: '<i class="fa-solid fa-circle-check"></i>',
            info: '<i class="fa-solid fa-circle-info"></i>',
            warning: '<i class="fa-solid fa-triangle-exclamation"></i>',
            error: '<i class="fa-solid fa-shield-exclamation"></i>'
        }
        let icon = icons[type]
        let delay = (duration / 1000).toFixed(2)

        // Auto remove toast
        let autoRemoveToast = setTimeout(function() {
            main.removeChild(toast)
        }, duration + 1500);

        // Remove toast when clicked
        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoRemoveToast)
            }
        }
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideIn ease 0.4s, slideOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                ${icon}
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;

        main.appendChild(toast);

    }
}



function showToastSuccess() {
    toastMsg({
        title: 'Success',
        message: 'Anyone with access can view your invited visitors',
        type: 'success',
        duration: 2000
    });
}

function showToastInfo() {
    toastMsg({
        title: 'Info',
        message: 'Anyone with access can view your invited visitors',
        type: 'info',
        duration: 2000
    });
}

function showToastWarning() {
    toastMsg({
        title: 'Warning',
        message: 'Anyone with access can view your invited visitors',
        type: 'warning',
        duration: 2000
    });
}

function showToastError() {
    toastMsg({
        title: 'Error',
        message: 'Anyone with access can view your invited visitors',
        type: 'error',
        duration: 2000
    });
}