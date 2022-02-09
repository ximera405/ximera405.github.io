// Open menu in mobile viewport
let menuBtn = document.getElementById('menu-btn');
let crossBtn = document.getElementById('close-menu');
let navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  navMenu.classList.toggle('invisible');
});

crossBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  navMenu.classList.toggle('invisible');
});

let careerBtn = document.getElementById('career-btn');

careerBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  window.location.href = 'career.html';
})

// ____________________________________
// Open popup with animations for different viewports

let popup = document.getElementById('popup');
let openPopup = document.getElementById('open-popup');
let openTabletPopup = document.getElementById('tablet-open-popup');
let closePopup = document.getElementById('close-popup');

let popupContent = document.getElementById('popup-content');
let stackWithUsBtn = document.getElementById('stack-with-us-btn');

const openTabletPopupFn = (el) => {
  el.addEventListener('click', (evt) => {
    evt.preventDefault();
    popup.classList.toggle('popup__close');
    popupContent.classList.toggle('popup__content-container--close');

    popupContent.classList.add('popup-tablet-open-position-animation');
    popup.classList.add('popup-open-background-animation');
    setTimeout(() => {
      popupContent.classList.remove('popup-tablet-open-position-animation');
      popup.classList.remove('popup-open-background-animation');
    }, 1000);
  });
};

const closeTabletPopupFn = (el) => {
  el.addEventListener('click', (evt) => {
    evt.preventDefault();
    popup.classList.toggle('popup__close');
    popupContent.classList.toggle('popup__content-container--close');

    popup.classList.add('popup-close-background-animation');
    setTimeout(() => {
      popup.classList.remove('popup-close-background-animation');
    }, 1000);
  });
};

if (window.outerWidth >= 768) {
  openTabletPopupFn(openTabletPopup);
  openTabletPopupFn(stackWithUsBtn)

  closeTabletPopupFn(closePopup);
} else {
  openPopup.addEventListener('click', (evt) => {
    evt.preventDefault();
    popup.classList.toggle('popup__close');
    popupContent.classList.toggle('popup__content-container--close');

    popup.classList.add('popup-open-position-animation');
    setTimeout(
      () => popupContent.classList.remove('popup-open-position-animation'),
      1000
    );
  });

  closePopup.addEventListener('click', (evt) => {
    evt.preventDefault();
    popup.classList.toggle('popup__close');
    popupContent.classList.toggle('popup__content-container--close');
    navMenu.classList.toggle('invisible');

    popup.classList.add('popup-close-position-animation');
    setTimeout(
      () => popupContent.classList.remove('popup-close-position-animation'),
      1000
    );
  });
}

// ____________________________________
// Horizontal scroll on desktop mechanik

if (window.innerWidth >= 1280) {
  const scrollContainer = document.querySelector('body');

  scrollContainer.addEventListener('wheel', (e) => {

    if (e.deltaY < 0) {
      let idx = 1;
      const fpsFunction = () => {
        if (idx < 45) {
          setTimeout(() => {
            idx++;
            window.scrollTo(window.scrollX - 1, 1);
            return fpsFunction();
          }, 4);
        }
      };
      fpsFunction();
    } else {
      let idx = 1;
      const fpsFunction = () => {
        if (idx < 45) {
          setTimeout(() => {
            idx++;
            window.scrollTo(window.scrollX + 1.5, 1);
            return fpsFunction();
          }, 4);
        }
      };
      fpsFunction();
    }
  });
}
