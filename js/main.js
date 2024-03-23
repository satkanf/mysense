$(document).ready(function() {

  $('.comments-block__slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      variableWidth:true,
      responsive: [
        {
           breakpoint: 480,
           settings: "unslick"
        }
     ]
      
     
    });

    $('.diplom-slider__list').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      speed:300,
    });

    $('.test-result__list').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      
      variableWidth:true
    });

    

    $(document).mouseup(function (e) {
      var container = $(".filter__select__list ");
      if (container.has(e.target).length === 0){
          container.hide();
      }
  });

  $('.comments-block__item,.diplom-slider__item,.test-result__item,.problem-solving__item').removeAttr('style');

});

if (window.matchMedia("(max-width: 480px)").matches) {
  /* the viewport is at least 400 pixels wide */
  $('.problem-solving__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    speed:30,
    dots: true,
    arrows:false,
    variableWidth:true
  });


      


} else {
  /* the viewport is less than 400 pixels wide */
}

if (window.matchMedia("(min-width: 360px) and (max-width: 479px").matches) {
  /* the viewport is at least 400 pixels wide */
const textBtn = document.querySelector('.problem-solving__link');
textBtn.innerHTML = 'Підібрати психолога ';

      


} else {
  /* the viewport is less than 400 pixels wide */
}



const commentsMore = document.querySelector('.comments-block__more');
const commetsItem = document.querySelectorAll('.comments-block__item');
const commentsList = document.querySelector('.comments-block__slider');


document.addEventListener('DOMContentLoaded', function () {
  commentsMore.addEventListener('click', () => {
    commetsItem.forEach(function(item){
      item.style.display ='flex';
      commentsMore.innerHTML = "Сховати";
  
      commentsMore.addEventListener('click',() => {
        item.style.display = 'none';
        commentsList.firstChild.style.display = 'flex';
        commentsMore.innerHTML = "Показати ще";
      });
  
    });
  });
});




  





const showTab = (elTabBtn) => {
  const elTab = elTabBtn.closest('.psiholog__item');
  if (elTabBtn.classList.contains('tab-active')) {
    return;
  }
  const targetId = elTabBtn.dataset.targetId;
  const elTabPane = elTab.querySelector(`.psiholog__item__text[data-id="${targetId}"]`);
  if (elTabPane) {
    const elTabBtnActive = elTab.querySelector('.tab-active');
    elTabBtnActive.classList.remove('tab-active');
    const elTabPaneShow = elTab.querySelector('.tab-show');
    elTabPaneShow.classList.remove('tab-show');
    elTabBtn.classList.add('tab-active');
    elTabPane.classList.add('tab-show');
  }
}

document.addEventListener('click', (e) => {
  if (e.target && !e.target.closest('.tabs-item')) {
    return;
  }
  const elTabBtn = e.target.closest('.tabs-item');
  showTab(elTabBtn);
});


document.querySelectorAll('.test__body__title').forEach((item) => 
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    if(parent.classList.contains('test__active')){
        parent.classList.remove('test__active')
    }else{
      document
              .querySelectorAll('.test__bady__item')
              .forEach((child) => child.classList.remove('test__active'))

      parent.classList.toggle('test__active');
    }
  })
)

document.querySelectorAll('.vebinar__question__title').forEach((item) => 
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    if(parent.classList.contains('vebinar__question__active')){
        parent.classList.remove('vebinar__question__active')
    }else{
      document
              .querySelectorAll('.vebinar__question__item')
              .forEach((child) => child.classList.remove('vebinar__question__active'))

      parent.classList.toggle('vebinar__question__active');
    }
  })
)







const selectCurrent = document.querySelectorAll(".type-therapy");



selectCurrent.forEach(function(select){

  const selectHeader = select.querySelector(".filter__select");
  const selectItem = select.querySelector(".filter__select__item");
  const selectList = select.querySelector(".filter__select__list");
  const selectCh = select.querySelector(".select__current");
  
  selectHeader.addEventListener('click', function(){
    selectList.style.display = "block";

  });

  selectList.addEventListener("blur", function() {
      selectList.style.display = "none";
  });

  selectList.querySelectorAll("div").forEach(function(item) {
      item.addEventListener("click", function() {
        selectCh.textContent = item.textContent;
        selectList.style.display = "none";
      });
  });

});



const langCurrent = document.querySelectorAll(".lang-switcher");



