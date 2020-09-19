// import $ from 'jquery';
import logo from './assets/logo4.svg';
import './styles.css';



(function(){
  let image = document.querySelector('.logo');
  image.src = `${logo}`;
})();

document.querySelector('#toggle-btn').addEventListener('click',function(){
  let show_links = document.querySelector('.nav-center').firstElementChild.nextElementSibling;
  if(show_links.classList.contains('hide')){
    show_links.classList.remove('hide')
  }
  else{
    show_links.classList.add('hide');
  }

},false)


/*Links change color based on activity*/
let links = document.querySelectorAll('.link');
for(let idx = 0; idx < links.length; idx++){
  links[0].classList.add('show');
  links[idx].addEventListener('click',function(e){
    for(let idx = 0; idx < links.length; idx++){
      links[idx].classList.remove('show');
    }
    if(e.target.classList.contains('show')){
      e.target.classList.remove('show');
    }
    else{
      e.target.classList.add('show')
    }
  },false)
}





/*To suppoert other browsers */
// $(function(){
//   let nav = document.querySelector('.nav');
//   let article = document.querySelector('.mainBox');
//   let navHeight = nav.scrollHeight;
//   console.log(navHeight)
//   function moveHeader(){
//     let topBoundery = article.getBoundingClientRect().top-navHeight;
//     topBoundery < 0 ? nav.classList.add('scrollingBackground') : nav.classList.remove('scrollingBackground');
//     window.requestAnimationFrame(moveHeader);
//   }
//   window.requestAnimationFrame(moveHeader);
// })
// let btn = document.querySelector('.toggle-header');
// btn.addEventListener('click',function(e){
//   let container_s_links = e.target.parentNode.previousElementSibling;
//   if(container_s_links.classList.contains('show')){
//     container_s_links.classList.remove('show');
//   }
//   else{
//     container_s_links.classList.add('show');
//   }
// },false)
