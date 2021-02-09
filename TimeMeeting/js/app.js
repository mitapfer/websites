"use strict";

window.addEventListener('DOMContentLoaded', () => {

    class Timer {
        constructor(day, unicClass) {
            this.day = day;
            this.unicClass = unicClass;
        }

        render() {
            const element = document.createElement('div');
            element.classList.add(`timer__item`);
            element.classList.add(`${this.unicClass}`);

            element.innerHTML = `
                <div class="timer__title">Неделя от ${this.day} февраля</div>
                <div class="timer__title timer__title--sm">До начала встречи в среду:</div>
                <div class="timer__list wednesday">
                    <div class="timer__block">
                        <span id="days">12</span>
                        дней
                    </div>
                    <div class="timer__block">
                        <span id="hours">20</span>
                        часов
                    </div>
                    <div class="timer__block">
                        <span id="minutes">56</span>
                        минут
                    </div>
                    <div class="timer__block">
                        <span id="seconds">20</span>
                        секунд
                    </div>
                </div>

                <div class="timer__title timer__title--sm">До начала встречи в субботу:</div>
                <div class="timer__list saturday">
                    <div class="timer__block">
                        <span id="days">12</span>
                        дней
                    </div>
                    <div class="timer__block">
                        <span id="hours">20</span>
                        часов
                    </div>
                    <div class="timer__block">
                        <span id="minutes">56</span>
                        минут
                    </div>
                    <div class="timer__block">
                        <span id="seconds">20</span>
                        секунд
                    </div>
                </div>
            `;
            document.querySelector('.timer').firstElementChild.append(element);
        }
    }

    new Timer(8, 'week__eight').render();
    new Timer(15, 'week__fifteen').render();


    // Timer
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function getZero(num) {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000),
              timerBlock = document.querySelectorAll('.timer__block');

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                const parent = timerBlock[0].parentElement;
                parent.innerHTML = '';
                parent.innerHTML = '<div class="timer__title timer__title--nonemb">Встреча уже началась или прошла!</div>';
                parent.style.cssText = `
                    color: white;
                    margin-top: 50px;
                `;
            }
        }
    }

    // Неделя от 8 февраля
    setClock('.week__eight>.wednesday', '2021-02-10 18:30:00');
    setClock('.week__eight>.saturday', '2021-02-13 18:30:00');

    // Неделя от 15 февраля
    setClock('.week__fifteen>.wednesday', '2021-02-17 18:30:00');
    setClock('.week__fifteen>.saturday', '2021-02-20 18:30:00');
});

