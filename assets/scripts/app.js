//==========Modal==========
//Open and close form login and register
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const headerUser = $('.header-user');
const modal = $('.modal')

const modalHeadingBtn = modal.querySelectorAll('.auth-form__heading-btn')
const modalAuthForm = modal.querySelectorAll('.auth-form')

headerUser.addEventListener('click', function(){
    modal.classList.remove('hide-modal')
    modal.classList.add('show-modal')
})
const modalBody = modal.querySelector('.modal__body');
modalBody.onclick = function(e){
    e.stopPropagation()
}
modal.onclick = function(){
    modal.classList.remove('show-modal')
    modal.classList.add('hide-modal')
}

//Transform login form and register form
modalHeadingBtn.forEach(function(btn){
    btn.onclick = function(e){
        const name = e.target.name
        modalAuthForm.forEach(function(form){
            const formName = form.getAttribute('name')
            if(formName === name){
                form.classList.add('active')
            }else{
                form.classList.remove('active')
            }
        })
    }
})


// =============Slider=================
const slider = $('.slider')
const slides = slider.querySelectorAll('.slide')

const prevBtn = slider.querySelector('.prev-btn')
const nextBtn = slider.querySelector('.next-btn')

slides.forEach(function(slide, index){
    slide.style.left = `${index*100}%`
})
let count = 0

prevBtn.onclick = function(){
    count--;
    carousel()
}
nextBtn.onclick = function(){
    count++;
    carousel()
    console.log(count)
}

function carousel(){
    if(count >= slides.length){
        count = 0
    }
    if(count < 0){
        count = slides.length - 1
    }
    slides.forEach(function(slide, index){
        slide.style.transform = `translateX(-${count*100}%)`
    })
}
// Autoplay slider
setInterval(function(){
    count++;
    carousel()
}, 5000)


// =========== handle video ============
const videoBtn = document.getElementById('videoBtn')
const videoContainer = $('.content-video-src')
const videoPlayer = $('.content-video_container')

videoContainer.onclick = function(){
    videoContainer.classList.remove('show-video')
    videoPlayer.pause()
}
videoPlayer.onclick = function(e){
    e.stopPropagation()
}
videoBtn.onclick = function(){
    videoContainer.classList.add('show-video')
    videoPlayer.play()
}
//===========To top btn ================
const toTopBtn = $('#to-top-btn')
window.addEventListener('scroll', function(){
    const scrollHeight= window.pageYOffset;
    if(scrollHeight > 500){
        toTopBtn.style.display = 'block'
    }else{
        toTopBtn.style.display = 'none'
    }
})


// side area handle
const sideArea = $('.side-area');
const btnOpenSideList = $('.rbtn.related');
const btnSideArea = $$('.rbtn');

btnOpenSideList.onclick = function(){
    const svgs = btnOpenSideList.querySelectorAll('svg');

    if(!sideArea.classList.contains('active')){
        svgs.forEach(function(svg){
            svg.classList.toggle('active');
        });
        btnSideArea.forEach(function(btn){
            const span = btn.querySelector('span');
            span.style.width = '0';
            span.style.overflow = 'hidden';
        });
        setTimeout(()=>{
            sideArea.classList.add('active');
        }, 200);
    }else{
        sideArea.classList.remove('active');
        svgs.forEach(function(svg){
            svg.classList.toggle('active');
        });

        setTimeout(()=>{
            btnSideArea.forEach(function(btn){
                const span = btn.querySelector('span');
                span.style.width = '73px';
            })
        }, 200);
    }
    
}
document.onclick = function(){
    sideArea.classList.remove('active');
}