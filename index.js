window.addEventListener('load', () => {
	document.querySelector('.loader').classList.add('hide')
	document.querySelector('.wrapper').classList.remove('hide')
})

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

const skillIcons = Array.from(document.querySelectorAll('.skills__icon img'));
const skillTexts = [
{
	title: 'html5',
	text: 'Язык для структурирования и представления содержимого интернета. В HTML версии 5 улучшена поддержка мультимедиа-технологий, при этом сохранена обратная совместимость, читаемость кода для человека и простота анализа для парсеров.'
},
{
	title: 'css3',
	text: 'Язык для описания внешнего вида страниц сайта. Возможности CSS3 — создание анимации без использования JavaScript, поддержка градиентов, теней и многое другое.'
},
{
	title: 'bootstrap',
	text: 'Bootstrap является самым популярным HTML, CSS, и JS фреймворком в мире для строительства aдаптивных, mobile-first проектов в интернете.'
},
{
	title: 'javascript',
	text: 'Самый популярный язык программирования для разработки веб-приложений. Единственный язык, который поддерживается на любых устройствах и платформах.'
},
{
	title: 'jquery',
	text: 'jQuery это быстрая, небольшая и богатая возможностями JavaScript библиотека. Она позволяет очень просто делать такие вещи как: обход элементов или манипуляция элементами HTML документа или AJAX запросы.'
},
{
	title: 'react',
	text: 'Простая и удобная JavaScript-библиотека для создания пользовательских интерфейсов. React предоставляет виртуальный DOM API для взаимодействия между кодом и реальным DOM. В основе лежит использование компонентов — частей пользовательского интерфейса, содержащих в себе разметку и функциональность.'
},
{
	title: 'node',
	text: 'Серверная реализация языка программирования JavaScript, основанная на движке V8. Предназначена для создания масштабируемых распределённых сетевых приложений, таких как веб-сервер.'
},
{
	title: 'mongodb',
	text: 'MongoDB — документоориентированная система управления базами данных с открытым исходным кодом, не требующая описания схемы таблиц.'
}
]

for (let skillIcon of skillIcons) {
	skillIcon.addEventListener('mouseover', function() {
		for(let skillIcon of skillIcons) {
			skillIcon.classList.remove('active');
		}
		skillIcon.classList.add('active');
		let currentSkill = skillIcons.indexOf(skillIcon);
		document.querySelector('.skills__text h3').textContent = skillTexts[currentSkill].title;
		document.querySelector('.skills__text p').textContent = skillTexts[currentSkill].text;
	})
}


// Test

const TOKEN = '1329616006:AAHwKTLDSO-j-uVHBgvAlqvnNlVrEbWc4dM'; // токен от BotFather
const CHAT_ID = '-416550848'; // chat_id для телеграм

var form = document.querySelector('.contact-form'); // находим в DOM нашу лид-форму
form.addEventListener("submit", function (e) { // прослушиваем форму
    e.preventDefault(); // перехватываем стандартный ответ
    data = new FormData(this); // вместо serialize на jQuery
    sendMsg(data); // передаём данные из формы на отправку
})

function sendMsg(data) {
    var url = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'; // токен бота
    var body = JSON.stringify({ // склеиваем объект в JSON строку
        chat_id: CHAT_ID,
        parse_mode: 'Markdown', // разметка сообщений вкл (чтобы использовать *жирный текст*)
        text: '*Имя:* ' + data.get("name") + '\n*Email:* ' + data.get("email") + '\n*Сообщение:* ' + data.get("message")
    });
    var xhr = new XMLHttpRequest(); // инициализируем AJAX запрос
    xhr.open('POST', url, true); // отправляем наше сообщение методом POST на сервак телеги
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // на всякий случай, оповестим телеграм, что отправили JSON
    xhr.send(body);
}
