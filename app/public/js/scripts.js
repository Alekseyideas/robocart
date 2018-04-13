document.querySelector('body').addEventListener('click',(e)=>{
  if(e.target.className === 'view-more'){
    e.preventDefault();
    const parent = e.target.parentNode;
    const dotes = parent.querySelector('.search__item-dotes');
    const link = parent.querySelector('.view-more');
    const hiddenInfo = parent.querySelector('.search__item-hiddenInfo');

    dotes.remove();
    link.remove();
    hiddenInfo.style.display = 'initial';
  }
});