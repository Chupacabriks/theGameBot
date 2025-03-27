'use strict';

//функция на рандомное число
function gameStart() {
  const randomInit = Math.floor(Math.random() * 100) + 1;
  console.log("Загаданное число:" + randomInit);
  let attemptsLeft = 10;

  function game() {
    if (attemptsLeft <= 0) {
      const restart = confirm("Попытки закончились, хотите сыграть еще?");
      if (restart) {
        game();
      } else {
        alert("Спасибо за игру!")
      }
      return;
    }

    const userInput = prompt("Угадай число от 1 до 100");

    if (userInput === null) {
      alert("Игра окончена");
      return;
    }

    //приравниваем к числу
    const transformNumber = Number(userInput);

    //проверяем на число 
    if (isNaN(transformNumber)) {
      alert("Введите число!");
      askUser();
      return;
    }
    //сравнение числа
    if (transformNumber === randomInit) {
      const restart = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
      if (restart) {
        gameStart();
      } else {
        alert("Спасибо за игру!");
      }
      return;
    }
    attemptsLeft--;

    if (transformNumber > randomInit) {
      alert(`Загаданное число меньше, осталось попыток: ${attemptsLeft}`);
    } else if (transformNumber < randomInit) {
      alert(`Загаданное число больше, осталось попыток: ${attemptsLeft}`);
    }
    game();
  }
  game();
}

gameStart();