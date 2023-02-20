var velocity = 0.5;

function update(element){ 
  var pos = window.pageYOffset; 
  // var containers = document.querySelectorAll('.container');
  // for (let index = 0; index < containers.length; index++) {
    // const element = containers[index];
    var elementHeight =  element.offsetHeight;
    //  element.style.backgroundPositionY = Math.round(((elementHeight -  pos)) * velocity) + 'px';
    console.log(
      Math.round(element.style.backgroundPosition)) 
    // element.style.backgroundPositionY =  + 'px';
    
  // }
 

}

// window.addEventListener('scroll', update);

// // // document.querySelectorAll(".page")

let pages = document.querySelectorAll(".page")
function isInView(el) {  
    const box = el.getBoundingClientRect();
    return box.top < window.innerHeight && box.bottom >= 0;
  }

window.addEventListener('scroll', (e) => {
    for (let i = 0; i < pages.length; i++) {
      const element = pages[i];
      if(isInView(element)){
        update(element)
      } 
      // console.log(element)
    }
  
    })