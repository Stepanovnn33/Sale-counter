// Делаем расчеты 

const currentYear = new Date().getFullYear();



const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');





function updateCounter() {


        const nextYear = new Date(`April 15 ${currentYear} 00:00:00`);
        const currentTime = new Date();
        const diff = nextYear - currentTime;

            // Перевод в дни
        const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);

        // Перевод в часы
        const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;

        // Перевод в минуты
        const minutesLeft = Math.floor(diff / 1000 / 60) % 60;

        // Перевод в секунды
        const secondsLeft = Math.floor(diff / 1000) % 60;


        days.innerHTML = daysLeft < 10 ? '0' + daysLeft : daysLeft;
        hours.innerHTML = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
        minutes.innerHTML = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
        seconds.innerHTML = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

}

updateCounter();

setInterval(updateCounter, 1000);