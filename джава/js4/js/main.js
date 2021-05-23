"use strict";

function createNewUser(){
    let newUser = {
        getLogin: function() {
            return console.log(this.firstName[0].toLowerCase() + this.secondName.toLowerCase()) ;
        }
    };
    newUser.firstName = prompt("Write your first name (Впишіть своє ім'я)");
    newUser.secondName = prompt("Write your second name (Впишіть своє призвіще)");
    newUser.getLogin();
    return newUser;
}
createNewUser();
