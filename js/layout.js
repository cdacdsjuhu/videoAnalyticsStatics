// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images
function one() {
	
	var elems = document.querySelectorAll(".aa");

	[].forEach.call(elems, function(el) {
    el.classList.remove('col-md-6');
    el.classList.remove('col-md-3');
    el.classList.add('col-md-12');
});
	
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {

	var elems = document.querySelectorAll(".aa");

	[].forEach.call(elems, function(el) {
    el.classList.remove('col-md-12');
    el.classList.remove('col-md-3');
    el.classList.add('col-md-6');
    });
	
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {

	var elems = document.querySelectorAll(".aa");

	[].forEach.call(elems, function(el) {
    el.classList.remove('col-md-12');
    el.classList.remove('col-md-6');
    el.classList.add('col-md-3');
	});
	
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}

// Add active class to the current button (highlight it)
// var header = document.getElementById("myHeader");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }