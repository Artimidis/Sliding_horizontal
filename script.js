// $(document).ready(function(){
// 	$(".form-control tool mb-3")click(function(){
//     $('[data-toggle="tooltip"]').tooltip('show');   
// });
// });

//Count the characters in the input Name
var counter = document.getElementById('count1');

function count(obj) {
	counter.innerHTML = obj.value.length;
	console.log(obj.value.length);

	if (obj.value.length < 11) {

		counter.style.color = 'red';
	} else {
		counter.style.color = 'green';
	}
}


//Page slip
//Page slip to the rigth
function fluidPage() {
	var windowPG = document.getElementById('windowPG');
	windowPG.classList.add('changePage');	
}

//Page slip to the left
function fluidPageLeft() {
	var windowPG = document.getElementById('windowPG');
	windowPG.classList.add('changePageLeft');
}


//Make a modal to welcome the visitor (inspiration from W3school)
//Get the modal
var modal = document.getElementById('myModal');

//Button that opens the modal
var button = document.getElementById('Mysubmit');

//Click in the button and modal opens
button.onclick = function() {
	modal.style.display = "block";
}

//User clicks others place the modal close
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}