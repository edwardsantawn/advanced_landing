'use strict';

const abtBtn = document.querySelector('.about-button');
const articleBtn = document.querySelector('.article-button');
const propertyBtn = document.querySelector('.property-button');
const signUpBtn = document.querySelector('.sign-up-button');

document.addEventListener('DOMContentLoaded', function () {
  if (propertyBtn) {
    propertyBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const recoSection = document.querySelector('.section--recommendations');
      if (recoSection) {
        recoSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (abtBtn) {
    abtBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const heroSection = document.querySelector('.hero');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (articleBtn) {
    articleBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const articlesSection = document.querySelector('.articles');
      if (articlesSection) {
        articlesSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (signUpBtn) {
    signUpBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const signupSection = document.querySelector('.sign_up');
      if (signupSection) {
        signupSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  const carousel = document.querySelector('.recommendation--carousel .carousel-row');
  if (carousel) {
    const leftArrow = document.querySelector('.travel__image.left_arrow');
    const rightArrow = document.querySelector('.travel__image.right_arrow');
    const cards = carousel.querySelectorAll('.carousel-col');
    let visibleCards = 3;
    let currentIndex = 0;

    function getVisibleCards() {
      if (window.innerWidth <= 700) return 1;
      if (window.innerWidth <= 1000) return 2;
      return 3;
    }

    function updateCarousel() {
      visibleCards = getVisibleCards();
      const cardWidth = cards[0].offsetWidth;
      const gap = parseInt(window.getComputedStyle(carousel).gap) || 0;
      const offset = -(cardWidth + gap) * currentIndex;
      carousel.style.transform = `translateX(${offset}px)`;
      if (leftArrow) leftArrow.style.opacity = currentIndex === 0 ? '0.4' : '1';
      if (rightArrow) rightArrow.style.opacity = currentIndex >= cards.length - visibleCards ? '0.4' : '1';
    }

    if (leftArrow) {
      leftArrow.addEventListener('click', function () {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
        }
      });
    }
    if (rightArrow) {
      rightArrow.addEventListener('click', function () {
        if (currentIndex < cards.length - visibleCards) {
          currentIndex++;
          updateCarousel();
        }
      });
    }

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
  }
});

