function setup(){
  createCanvas(windowWidth,windowHeight);
  background(128,128,128);
  // Create h1 and h2 elements
  let h1 = document.createElement(`h1`);
  let h2 = document.createElement(`h2`);

  // Create text nodes for the animal and my name.
  let animal = document.createTextNode(`SouthTigerChina`);
  let name = document.createTextNode(`SyedRoshaanAliSardar`);

  //Add the h1 and h2 elements to the body.
  h1.appendChild(animal);
  h2.appendChild(name);
  document.body.appendChild(h1);
  document.body.appendChild(h2);

}
function paws(){
 line(213,282,245,279);
point(261,271,281,291);
}
function ear(){
 line(284,243,329,301);
}
function draw(){
 line(407,162,424,122);
 point(385,139,234,222);
 line(152,72,113,146);
 ear();
paws();}
