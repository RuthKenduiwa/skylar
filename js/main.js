var navbar = document.getElementById("menu");
var close = document.getElementById("close");

navbar .addEventListener("click",function(){
    document.getElementsByClass("navbar").style.display = "block";
    document.getElementsByClass("menu").style.display = "none";
    document.getElementsByClass("close").style.display = "block";
})

close.addEventListener("click",function(){
    document.getElementsByClass("navbar").style.display = "block";
    document.getElementsByClass("menu").style.display = "none";
    document.getElementsByClass("close").style.display = "block";

})