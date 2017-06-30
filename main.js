var modal = document.getElementById("modal-box");
var modal_button = document.getElementById("btn");

var close = document.getElementsByClassName("close")[0];

modal_button.onclick = function(){
    modal.style.display = "block";
};
close.onclick = function(){
    modal.style.display = "none";
};
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
};