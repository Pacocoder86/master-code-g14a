document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".dropdown-trigger");
  var options = {
    hover: true,
    inDuration: 3000,
  };
  var instances = M.Dropdown.init(elems, options);
});
