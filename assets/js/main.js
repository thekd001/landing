

gsap.registerPlugin(ScrollTrigger);
setTimeout(() => {
    $('.intro').addClass('hide');
  }, 500);

let lastScroll = 0;

$(window).scroll(function(){
    curr = $(this).scrollTop();
    if (curr > lastScroll) {
        $('.fix-menu').addClass('hide');
        $('.fix-menu').removeClass('open');
    } else{
        $('.fix-menu').removeClass('hide');
    }
    lastScroll = curr;
})


$('.btn-open').click(function(){
    $(this).parent().parent().toggleClass('open');
});
$('.btn-close').click(function(){
    $('.fix-menu').removeClass('open');
});
$(document).click(function(e){
    if (  $('.fix-menu').has(e.target).length === 0 ) {
        $('.fix-menu').removeClass('open');
    }
});



gsap.utils.toArray('.sc-common').forEach(element => {
    item01 = gsap.timeline({
        scrollTrigger:{
            trigger:element,
            start:"0% 80%",
            end:"100% 100%",
            toggleActions:"play resume resume reverse",  
        },
    })
    item01.from(element.querySelector('.title h2'),1,{ scale:1.2},'a');
    item01.from(element.querySelectorAll('.title .n1'),1,{ opacity:0},'a');
    item01.from(element.querySelectorAll('.title .n2'),1,{ opacity:0, delay:0.3},'a');
    item01.from(element.querySelectorAll('.title .n3'),1,{ opacity:0, delay:0.5},'a');
    item01.from(element.querySelectorAll('.title .n4'),1,{ opacity:0, delay:0.8},'a');
    item01.from(element.querySelectorAll('.title .n5'),1,{ opacity:0, delay:1},'a');
});

work = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-work",
        start:"0 80%",
        end:"100% 100%",
        scrub:4,
    },
})
work.set('.sc-work .work-list > li:nth-child(2n)',{y:200});
work.to('.sc-work .work-list > li:nth-child(2n)',{y:-100});


picture = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-service",
        start:"0 80%",
        end:"100% 100%",
        toggleActions:"play resume resume reverse",
    },
})
picture.from('.sc-service .title h2 .word',1,{xPercent:-50, scale:1.1},'a');
picture.from('.sc-service .title h2 .word .n1',1,{opacity:0},'a');
picture.from('.sc-service .title h2 .word .n2',1,{opacity:0, delay:0.3},'a');
picture.from('.sc-service .title h2 .word .n3',1,{opacity:0, delay:0.5},'a');
picture.from('.sc-service .title h2 .word .n4',1,{opacity:0, delay:0.8},'a');
picture.from('.sc-service .title h2 .word .n5',1,{opacity:0, delay:1},'a');

flower = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-flower",
        start:"0 80%",
        end:"100% 100%",
        toggleActions:"play resume resume reverse",
    },
})
flower.from('.sc-flower .bg-area', {scale:0.9});

card = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-card",
        start:"0 0",
        end:"100% 100%",
        scrub:0,
    },
})
// card.set('.sc-card .card-list', {x:0, y:0});
 card.to('.sc-card .card-list', {x:-610, y:-1890});


 work = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-business",
        start:"0 0",
        end:"100% 100%",
        scrub:4,
    },
})
work.from('.sc-business .business-list > li:nth-child(2)',{y:60}, 'a');
work.from('.sc-business .business-list > li:nth-child(3)',{y:120}, 'a');
work.from('.sc-business .business-list > li:nth-child(4)',{y:180}, 'a');
