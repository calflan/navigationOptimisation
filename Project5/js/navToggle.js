function cupcakeDrop() {
    document.getElementById("cupcakeDrop").classList.toggle("show");
}

function cakesDrop() {
    document.getElementById("cakesDrop").classList.toggle("show");
}

function freefromDrop() {
    document.getElementById("freefromDrop").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
