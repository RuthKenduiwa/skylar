var navbar = document.getElementsByClassName("navbar");
var menu = document.getElementsByClassName("menu");
var clickCount = 0

menu.addEventListener("click",function(){
    clickCount++;
    if (clickCount === 1) {
      navbar.style.display = "block";
      console.log(clickCount)
    } else if (clickCount === 2) {
      navbar.style.display = "none";
      clickCount = 0; // Reset clickCount for future clicks
    }
})