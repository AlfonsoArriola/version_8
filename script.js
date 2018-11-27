window.addEventListener('load', function (){
	const loader = document.querySelector(".loader");
	loader.className += ' hidden';
});



function openNav() {
    document.getElementById("mySidenav").setAttribute("style", "width:250px;box-shadow:1px 1px 1px 1px #eae3e3;");
}

function closeNav() {
    document.getElementById("mySidenav").setAttribute("style", "width:0px;box-shadow:initial;");
}


window.onscroll = function() {slimScrollGo()};

function slimScrollGo() {
    if (document.body.scrollTop > 288 || document.documentElement.scrollTop > 288 ){
        document.getElementById("header_nav").style.transition = "all .2s";
        document.getElementById("my_title").style.transition = "all .19s";
        document.getElementById("nav_menu_bars_sm").style.transition = "all .18s";
        document.getElementById("header_nav").style.height= "2.2rem";
        document.getElementById("my_title").style.fontSize = "1.1em"; 
        document.getElementById("my_title").style.textAlign = "right";
        document.getElementById("nav_menu_bars_sm").style.margin = "0px";  
    } else  {
        document.getElementById("header_nav").style.transition = "all .14s";
        document.getElementById("my_title").style.transition = "all .13s";
                document.getElementById("nav_menu_bars_sm").style.transition = "all .12s";
        document.getElementById("header_nav").style.height = ""; 
        document.getElementById("my_title").style.fontSize = "";
        document.getElementById("my_title").style.textAlign = "";
        document.getElementById("nav_menu_bars_sm").style.margin = "";  
    }
}
