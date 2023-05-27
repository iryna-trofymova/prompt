"use strict";
const Name = prompt("Hi! What is your name?");
if (Name === null || Name === "") {
  alert("Hello, noname! How are you?");
} else {
  alert("Hello, " + Name + "!How are you?");
}
