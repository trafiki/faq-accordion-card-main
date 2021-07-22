let faqList = document.querySelector('.faq-list');
let cube = document.querySelector('img.cube');

faqList.addEventListener('mouseover', () => {
  cube.style.left = "-130px";
})

faqList.addEventListener('mouseout', () => {
  cube.style.left = "-92px";
})

faqList.addEventListener('click', (e) => {
  let parent = e.target.parentNode;
  let activeItem = document.querySelector('.active');

  if (!activeItem) {
    parent.classList.add('active');
  } else if (parent.classList.contains('active')) {
    parent.classList.remove('active');
  } else {
    activeItem.classList.remove('active');
    parent.classList.add('active');
  }
});