

//STICKY NAVBAR
  window.addEventListener('scroll', function(){
      let nav = document.querySelector('nav');
      let toggler = document.querySelector('.navbar-toggler-icon');
      nav.classList.toggle('sticky', window.scrollY > 0);
    })

//LANDING SCROLL
    $('#wwd').on('click', function() {
      var body = $("html, body");
      body.stop().animate({scrollTop:$('#landing-fit').offset().top}, '1000');
  });


//BANNER BANNER BACKGROUND CHANGE

let banner = document.querySelector('.banner');
let bgImage = ["url('img/golf7.jpg')",
              "url('img/golf4.jpg')",
              "url('img/golf2.jpg')"];
let bgSize = ['100% 80rem',
              '100% 140rem',
              '100% 100rem'];
let bgPos =  ['center 25%',
              'center 40%',
              'center center'];             
let i = 0;

function bg(){
  if(banner){
  banner.style.backgroundImage=bgImage[2];
  banner.style.backgroundSize = bgSize[2];
  banner.style.backgroundPosition = bgPos[2];
  banner.style.transition = '1s';
  }
}

bg();

function bgChange(){
  if(banner){
  banner.style.backgroundImage = bgImage[i];
  banner.style.backgroundSize = bgSize[i];
  banner.style.backgroundPosition = bgPos[i];

  if(i < bgImage.length - 1){
    i++
  } else {
    i=0
  }
}
}

setInterval('bgChange()', 10000);




//ALT-BANNER BACKGROUND CHANGE

let banner2 = document.querySelector('.alt-banner');
let bgImage2 = ["url('img/golf7.jpg')",
              "url('img/golf4.jpg')",
              "url('img/golf2.jpg')"];
let bgSize2 = ['100% 60rem',
              '100% 125rem',
              '100% 100rem'];
let bgPos2 =  ['center 25%',
              'center 40%',
              'center center'];             
let j = 0;

function bg2(){
  if(banner2){
  banner2.style.backgroundImage= bgImage2[2];
  banner2.style.backgroundSize = bgSize2[2]
  banner2.style.backgroundPosition = bgPos2[2]
  banner2.style.transition = '1s';

  }
}

bg2();

function bgChange2(){
  if(banner2){
  banner2.style.backgroundImage = bgImage2[j];
  banner2.style.backgroundSize = bgSize2[j];
  banner2.style.backgroundPosition = bgPos2[j];

  if(j < bgImage2.length - 1){
    j++
  } else {
    j=0
  }
}}

setInterval('bgChange2()', 10000);

//FITTING DESCRIPTIONS HIDE / SHOW
{
 
    let fullBag = document.querySelector('#full-bag-link');
    let dfw = document.querySelector('#dfw-link');
    let iron = document.querySelector('#iron-link');
    let wedge = document.querySelector('#wedge-link');
    let putter = document.querySelector('#putter-link');
    let gapping = document.querySelector('#gapping-link');
    let fullBagDesc = document.querySelector('#full-bag');
    let dfwDesc = document.querySelector('#dfw');
    let ironDesc = document.querySelector('#iron');
    let wedgeDesc = document.querySelector('#wedge');
    let putterDesc = document.querySelector('#putter');
    let gappingDesc = document.querySelector('#gapping');





  if(fullBag){
  fullBag.addEventListener('click', function(){
    fullBag.classList.add('active');
    dfw.classList.remove('active');
    iron.classList.remove('active');
    wedge.classList.remove('active');
    putter.classList.remove('active');
    gapping.classList.remove('active');
    fullBagDesc.classList.remove('hide');
    dfwDesc.classList.add('hide');
    ironDesc.classList.add('hide');
    wedgeDesc.classList.add('hide');
    putterDesc.classList.add('hide');
    gappingDesc.classList.add('hide');
  })}

  if(dfw){
  dfw.addEventListener('click', function(){
    dfw.classList.add('active');
    fullBag.classList.remove('active');
    iron.classList.remove('active');
    wedge.classList.remove('active');
    putter.classList.remove('active');
    gapping.classList.remove('active');
    dfwDesc.classList.remove('hide');
    fullBagDesc.classList.add('hide');
    ironDesc.classList.add('hide');
    wedgeDesc.classList.add('hide');
    putterDesc.classList.add('hide');
    gappingDesc.classList.add('hide');
  })}

  if(iron){
  iron.addEventListener('click', function(){
    iron.classList.add('active');
    fullBag.classList.remove('active');
    dfw.classList.remove('active');
    wedge.classList.remove('active');
    putter.classList.remove('active');
    gapping.classList.remove('active');
    ironDesc.classList.remove('hide');
    fullBagDesc.classList.add('hide');
    dfwDesc.classList.add('hide');
    wedgeDesc.classList.add('hide');
    putterDesc.classList.add('hide');
    gappingDesc.classList.add('hide');
  })}

  if(wedge){
  wedge.addEventListener('click', function(){
    wedge.classList.add('active');
    fullBag.classList.remove('active');
    dfw.classList.remove('active');
    iron.classList.remove('active');
    putter.classList.remove('active');
    gapping.classList.remove('active');
    wedgeDesc.classList.remove('hide');
    fullBagDesc.classList.add('hide');
    dfwDesc.classList.add('hide');
    ironDesc.classList.add('hide');
    putterDesc.classList.add('hide');
    gappingDesc.classList.add('hide');
  })}

  if(putter){
  putter.addEventListener('click', function(){
    putter.classList.add('active');
    fullBag.classList.remove('active');
    dfw.classList.remove('active');
    iron.classList.remove('active');
    wedge.classList.remove('active');
    gapping.classList.remove('active');
    putterDesc.classList.remove('hide');
    fullBagDesc.classList.add('hide');
    dfwDesc.classList.add('hide');
    ironDesc.classList.add('hide');
    wedgeDesc.classList.add('hide');
    gappingDesc.classList.add('hide');
  })}

  if(gapping){
  gapping.addEventListener('click', function(){
    gapping.classList.add('active');
    fullBag.classList.remove('active');
    dfw.classList.remove('active');
    iron.classList.remove('active');
    wedge.classList.remove('active');
    putter.classList.remove('active');
    gappingDesc.classList.remove('hide');
    fullBagDesc.classList.add('hide');
    dfwDesc.classList.add('hide');
    ironDesc.classList.add('hide');
    wedgeDesc.classList.add('hide');
    putterDesc.classList.add('hide');

  })}
}




  
   
   








 











