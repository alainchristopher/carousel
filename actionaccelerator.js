let yDirect = "rotateX"

window.addEventListener('devicemotion', function(event) {
    const x = event.acceleration.x + ' m/s2'
    
    const midX = x - window.innerWidth / 2
    const midY = y - window.innerHeight / 2

//   const intensity=4
//   const speed = ((2/1+Math.exp(-1*intensity*midY)))-1)
  const box = document.querySelector("section")
  
  box.style.transform = "rotateX(" + midY + "deg)"
  	const numFaces = 8
  const faceIndex = (Math.round(midY * numFaces / 360) + numFaces) % numFaces
  
  box.querySelectorAll("a.face").forEach((face, index) => {
    if (index === faceIndex) {
      face.style.backgroundColor = "#eee"
      face.style.zIndex = 1
    } else {
      face.style.backgroundColor = "black"
      face.style.zIndex = 0
    }
  });

  //let yDirect = "rotateX"

// document.addEventListener("touchmove", function (event) {
//   const x = event.pageX
//   const y = event.pageY
  
//   const midX = x - window.innerWidth / 2
//   const midY = y - window.innerHeight / 2

// //   const intensity=4
// //   const speed = ((2/1+Math.exp(-1*intensity*midY)))-1)
//   const box = document.querySelector("section")
  
//   box.style.transform = "rotateX(" + midY + "deg)"
//   	const numFaces = 8
//   const faceIndex = (Math.round(midY * numFaces / 360) + numFaces) % numFaces
  
//   box.querySelectorAll("a.face").forEach((face, index) => {
//     if (index === faceIndex) {
//       face.style.backgroundColor = "#eee"
//       face.style.zIndex = 1
//     } else {
//       face.style.backgroundColor = "black"
//       face.style.zIndex = 0
//     }
//   })
//   $("div.face").ready(function () {
       
//     // Or use this to Open link in same window (similar to target=_blank)
//     $("div.face").click(function(){
//         window.location = $(this).find("a:first").attr("href");
//         return false;
//     });
//   })
})