langCurrent.forEach(function(select){

const langHeader = select.querySelector(".lang-header");
const langtItem = select.querySelector(".lang-switcher__item");
const langList = select.querySelector(".lang-switcher__list");
const langtCh = select.querySelector(".lang-header");

langHeader.addEventListener('click', function(){
  langList.style.display = "block";

})

langList.addEventListener("blur", function() {
    langList.style.display = "none";
});

langList.querySelectorAll("li").forEach(function(item) {
    item.addEventListener("click", function() {
      langtCh.textContent = item.textContent;
      langList.style.display = "none";
    });
});

});

const mobileMenu = document.querySelector('.mobile-menu'); // Само окно
const mobileActive = document.querySelector('.mobile-menu__active');
const burgerMenu = document.querySelector('.burger-menu'); // Кнопки для показа окна
const closeMobile = document.querySelector('.mobile-menu__close'); // Кнопка для скрытия окна

  
burgerMenu.addEventListener('click', function(){ // Для каждой вешаем обработчик событий на клик
    // mobileActive.style.display = "flex";
     // И для самого окна
     mobileMenu.classList.add('mobile-menu__active');
});


closeMobile.addEventListener('click',() => { // Вешаем обработчик на крестик
  // mobileMenu.style.display = "none";
  mobileMenu.classList.remove('mobile-menu__active');
});

const popupWrapp = document.querySelector('.blur-bg');
const logIn = document.querySelector('.authentication'); 
const singIn = document.querySelector('.registration'); 
const registerCode = document.querySelector('.registration-code');
const registerCBtn = document.querySelector('.registration__btn');
const registerCodeBtn = document.querySelector('.registration-code__submit');
const registerDone = document.querySelector('.registration-done');
const  openPopupButtons = document.querySelector('.btn-auth');
const  closePopupButton = document.querySelectorAll('.popup-close'); 
const singInLink = document.querySelector('.sing-in-link');



openPopupButtons.addEventListener('click', (e) => { 
      e.preventDefault();
      logIn.classList.add('popup-active'); 
      popupWrapp.classList.add('popup-active');  
});

singInLink.addEventListener('click',(e) => {
  e.preventDefault();
  singIn.classList.add('popup-active');
  logIn.classList.remove('popup-active');
}) ;

registerCBtn.addEventListener('click',(e) => {
  e.preventDefault();
  registerCode.classList.add('popup-active');
  singIn.classList.remove('popup-active');
}) ;

registerCodeBtn.addEventListener('click',(e) => {
  e.preventDefault();
  registerDone.classList.add('popup-active');
  registerCode.classList.remove('popup-active');
}) ;



closePopupButton.forEach( function(item){
  item.addEventListener('click', () => {
    logIn.classList.remove('popup-active');
    singIn.classList.remove('popup-active');
    popupWrapp.classList.remove('popup-active');
  })
});

// closePopupButton.addEventListener('click',(e) => {
//   e.preventDefault();
//   logIn.classList.remove('popup-active');
//   singIn.classList.remove('popup-active');
// });













const filterBox = document.querySelector('.filter__box'); // Само окно
const filterActive = document.querySelector('.filter__active');
const filterBtn = document.querySelector('.filter__open'); // Кнопки для показа окна
const closeFilter = document.querySelector('.filter__close'); // Кнопка для скрытия окна
const filterApply = document.querySelector(".filter__apply");

  
filterBtn.addEventListener('click', function(){ // Для каждой вешаем обработчик событий на клик
    // mobileActive.style.display = "flex";
     // И для самого окна
     filterBox.classList.add('filter__active');
});


closeFilter.addEventListener('click',() => { // Вешаем обработчик на крестик
  // mobileMenu.style.display = "none";
    filterBox.classList.remove('filter__active');
    

});
filterApply.addEventListener('click',() => { // Вешаем обработчик на крестик
  // mobileMenu.style.display = "none";
    filterBox.classList.remove('filter__active');
    

});





this._el.addEventListener('click', (e) => {
  // получим элемент .accordion__header
  const elHeader = e.target.closest('.question__item__text');
  // если такой элемент не найден, то прекращаем выполнение функции
  if (!elHeader) {
    return;
  }
  // если необходимо, чтобы всегда был открыт один элемент
  if (!this._config.alwaysOpen) {
    // получим элемент с классом accordion__item_show и сохраним его в переменную elOpenItem
    const elOpenItem = this._el.querySelector('.accordion__item_show');
    // если такой элемент есть
    if (elOpenItem) {
      // и он не равен текущему, то переключим ему класс accordion__item_show
      elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
    }
  }
  // переключим класс accordion__item_show элемента .accordion__header
  elHeader.parentElement.classList.toggle('accordion__item_show');
});

