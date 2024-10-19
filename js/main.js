"use strict";

$(document).ready(function() {

  $('.comments-block__slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      variableWidth:true,
      responsive: [
        {
           breakpoint: 480,
          
           settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            // arrows: true,
            // autoplay: true,
            // speed:300
          }
        }
     ]
      
     
    });

    $('.diplom-slider__list').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      speed:300,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            
          }
        },
  
      ]
    });

    $('.test-result__list').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed:3000,
      autoplay:true,
      dots: false,
      
      variableWidth:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:false,
          }
        },
  
      ]
    });

    $('.viewed-list').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      speed:300,
      variableWidth:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
                      arrows: false,
                      infinite: false
                      
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
                      arrows: false,
                      infinite: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
                      arrows: false,
                      infinite: false
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: false
          }
        },
      ]
    });

    $('.direction__list').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      speed:300,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            // infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true
          }
        },
  
      ]
    });

    $(document).mouseup(function (e) {
      var container = $(".filter__select__list ");
      if (container.has(e.target).length === 0){
          container.hide();
      }
  });


  $('.comments-block__item,.diplom-slider__item,.test-result__item,.problem-solving__item,.direction__list__item,.viewed-list__item').removeAttr('style');

});

const btnCloseFilter = document.querySelector('.psiholog-query__close');
const filterQuery = document.querySelector('.psiholog-query-wrap');
const btnfilterQuery = document.querySelectorAll('.psiholog-query__btn');


if(btnfilterQuery){
  btnfilterQuery.forEach(function(item){
    item.addEventListener('click', () => {
      filterQuery.classList.add('psiholog-query__active');
    })
    btnCloseFilter.addEventListener('click', () => {
      filterQuery.classList.remove('psiholog-query__active');
    })
  })
  
}

const aboutMore = document.querySelector('.psiholog__item__more');
const psBody = document.querySelector('.psiholog__about > .psiholog__item__body');

const popupWrapp = document.querySelector('.blur-bg');
const logIn = document.querySelector('.authentication'); 
const singIn = document.querySelector('.registration'); 
const registerCode = document.querySelector('.registration-code');
const registerCBtn = document.querySelector('.registration__btn');
const registerCodeBtn = document.querySelector('.registration-code__submit');
const registerDone = document.querySelector('.registration-done');
const  openPopupButtons = document.querySelectorAll('.btn-auth');
const  closePopupButton = document.querySelectorAll('.popup-close'); 
const singInLink = document.querySelectorAll('.sing-in-link');
const commentsMore = document.querySelector('.comments-block__more');
const commetsItem = document.querySelectorAll('.comments-block__item');
const commentsList = document.querySelector('.comments-block__slider');

const checkClose = document.querySelector('.mobile-filter__cancel');

const filterMobileBtn = document.querySelector('.mobile-filter-btn');
const filterMobile = document.querySelector('.mobile-filter');
const filterMobileClose = document.querySelector('.mobile-filter__close');
const filterAppl = document.querySelector('.mobile-filter__apply');

const filterBox = document.querySelector('.filter__box'); // Само окно
const filterActive = document.querySelector('.filter__active');
const filterBtn = document.querySelector('.filter__open'); // Кнопки для показа окна
const closeFilter = document.querySelector('.filter__close'); // Кнопка для скрытия окна
const filterApply = document.querySelector(".filter__apply");
const selectCurrent = document.querySelectorAll(".type-therapy");
const langCurrent = document.querySelectorAll(".lang-switcher");
const replaceTtext = document.querySelector('.replace-text');
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobile = document.querySelector('.mobile-menu__close');
const replaceVerified = document.querySelector('.psiholog__status');
const cityFilter = document.querySelector('.checked-city');
const cityActive = document.querySelector('.mobile-filter__item');

const therapyMore = document.querySelectorAll('.therapy-more');
const therapyMore2 = document.querySelectorAll('.therapy-more-2');
const educationMore = document.querySelectorAll('.education-more');
const educationItem = document.querySelectorAll('.psiholog__education__body ul li');
const therapyItem = document.querySelectorAll('.psiholog__therapy:nth-child(2) ul li');
const therapyItem2 = document.querySelectorAll('.psiholog__therapy:nth-child(3) ul li');
const calendarEnrol = document.querySelectorAll('.calendar__date__time li');

