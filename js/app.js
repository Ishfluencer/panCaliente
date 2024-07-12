// Selecting elements
const menu = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const images = document.querySelectorAll('img');
const btnAll = document.querySelector('.all');
const btnBreakfast = document.querySelector('.breakfast');
const btnLunch = document.querySelector('.lunch');
const btnRegularLunch = document.querySelector('.regular-lunch');
const dishesContainer = document.querySelector('.dishes');
const homeBtn = document.querySelector('.home-btn');
const aboutBtn = document.querySelector('.about-btn');
const menuBtn = document.querySelector('.menu-btn');
const contactBtn = document.querySelector('.contact-btn');
const subscribeBtn = document.querySelector('.subscribe-btn');

document.addEventListener('DOMContentLoaded', () => {
  events();
  dishes();
});

const events = () => {
  menu.addEventListener('click', openMenu);

  // Start of modal box event
  const openModalBtns = document.querySelectorAll('.open-modal');
  const modal = document.getElementById('myModal');
  const modalContent = modal.querySelector('.modal-content');

  openModalBtns.forEach(button => {
    button.addEventListener('click', () => {
      const dishId = button.getAttribute('data-dish-id');
      const dishDetails = document.getElementById(`dish-${dishId}-details`).innerHTML;

      modalContent.innerHTML = `<span class="close">&times;</span>${dishDetails}`;
      modal.style.display = 'block';

      const closeBtnNew = modalContent.querySelector('.close');
      closeBtnNew.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    });
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

}
  window.onload = () => {
  
    const dishes = document.querySelectorAll('.dish');
    dishes.forEach(item => dishesContainer.appendChild(item));
};



const openMenu = () => {
  navigation.classList.remove('hide');
  closeButton();
}

const closeButton = () => {
  const overlay = document.createElement('div');
  overlay.classList.add('full-screen');
  const body = document.querySelector('body');
  if (document.querySelectorAll('.full-screen').length > 0) return;
  body.appendChild(overlay);

  const btnClose = document.createElement('span'); // Changed from 'p' to 'span' for consistency with HTML
  btnClose.textContent = '×'; // Used the multiplication sign for the close icon
  btnClose.classList.add('btn-close');
  navigation.appendChild(btnClose);

  btnClose.addEventListener('click', () => { // Added event listener to btnClose for closing functionality
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
    overlay.remove();
    btnClose.remove();
  });

  closeMenu(btnClose, overlay);
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;
      image.src = image.dataset.src;
      observer.unobserve(image);
    }
  });
});

images.forEach(image => {
  observer.observe(image);
});

const closeMenu = (button, overlay) => {
  button.addEventListener('click', () => {
    navigation.classList.add('hide');
    overlay.remove();
    button.remove();
  });

  overlay.addEventListener('click', () => {
    navigation.classList.add('hide');
    overlay.remove();
    button.remove();
  });

  // Close menu on specific button clicks
  aboutBtn.addEventListener('click', () => {
    navigation.classList.add('hide');
    overlay.remove();
    button.remove();
  });

  homeBtn.addEventListener('click', () => {
    navigation.classList.add('hide');
    overlay.remove();
    button.remove();
  });

  menuBtn.addEventListener('click', () => {
    navigation.classList.add('hide');
    overlay.remove();
    button.remove();
  });

  contactBtn.addEventListener('click', () => {
    navigation.classList.add('hide');
    overlay.remove();
    button.remove();
  });

  subscribeBtn.addEventListener('click', () => {
    navigation.classList.add('hide');
    overlay.remove();
    button.remove();
  });
}

const dishes = () => {
  let dishesArray = [];
  const dishes = document.querySelectorAll('.dish');
  dishes.forEach(dish => dishesArray.push(dish)); // Changed to push method for simplicity

  const breakfasts = dishesArray.filter(breakfast => breakfast.getAttribute('data-dish') === 'breakfast');
  const lunchs = dishesArray.filter(lunch => lunch.getAttribute('data-dish') === 'lunch');
  const regularLunchs = dishesArray.filter(regularLunch => regularLunch.getAttribute('data-dish') === 'regular-lunch');
  showDishes(breakfasts, lunchs, regularLunchs, dishesArray);
}

const showDishes = (breakfasts, lunchs, regularLunchs, all) => {
  btnBreakfast.addEventListener('click', () => {
    cleanHtml(dishesContainer);
    breakfasts.forEach(breakfast => dishesContainer.appendChild(breakfast));
  });

  btnLunch.addEventListener('click', () => {
    cleanHtml(dishesContainer);
    lunchs.forEach(lunch => dishesContainer.appendChild(lunch));
  });

  btnRegularLunch.addEventListener('click', () => {
    cleanHtml(dishesContainer);
    regularLunchs.forEach(regularLunch => dishesContainer.appendChild(regularLunch));
  });

  btnAll.addEventListener('click', () => {
    cleanHtml(dishesContainer);
    all.forEach(item => dishesContainer.appendChild(item));
  });
}



const cleanHtml = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
