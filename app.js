let hold=document.querySelector(".hold");
let menu=document.querySelector(".menu");
let nav=document.querySelector("#navbar");
let line1=document.getElementById("line1");
let line2=document.getElementById("line2");
let line3=document.getElementById("line3");
// let scrollvalue=document.getElementById("scrollvalue");


// scrollvalue.addEventListener("click", down);

// function down() {
//     window.scrollBy(0,686);
// }
hold.addEventListener("click", openmenu);

let i=0;

function openmenu() {
    if(i%2==0)
    {
        line1.style.transform="rotate(40deg)";
        line2.style.transform="rotate(-40deg)";
        line3.style.opacity="0";
        menu.style.width="200px";
        menu.style.right="0";
        // menu.style.display="block";
        menu.style.opacity="1";
        nav.style.marginRight="200px";
        i++;
    }
    else
    {
        line1.style.transform="rotate(0deg)";
        line2.style.transform="rotate(0deg)";
        line3.style.opacity="1";
        menu.style.width="0px";
        menu.style.right="-80px";
        // menu.style.display="block";
        menu.style.opacity="0";
        nav.style.marginRight="0px";
        i++;
    }
    
}



(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) 
      {
        if(i==0)
        {
            var element = elements[i];
        
            var positionFromTop = elements[i].getBoundingClientRect().top;
      
            if (positionFromTop - windowHeight <= 0) {
              element.classList.add('score-java');
              element.classList.remove('hidden');
            }
        }
        else if(i==1)
        {
            var element = elements[i];
        
            var positionFromTop = elements[i].getBoundingClientRect().top;
      
            if (positionFromTop - windowHeight <= 0) {
              element.classList.add('score-c');
              element.classList.remove('hidden');
            }
        }
        else if(i==2)
        {
            var element = elements[i];
        
            var positionFromTop = elements[i].getBoundingClientRect().top;
      
            if (positionFromTop - windowHeight <= 0) {
              element.classList.add('score-cplus');
              element.classList.remove('hidden');
            }
        }
        else if(i==3)
        {
            var element = elements[i];
        
            var positionFromTop = elements[i].getBoundingClientRect().top;
      
            if (positionFromTop - windowHeight <= 0) {
              element.classList.add('score-python');
              element.classList.remove('hidden');
            }
        }
        else if(i==4)
        {
            var element = elements[i];
        
            var positionFromTop = elements[i].getBoundingClientRect().top;
      
            if (positionFromTop - windowHeight <= 0) {
              element.classList.add('score-primary');
              element.classList.remove('hidden');
            }
        }
        else if(i==5)
        {
            var element = elements[i];
        
            var positionFromTop = elements[i].getBoundingClientRect().top;
      
            if (positionFromTop - windowHeight <= 0) {
              element.classList.add('score-js');
              element.classList.remove('hidden');
            }
        }
        else if(i==6)
        {
            var element = elements[i];
        
            var positionFromTop = elements[i].getBoundingClientRect().top;
      
            if (positionFromTop - windowHeight <= 0) {
              element.classList.add('scorecss');
              element.classList.remove('hidden');
            }
        }
        else if(i==7)
        {
            var element = elements[i];
        
            var positionFromTop = elements[i].getBoundingClientRect().top;
      
            if (positionFromTop - windowHeight <= 0) {
              element.classList.add('score-html');
              element.classList.remove('hidden');
            }
           
        }
       
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();

