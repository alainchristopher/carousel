let yDir = "rotateX"

document.addEventListener("mousemove", function (event) {
  const x = event.pageX
  const y = event.pageY
  
  const midX = x - window.innerWidth / 2
  const midY = y - window.innerHeight / 2
   const intensity = 3 
   const speed = ((2/1+Math.exp(-1*intensity*midY)))-1
  const box = document.querySelector("section")
  
  box.style.transform = "rotateX("+ midY + "deg)"
  	const numFaces = 8
  const faceIndex = (Math.round(midY * speed * numFaces / 360) + numFaces) % numFaces
  
  box.querySelectorAll("a.face").forEach((face, index) => {
    if (index === faceIndex) {
      face.style.backgroundColor = "#eee"
      face.style.zIndex = 1
    } else {
      face.style.backgroundColor = "black"
      face.style.zIndex = 0
    }
  })
//   end of carousel rotation
//  start click on div.face 
//   function click(x,y){
//     const centerX = offset.left + width / 2;
// 		const centerY = offset.top + height / 2;
//     var ev = document.createEvent("MouseEvent");
//     var el = document.elementFromPoint(x,y);
//     ev.initMouseEvent(
//         "click",
//         true /* bubble */, true /* cancelable */,
//         window, null,
//         x, y, centerX, centerY, /* coordinates */
//         false, false, false, false, /* modifier keys */
//         0 /*left*/, null
//     );
//     el.dispatchEvent(ev);
// }
//   end of click on div.face
})


