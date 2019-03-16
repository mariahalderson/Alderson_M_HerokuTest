var obj = document.querySelector("object");
var svg = obj.contentDocument;
var circle = svg.querySelectorAll("g");
//console.log("hello");

//  console.log(svg);
circle.forEach(circ=>circ.classList.add("animation"));
