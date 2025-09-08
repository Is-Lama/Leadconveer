document.addEventListener('DOMContentLoaded', () => {
  const sliderList = document.querySelector('.slider__list');
  const sliderItems = document.querySelectorAll('.slider__item');
  const paginationButtons = document.querySelectorAll('.pagination__button');

  const setActivePagination = (index) => {
    paginationButtons.forEach((btn, i) => {
      btn.classList.toggle('is-current', i === index);
    });
  };

  paginationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const itemWidth = sliderItems[index].offsetWidth;
      sliderList.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth',
      });
    });
  });

  sliderList.addEventListener('scroll', () => {
    const scrollLeft = sliderList.scrollLeft;
    const itemWidth = sliderItems[0].offsetWidth;

    const index = Math.round(scrollLeft / itemWidth);
    setActivePagination(index);
  });

  const moreText = document.getElementById('lead-generation-more');
  const moreLink = document.getElementById('lead-generation-link');
  moreLink.addEventListener('click', () => {

    moreText.classList.toggle('hidden');
    if (!moreText.classList.contains('hidden')) {
      moreLink.textContent = 'Скрыть';
    } else {
      moreLink.textContent = 'Читать больше';
    }
  });

  const mobileOverlay = document.getElementById('mobileOverlay');
    const menuLinks = document.querySelectorAll('.mobile-overlay__link');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {           
            if (mobileOverlay.open) {
                mobileOverlay.close();
            }
        });
    });  
});