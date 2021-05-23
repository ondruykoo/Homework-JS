'use strict';

let name;
let age;
  name = prompt('Whats your name? (Ваше ім"я)');
  age = prompt('How old are you? (Скільки вам років?)');

if(age<18)
{
alert("You are not allowed to visit this website! (Вам заборонено відвідувати цей сайт!)");
}
if(18<=age && age<=22)
{
let question = confirm('Are you sure you want to continue? (Ви впевнені, що хочете продовжити?)');
if(question==true)
{
alert(`Welcome (Вітаємо), ${name}!`);
}
else{
alert('You are not allowed to visit this website!(Вам заборонено відвідувати цей сайт!)');
}
}
if(age>22){
alert(`Welcome (Вітаємо), ${name}!`);
}