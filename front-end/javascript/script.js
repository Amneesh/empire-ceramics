var headerMenu = document.getElementById('header-menu-mobile');

function openMenu() {
  headerMenu.setAttribute('class', 'bloom-mobile-header nav-visible');
}
function closeMenu() {
  headerMenu.removeAttribute('class', ' bloom-mobile-header nav-visible');
  headerMenu.setAttribute('class', ' bloom-mobile-header');
}

openNavButton.addEventListener("click", function (event) {
  openMenu();
})

closeNavButton.addEventListener("click", function (event) {
  closeMenu();
})
const listItems = document.querySelectorAll('.item');

// Add an event listener to each list item
listItems.forEach((item) => {
  item.addEventListener('click', () => {
    closeMenu();
});
});
var slideIndex = 1;                           // initializing a variable with count q
customerReview(slideIndex);                  // calling the function to display the current slide          

function plusReviews(n) {
  customerReview(slideIndex += n);
}
function currentReviews(n) {
  customerReview(slideIndex = n);
}

function customerReview(n) {                                           // Carousel part for the slideshow
  var slides = document.getElementsByClassName("carSlides");            // accessing the  images in HTML file using class name
  var dots = document.getElementsByClassName("dot1");                   // accessing the dots using class name.
  if (n > slides.length) { slideIndex = 1; }                      // checking the number of images in array and setting the variable value
  if (n < 1) { slideIndex = slides.length; }                  // if it is less than 1 image than slideindex will be set according to length
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";                             // displaying images using slides
  }

  for (i = 0; i < dots.length; i++) {                                // iterating through dots
    dots[i].className = dots[i].className.replace(" active", "");         // replacing the class to active so that i can change the properties of css
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


const the_animation = document.querySelectorAll('.animation')

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-animation');
      cnt();
      cnt1();
    }
    else {
      entry.target.classList.remove('scroll-animation');
    }

  })
},
  {
    threshold: 0.5
  });

for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];

  observer.observe(elements);
}

function onloadfunction() {
  document.getElementById('section1').classList.add('section-tabs-active');
  document.getElementById('collab').style.display = 'none';

}
onloadfunction();

section1.addEventListener('click', () => {

  document.getElementById('corporate').style.display = 'grid';
  document.getElementById('collab').style.display = 'none';
  document.getElementById('section2').classList.remove('section-tabs-active');

  document.getElementById('section1').classList.add('section-tabs-active');

  document.getElementById('collab').classList.remove('animate');
  document.getElementById('corporate').classList.add('animate');


})

section2.addEventListener('click', () => {

  document.getElementById('section1').classList.remove('section-tabs-active');
  document.getElementById('section2').classList.add('section-tabs-active');

  document.getElementById('corporate').style.display = 'none';
  document.getElementById('collab').style.display = 'grid';

  for (let i = 0; i < the_animation.length; i++) {
    const elements = the_animation[i];
     loadCommercialClients(elements);
  }  
  document.getElementById('collab').classList.add('animate');
  document.getElementById('corporate').classList.remove('animate');
  
})

function loadCommercialClients(element){
    element.style.animationDelay = element.dataset.animationDelay;
    element.style.animationDuration = element.dataset.animationDuration;

    element.classList.add(element.dataset.animation);

    element.dataset.animated = "true";
}
// const counters = document.querySelectorAll('.counter');
// const speed = 1; // The lower the slower

// function cnt(){
// counters.forEach(counter => {
//   const updateCount = () => {
//     const target = +counter.getAttribute('data-target');
//     const count = +counter.innerText;

//     const inc = target / speed;


//     if (count < target) {
//       counter.innerText = count + inc;
//       setTimeout(updateCount, 1);
//     } else {
//       counter.innerText = target;
//     }
//   };

//   updateCount();
// });
// }


// const counters1 = document.querySelectorAll('.counter1');
// const speed1 = 1; // The lower the slower

// function cnt1(){
// counters1.forEach(counter => {
//   const updateCount = () => {
//     const target = +counter.getAttribute('data-target');
//     const count = +counter.innerText;

//     const inc = target / speed;


//     if (count < target) {
//       counter.innerText = count + inc;
//       setTimeout(updateCount, 1);
//     } else {
//       counter.innerText = target;
//     }
//   };

//   updateCount();
// });
// }


const AnimateOnScroll = function ({ offset } = { offset: 10 }) {
    // Define a dobra superior, inferior e laterais da tela
    const windowTop = (offset * window.innerHeight) / 100;
    const windowBottom = window.innerHeight - windowTop;
    const windowLeft = 0;
    const windowRight = window.innerWidth;
  
    this.start = (element) => {
      window.requestAnimationFrame(() => {
        element.style.animationDelay = element.dataset.animationDelay;
        element.style.animationDuration = element.dataset.animationDuration;
  
        element.classList.add(element.dataset.animation);
  
        element.dataset.animated = "true";
      });
    };
  
    this.inViewport = (element) => {
      // Obtem o boundingbox do elemento
      const elementRect = element.getBoundingClientRect();
      const elementTop =
        elementRect.top + parseInt(element.dataset.animationOffset) ||
        elementRect.top;
      const elementBottom =
        elementRect.bottom - parseInt(element.dataset.animationOffset) ||
        elementRect.bottom;
      const elementLeft = elementRect.left;
      const elementRight = elementRect.right;
  
      return (
        elementTop <= windowBottom &&
        elementBottom >= windowTop &&
        elementLeft <= windowRight &&
        elementRight >= windowLeft
      );
    };
  
    this.verifyElementsInViewport = () => {
      const elements = this.getElements();
      for (let i = 0, len = elements.length; i < len; i++) {
        if (elements[i].dataset.animated) continue;
  
        this.inViewport(elements[i]) && this.start(elements[i]);
      }
    };
  
    this.getElements = () =>
      document.querySelectorAll("[data-animation]:not([data-animated])");
  
    this.update = () => {
      this.verifyElementsInViewport();
    };
  
    window.addEventListener("load", this.update, false);
    window.addEventListener(
      "scroll",
      () => this.verifyElementsInViewport(),
      { passive: true }
    );
    window.addEventListener(
      "click",
      () => this.verifyElementsInViewport(),
      { passive: true }
    );
    window.addEventListener(
      "resize",
      () => this.verifyElementsInViewport(),
      { passive: true }
    );
  };
  
  // Initialize
  const options = {
    offset: 15 // percentage of the window
  };
  
  const animation = new AnimateOnScroll(options);
  const cards = document.querySelectorAll('.crd');

cards.forEach(card => {
  card.addEventListener('click', function(event) {
    this.classList.toggle('cardflipping');

 //   cards.forEach(card => {
 //     card.classList.remove('cardflipping');
    });
//    this.classList.toggle('cardflipping');
//  });
 
});

