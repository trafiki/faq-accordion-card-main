let faqItem = document.querySelectorAll('li.faq-item');
for(let i=0; i<faqItem.length; i++){
  faqItem[i].addEventListener('click', ()=> {
    faqItem[i].classList.toggle('active');
  })
}