const feedback = document.querySelector('.comments-block__response');
const feedbackBlock = document.querySelectorAll('.feedback')
const feedbackClose = document.querySelectorAll('.feedback__close')
const subscribe = document.querySelector('.subscribe')
const subscribeBtn = document.querySelector('.subscribe__not')
const requestDoneClose = document.querySelectorAll('.request-sent__close');
const requestDone = document.querySelectorAll('.request-sent')
const vebinarFree = document.querySelector('.vebinar-free');
const vebinarFreeBtn = document.querySelectorAll('.vebinar-free-btn');
const accountLink = document.querySelector('.account');
const blockVideo = document.querySelector('.block-right')




if(vebinarFreeBtn){
  vebinarFreeBtn.forEach(function(item){
    item.addEventListener('click', () =>{
      vebinarFree.classList.add('popup-active')
    })
    closePopupButton.forEach(function(el){
      el.addEventListener('click', () =>{
        vebinarFree.classList.remove('popup-active')
      })
    })
    

  })
}



if(requestDoneClose){
  requestDoneClose.forEach(function(item){
    item.addEventListener('click', () => {
      requestDone.forEach(function(el){
        el.classList.remove('popup-active')
      })
    })
  })
}
if(feedback){
  feedback.addEventListener('click', () =>{
    popupWrapp.classList.add('popup-active');
    feedbackBlock.forEach(function(item){
      item.style.display = 'block';
    })
  });
}

if(feedbackClose){
  feedbackClose.forEach(function(item){
    item.addEventListener('click', () =>{
      popupWrapp.classList.remove('popup-active');
      feedbackBlock.forEach(function(item){
        item.style.display = 'none';
    })
    })
  })
}

if(calendarEnrol){
  calendarEnrol.forEach(function(item){
    item.addEventListener('click', () =>{
      filterQuery.classList.add('psiholog-query__active');
    })
    btnCloseFilter.addEventListener('click', () => {
      filterQuery.classList.remove('psiholog-query__active');
    })
  })
}


if(therapyMore){
  therapyMore.forEach(function(item){
    item.addEventListener('click', () => {
      therapyItem.forEach(function(el){
        el.style.display = 'list-item';
        
        
      });
      item.style.display = 'none';
    });
  });
}
if(educationMore){
  educationMore.forEach(function(item){
    item.addEventListener('click', () => {
      educationItem.forEach(function(el){
        el.style.display = 'flex';
        
        
      });
      item.style.display = 'none';
    });
  });
}

if(therapyMore2){
  therapyMore2.forEach(function(item){
    item.addEventListener('click', () => {
      therapyItem2.forEach(function(el){
        el.style.display = 'list-item';
        
        
      });
      item.style.display = 'none';
    });
  });
}


if(burgerMenu){
  burgerMenu.addEventListener('click', function(){ 
    
    mobileMenu.classList.add('mobile-menu__active');
});
};


if(closeMobile){
  closeMobile.addEventListener('click',() => { 
  
    mobileMenu.classList.remove('mobile-menu__active');
  });
}


document.addEventListener('DOMContentLoaded', function () {

  if(commentsMore){
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
  };
 

});

openPopupButtons.forEach(function(item){
  item.addEventListener('click', () => { 
      // e.preventDefault();
    logIn.classList.add('popup-active'); 
    popupWrapp.classList.add('popup-active');
    feedbackBlock.forEach(function(item){
      item.style.display = 'none';
  }) 
  })
}),

singInLink.forEach(function(item){
  item.addEventListener('click',(e) => {
    e.preventDefault();
    singIn.classList.add('popup-active');
    logIn.classList.remove('popup-active');
    feedbackBlock.forEach(function(item){
      item.style.display = 'none';
  }) 
})
}),



registerCBtn.addEventListener('click',(e) => {
e.preventDefault();
registerCode.classList.add('popup-active');
singIn.classList.remove('popup-active');
}) ,

registerCodeBtn.addEventListener('click',(e) => {
e.preventDefault();
registerDone.classList.add('popup-active');
registerCode.classList.remove('popup-active');
}) ;
closePopupButton.forEach( function(item){
item.addEventListener('click', () => {
  logIn.classList.remove('popup-active');
  singIn.classList.remove('popup-active');
  registerCode.classList.remove('popup-active');
  registerDone.classList.remove('popup-active');
  popupWrapp.classList.remove('popup-active');
 
})
});

if(window.innerWidth >= 1024){
  console.log(window.innerWidth)
  document.querySelectorAll('.psikholog__item').forEach((item) => {
    item.addEventListener('mouseover', () => {
        document.querySelectorAll('.psikholog__item__session').forEach((block) => {
            block.style.display = 'none';
  
            let v = block.querySelector('video');
            if(v && !block.parentNode.isEqualNode(item)){
                v.pause();
            }
        })
        item.querySelector('.psikholog__item__session').style.display = '';
    });
  });
} else{
 
}

