import { welcome, main, navbar, hero, beinspyredText, logos, contactBtn, contactWrapper, date, items, imagesEnvelop, galleryWrapper } from './moduleFiles/declarations.js';

const scrollImages = document.querySelectorAll('.otherImg article div img');

let move = 1;

const moveImages = () => {
  scrollImages.forEach((img) => {
    img.style.cssText = `translate: -${move++}px`;
    if (move === 10000) {
      move = 1;
    }
  })
}

// let movingForward =
setInterval(moveImages, 1000)

// setting year
date.innerText = new Date().getFullYear();

// reload page

logos.forEach(logo => {
  logo.onclick = () => {
    window.location.reload();
  };
});

// load page

window.onload = () => {
  welcome.style.display = 'none';
  main.style.display = 'block';
}

// open / close about page

const aboutModal = document.querySelector('.aboutModalOverlay');
const close = document.querySelector('.close-btn');
const open = document.querySelector('.about-btn');


const openModal = () => {
  aboutModal.classList.add('open-modal');
  close.onclick = () => {
    aboutModal.classList.remove('open-modal')
  };
}
open.onclick = openModal;

// open/close contact page

contactBtn.forEach(btn => {
  btn.onclick = () => {
    contactWrapper.classList.add('show');
  }
});

contactWrapper.onclick = () => {
  contactWrapper.classList.remove('show');
}

// fixed nav

window.onscroll = () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  const heroHeight = hero.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
  if (scrollHeight > heroHeight) {
    navbar.classList.add('navColorChange');
    const logos = document.querySelectorAll('.nav-logo');
    logos.forEach(logo => {
      logo.onclick = () => {
        window.location.reload();
      };
    });
  } else {
    navbar.classList.remove('navColorChange');
    const logos = document.querySelectorAll('.nav-logo');
    logos.forEach(logo => {
      logo.onclick = () => {
        window.location.reload();
      };
    });
  }
};

// text effect

const strText = beinspyredText.textContent;
const splitText = strText.split('');
beinspyredText.innerHTML = '';
splitText.forEach(txt => {
  beinspyredText.innerHTML += `<span>${txt}</span>`;
})

let char = 0;

const ontick = () => {
  let span = beinspyredText.querySelectorAll('span')[char];
  span.classList.add('show')
  char++
  if (char === splitText.length) {
    complete();
    return;
  }
}

const complete = () => {
  clearInterval(timer);
}

let timer = setInterval(ontick, 200)

// numbers

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  // const increment = 1;
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue}+`;
  }, 1);
};

items.forEach((item) => {
  updateCount(item);
});

// photo modal

imagesEnvelop.onclick = (e) => {
  let target = e.target;
  if (target.classList.contains('galleryImage')) {
    galleryWrapper.classList.add('show');
    galleryWrapper.innerHTML = `<div class="galleryModal"><img src=${target.src}><h3>description</h3><div class="underline"></div><p>${target.alt}</p></div>`;
  } else {
    return;
  }
}

galleryWrapper.onclick = (e) => {
  e.currentTarget.classList.remove('show');
}
