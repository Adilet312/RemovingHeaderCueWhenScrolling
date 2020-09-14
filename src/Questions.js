import $ from 'jquery';
import './styles.css';
/*To suppoert other browsers */
$(function(){
  let nav = document.querySelector('.nav');
  let article = document.querySelector('.mainBox');
  let navHeight = nav.scrollHeight;
  console.log(navHeight)
  function moveHeader(){
    let topBoundery = article.getBoundingClientRect().top-navHeight;
    topBoundery < 0 ? nav.classList.add('scrollingBackground') : nav.classList.remove('scrollingBackground');
    window.requestAnimationFrame(moveHeader);
  }
  window.requestAnimationFrame(moveHeader);
})

// let main = document.querySelector('main');
// document.querySelector('.btn').addEventListener('click',function(event){
//   let answer = main.lastElementChild;
//   let rowUp = event.currentTarget.firstElementChild;
//   let rowDown = event.currentTarget.lastElementChild;
//   console.log(event.currentTarget)
//   if(answer.classList.contains('answer-show') && rowUp.classList.contains('rowUp-hidden') && rowDown.classList.contains('rowDown')){
//     answer.classList.remove('answer-show');
//     rowUp.classList.remove('rowUp-hidden');
//     rowDown.classList.remove('rowDown');
//   }
//   else{
//     answer.classList.add('answer-show');
//     rowUp.classList.add('rowUp-hidden');
//     rowDown.classList.add('rowDown');
//
//   }
//
// },false);
