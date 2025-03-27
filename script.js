'use strict';

//функция на рандомное число
function gameStart() {
  const randomInit = Math.floor(Math.random() * 100) + 1;
  console.log("Загаданное число:" + randomInit);

  function askUser() {
    const userInput = prompt("Угадай число от 1 до 100");

    //проверяем на отмену
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
      alert(" Поздравляю, Вы угадали!!!");
      return;
    } else if (transformNumber > randomInit) {
      alert("Загаданное число меньше");
    } else if (transformNumber < randomInit) {
      alert("Загаданное число больше");
    }
    askUser();
  }
  askUser();
}

gameStart();