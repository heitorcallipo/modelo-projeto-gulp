"use strict";var progressSlide=document.querySelector(".js-progress"),swiper=new Swiper(".banners",{spaceBetween:45,pagination:{el:".left .swiper-pagination"},autoplay:{delay:5500,disableOnInteraction:!1},loop:!0,on:{init:function(){progressSlide.classList.remove("animate"),progressSlide.classList.remove("active"),progressSlide.classList.add("animate"),progressSlide.classList.add("active")},slideChangeTransitionStart:function(){progressSlide.classList.remove("animate"),progressSlide.classList.remove("active"),progressSlide.classList.add("active")},slideChangeTransitionEnd:function(){progressSlide.classList.add("animate")}}}),swiper=new Swiper(".depoimentos",{slidesPerView:3,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1.3,spaceBetween:15},768:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:3,spaceBetween:30}}}),swiper=new Swiper(".massoterapia",{slidesPerView:4,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1.3,spaceBetween:15},768:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:4,spaceBetween:15}}}),openFaq=(AOS.init({duration:1e3,once:!0}),document.querySelectorAll(".js-accordion")),header=(openFaq.forEach(function(e){e.addEventListener("click",function(){e.parentElement.classList.toggle("active")})}),document.getElementById("js-header"));function fixedMenu(){80<window.pageYOffset?header.classList.add("fixed-menu"):header.classList.remove("fixed-menu")}document.addEventListener("scroll",fixedMenu);var btnMobile=document.getElementById("js-btn-menu-mobile"),openHeader=document.querySelectorAll(".js-link li a");btnMobile.addEventListener("click",function(){btnMobile.classList.toggle("is-active"),document.documentElement.classList.toggle("menu-opened")}),openHeader.forEach(function(e){e.addEventListener("click",function(){btnMobile.classList.remove("is-active"),document.documentElement.classList.remove("menu-opened")})});