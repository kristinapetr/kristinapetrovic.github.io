
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "CLEAR TASK";
  span.appendChild(txt);
  li.appendChild(span);

  /*for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }*/
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "CLEAR TASK";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("CLEAR TASK");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    return confirm("Are you sure you want to delete?");
    var div = this.parentElement;
    div.style.display = "none";
  }

}

// Add a "checked" symbol when clicking on a list item
/*var list = document.querySelector("ul");
list.addEventListener("click", function(ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
}, false);*/



// Filter list

function myFilter() {
  var newArray = array.filter(function(item) {
  return condition;
});
    var input, filter, ol, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toLowerCase();
    ol = document.getElementById("myUL");
    li = ol.getElementsByTagName("LI");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Remove "checked" tasks
/*clearAllCompleted.addEventListener("click", function () {
var tasks = document.querySelectorAll("UL");
 for (i = 0; i < tasks.length; i++) {
  if (tasks[i].hasAttribute("checked")) {
  tasks[i].parentNode.removeChild(tasks[i]);
  }
 }
});*/