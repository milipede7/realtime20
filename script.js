// let div =
//     document.querySelector(".mousie");
//
// div.addEventListener(
//     "mousemove", function (e) {
//         x = e.offsetX;
//         y = e.offsetY;
//         div.style.backgroundColor
//             = `rgb(${x}, ${y}, ${x - y})`;
//     });

document.getElementById("hov").addEventListener("mouseover", function() {
  document.getElementById("body").style.backgroundImage = '1.jpeg';
}, false);
document.getElementById("hov").addEventListener("mouseout", function() {
   document.getElementById("body").style.backgroundImage = "";
}, false);

// function upDate(previewPic){
//    var src = previewPic.getAttribute( "src" );
//    var alt = previewPic.getAttribute( "alt" );
//    document.getElementById('image').style.backgroundImage = "url('" + src + "')";
//    document.getElementById('image').innerHTML = alt;
// }
//
//   function unDo(X){
//    X = document.getElementById('image');
//    X.style.backgroundImage = "url('')";
//     document.getElementById('image').innerHTML = "Hover over an image below to display here";
//
// }
