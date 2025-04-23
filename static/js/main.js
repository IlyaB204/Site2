const nav = document.querySelector('#nav');
const btn = document.querySelector('#button1'); // Исправлено: 'buttin1' на 'button1'
const imgbtn = document.querySelector('#img-nav-btn');

if (btn) { // Проверка наличия кнопки
    btn.onclick = () => {
        if (nav.classList.toggle('open')) {
            imgbtn.src = "static/img/Frame 7.png";
        } else {
            imgbtn.src = "static/img/nav-logo.png";
        }
    };
} else {
    console.error('Button not found');
}