document.querySelectorAll('.psikholog__item').forEach(function(item){
  let play = item.querySelector('.play-video');

  if(play != null){
    play.addEventListener('click',() => {
      item.querySelector('.psikholog__item__session').style.display = 'block'
    })
  }

  let close = item.querySelector('.close-video');

  if(close != null){
    close.addEventListener('click', () => {
      item.querySelector('.psikholog__item__session').style.display = 'none'
    })
  }
});


if (window.matchMedia("(min-width: 320px) and ( max-width:900px)").matches){
  if(accountLink){
    accountLink.innerHTML = '';
  }
 
}
if (window.matchMedia("(min-width: 360px) and ( max-width:740px)").matches) {

  $('.last-views ul').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    speed:300,
  });

  $('.problem-solving__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    speed:300,
    autoplaySpeed:5000,
    dots: true,
    arrows:false,
    variableWidth:true
  });


  


  $('.direction__tab').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 5000,
    speed:30,
    dots: true,
    arrows:false,
    variableWidth:true
  });


 

} else {
  /* the viewport is less than 400 pixels wide */
}


if(aboutMore){
  aboutMore.addEventListener('click', function() {
    psBody.style.height = '100%';
    aboutMore.innerHTML = "";
    
  });
}




  
document.querySelectorAll('.psiholog__item__title').forEach((item) => 
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    if(parent.classList.contains('psiholog__item__active')){
        parent.classList.remove('psiholog__item__active')
    }else{
      document
              .querySelectorAll('.psiholog__item__item')
              .forEach((child) => child.classList.remove('psiholog__item__active'))

      parent.classList.toggle('psiholog__item__active');
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



if(checkClose){
  checkClose.addEventListener('click', function(){
    const checkItem = document.querySelectorAll('.filter__btn input');
  
    checkItem.forEach(function(el){
      el.checked = false;
    })
  })
  
}




if(filterMobileBtn){
  filterMobileBtn.addEventListener('click', function(){ 
 
    filterMobile.classList.add('mobile-filter__active');
  });
  
  filterAppl.addEventListener('click',() => { 
  
    filterMobile.classList.remove('mobile-filter__active');
    
  });
  filterMobileClose.addEventListener('click',() => { 
  
    filterMobile.classList.remove('mobile-filter__active');
    
  });
}


document.querySelectorAll('.test__body__title').forEach((item) => 
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    if(parent.classList.contains('test__active')){
        parent.classList.remove('test__active')
    }else{
      // document
      //         .querySelectorAll('.test__bady__item')
      //         .forEach((child) => child.classList.remove('test__active'))

      parent.classList.toggle('test__active');
    }
  })
)

if(selectCurrent){
  selectCurrent.forEach(function(select){

    const selectHeader = select.querySelector(".filter__select");
    const selectItem = select.querySelector(".filter__select__item");
    const selectList = select.querySelector(".filter__select__list");
    const selectCh = select.querySelector(".select__current");
    if(selectHeader){
      selectHeader.addEventListener('click', function(){
        selectList.style.display = "block";
    
      });
    }
    
    if(selectList){
      selectList.addEventListener("blur", function() {
        selectList.style.display = "none";
    });
    }
    
    if(selectList){
      selectList.querySelectorAll("div").forEach(function(item) {
        item.addEventListener("click", function() {
          selectCh.textContent = item.textContent;
          selectList.style.display = "none";
        });
    });
    }
   
  
  });
}




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






if(filterBtn){
  filterBtn.addEventListener('click', function(){ 
   
    filterBox.classList.add('filter__active');
});


closeFilter.addEventListener('click',() => { 
 
   filterBox.classList.remove('filter__active');
   

});
filterApply.addEventListener('click',() => { 
 
   filterBox.classList.remove('filter__active');
   

});
}



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



// this._el.addEventListener('click', (e) => {
//   // получим элемент .accordion__header
//   const elHeader = e.target.closest('.question__item__text');
//   // если такой элемент не найден, то прекращаем выполнение функции
//   if (!elHeader) {
//     return;
//   }
//   // если необходимо, чтобы всегда был открыт один элемент
//   if (!this._config.alwaysOpen) {
//     // получим элемент с классом accordion__item_show и сохраним его в переменную elOpenItem
//     const elOpenItem = this._el.querySelector('.accordion__item_show');
//     // если такой элемент есть
//     if (elOpenItem) {
//       // и он не равен текущему, то переключим ему класс accordion__item_show
//       elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
//     }
//   }
//   // переключим класс accordion__item_show элемента .accordion__header
//   elHeader.parentElement.classList.toggle('accordion__item_show');
// });



