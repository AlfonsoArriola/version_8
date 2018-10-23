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


// window.onscroll = function() {slimScrollGo()};

// function slimScrollGo() {
//     if (document.body.scrollTop > 288 || document.documentElement.scrollTop > 288 ){
//         // document.getElementById("main_header").style.display = "none";
//         document.getElementById("header_nav").style.width= "8%";
//         document.getElementById("my_title").style.display = "none";  
//     } else  {
//         // document.getElementById("main_header").style.display  = "";
//         document.getElementById("header_nav").style.width = "100%"; 
//         document.getElementById("my_title").style.display = "inline-block";   
//     }
// }
