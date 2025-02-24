// DOM Elements
const passInput = document.querySelector(".password-field input");
const copyIcon = document.querySelector(".password-field .copy-btn");
const rangeInput = document.querySelector(".length-control input");
const sliderNum = document.querySelector(".length-control .length-value");
const generateButton = document.querySelector(".generate-btn");

// Configuration
const allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!&$%|[]{}():;.,*+-#@<>~";

/**
 * Генерує випадковий пароль на основі вибраної довжини
 * @returns {string} Згенерований пароль
 */
function createRandomPassword() {
    let newPassword = "";
    const passwordLength = rangeInput.value;

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        newPassword += allCharacters[randomIndex];
    }

    return newPassword;
}

/**
 * Оновлює відображення паролю в інтерфейсі
 */
function generatePassword() {
    const newPassword = createRandomPassword();
    passInput.value = newPassword;
    resetCopyIcon();
}

/**
 * Скидає іконку копіювання до початкового стану
 */
function resetCopyIcon() {
    copyIcon.classList.replace("fas", "far");
}

/**
 * Копіює пароль у буфер обміну
 */
function copyPassword() {
    navigator.clipboard.writeText(passInput.value);
    copyIcon.classList.replace("far", "fas");
}

/**
 * Оновлює відображення довжини паролю в інтерфейсі
 */
function updatePasswordLength() {
    sliderNum.innerText = rangeInput.value;
    generatePassword();
}

// Event Listeners
rangeInput.addEventListener("input", updatePasswordLength);
copyIcon.addEventListener("click", copyPassword);
generateButton.addEventListener("click", generatePassword);

// Ініціалізація при завантаженні
generatePassword();
