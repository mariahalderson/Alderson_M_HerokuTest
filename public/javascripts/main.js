
//images for bomb Beans tiles
var tiles = document.querySelectorAll(".tile");
//background on dynamic page
var beanbckgd = document.querySelector("#beanHero");

if(tiles){
  tiles.forEach(tile=>tile.style.background = "center/cover no-repeat url('../images/"+tile.dataset.img+"')");
}

if(beanbckgd){
  beanbckgd.style.background = "center/cover no-repeat url('../images/"+beanbckgd.dataset.img+"')";
}
