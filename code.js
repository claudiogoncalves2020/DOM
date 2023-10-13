let titulo = document.querySelector("h1");
console.log(titulo);

titulo.textContent = "Outro titulo";
titulo.textContent;

let testando = document.querySelectorAll(".box");

document.write(testando[0].textContent);
document.write(testando[1].textContent);
document.write(testando[2].textContent);
testando[0].textContent = "outro nome";

let testTag = document.getElementsByTagName("div");

let testId = document.getElementById("titulo");
