/**Código Javascript para sistema de animação de menu (hamburger menu)  */

/**associa os elementos HTML correspondentes às variáveis declaradas anteriormente.*/
function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

function toggleAnimation() {

  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    clone.classList.remove("copy");
    /**Reseta variáveis*/
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
  });
}

/**Declarando variaveis associadas a elementos HTML*/
var toggle_btn;
var hamburger_menu;

const main = document.querySelector("main");
declare();
events();
