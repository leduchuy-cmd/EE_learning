// truncateCardTitle, rút ngắn chữ
window.addEventListener("load", function () {
  truncateCardTitle();
});

function truncateCardTitle() {
  var cardList = document.getElementsByClassName("card-title");
  // console.log(cardList);
  for (let i = 0; i < cardList.length; i++) {
    let text = cardList[i].innerHTML;
    let newText = truncateString(text, 50);
    cardList[i].innerHTML = newText;
  }
}

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
/* sidebae mini */
var totalBtn = document.querySelector(".sidebarMini__button");
var sidebarMini = document.querySelector(".sidebarMini");
var swichBtn = document.querySelector("#checkbox");
totalBtn.addEventListener("click", function () {
  sidebarMini.classList.toggle("isOpen");
});
swichBtn.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("darkMode");
});
