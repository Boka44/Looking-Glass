$('document').ready(function(){
	
	// $("#show1").click(function(){
 //    $(".li_1").toggle();
 //   	});
 //    $("#show2").click(function(){
 //    $(".li_2").toggle();
 //   	});
 //    $("#show3").click(function(){
 //    $(".li_3").toggle();
 //   	});
 //    $("#show4").click(function(){
 //    $(".li_4").toggle();
 //   	});
 //    $("#show5").click(function(){
 //    $(".li_5").toggle();
 //  	});
 //    $("#show6").click(function(){
 //    $(".li_6").toggle();
 //    });



// Get the modal
var modal1 = document.getElementById('modal1');
var modal2 = document.getElementById('modal2');
var modal3 = document.getElementById('modal3');
var modal4 = document.getElementById('modal4');
// Get the button that opens the modal
var btn1 = document.getElementById("show1");
var btn2 = document.getElementById("show2");
var btn3 = document.getElementById("show3");
var btn4 = document.getElementById("show4");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];



// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}
btn4.onclick = function() {
    modal4.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
span4.onclick = function() {
    modal4.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}
    

$('.btn_services').addClass('btn-block btn-primary active');




});