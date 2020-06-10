let add = document.querySelector("#inc");
let deac = document.querySelector("#dec");
let input = document.querySelector("input");

add.addEventListener("click" , () =>{
    input.value = parseInt(input.value) + 1;
});


deac.addEventListener("click" , () =>{
    input.value = parseInt(input.value) - 1;
});