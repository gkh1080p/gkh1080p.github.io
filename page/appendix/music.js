setTimeout(() => {
    console.log(1111)
},2000);

// 废弃方案
// window.addEventListener("DOMContentLoaded", function(event) {

//     document.querySelector('audio').play()
    
//     });


// 废弃方案
// window.addEventListener('scroll',()=>{
//     document.querySelector('audio').play()
// })

window.addEventListener('click', function() {

document.querySelector('.music').play()

})