var obj = document.querySelector("object");
var svg = obj.contentDocument;
var circle = svg.querySelectorAll("g");
//console.log("hello");

//  console.log(svg);
circle.forEach(circ=>circ.classList.add("animation"));

//images for bomb Beans
var tiles = document.querySelectorAll(".tile");

tiles.forEach(tile=>tile.style.background = "center/cover no-repeat url('../images/"+tile.dataset.img+"')");
