// JavaScript Document
function changesize(){
	var x = document.getElementById("navigation");
	if(x.className==="nav-class"){
		x.className += " responsive";
	}else{
		x.className = "nav-class";
	}
}

var cur_page = 1;

function plusPage(page){
	showSlides(cur_page+=page);
}

function changePage(page){
	showSlides(cur_page=page);
}

function showSlides(page){
	var i;
	var slide = document.getElementsByClassName("image");
	var bottons = document.getElementsByClassName("button");
	if(page>slide.length){ 
		cur_page = 1;
	}
	if(page<1){
		cur_page = slide.length;
	}
	for(i=0; i<slide.length; i++){
		slide[i].style.display = "none";
	}
	for(i=0; i<bottons.length; i++){
		bottons[i].className = bottons[i].className.replace(" used", "");
	}
	slide[cur_page-1].style.display = "block";
	bottons[cur_page-1].className += " used";
}

//function for topping up pages
function scrollPage(){
	if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
		document.getElementById("back").style.display = "block";
	}else{
		document.getElementById("back").style.display = "none";
	} 
}

function backToTop(){
	scrollTo(document.body, 0, 100);
	scrollTo(document.documentElement, 0, 100);
}
function scrollTo(element, to, duration) {
	if (duration < 0) return;
	var difference = to - element.scrollTop;
	var perTick = difference / duration * 2;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        scrollTo(element, to, duration - 2);
    }, 10);
}