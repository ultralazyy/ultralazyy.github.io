window.addEventListener("DOMContentLoaded", function() {
    'use strict';
    
    let tab = document.querySelectorAll('.butcategories');
    let info = document.querySelector('.categories');
    let tabContent = document.querySelectorAll('.cards_sec')
    console.log(tab)

    
    function hideContent(a){
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }
    hideContent(1);

    function showContent(b){
        if (tabContent[b].classList.contains("hide")){
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show")
        }
    }

    
    info.addEventListener("click", function (event){
        
        let target = event.target;

        if (target && target.classList.contains('butcategories')) {
            console.log(target)
            console.log(target.classList)
            for(let i = 0; i < tab.length; i++){
                if (target == tab[i]){
                    hideContent(0);
                    tab.forEach(item => {
                    item.classList.remove('act');
                    });
                    target.classList.add('act');
                    showContent(i);
                    console.log(tab.length)
                    break
                }
            }
        }
    });

    let slideIndex = 1,
    slides = document.querySelectorAll('.textik'),
    prev = document.querySelector('.strelochkiLEFT'),
    next = document.querySelector('.strelochkiRAIT'),
    dotsWrap = document.querySelector('.dota'),
    dots = document.querySelectorAll('.dot');

        showSlides(slideIndex);
    function showSlides (n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('active');
    }
    function plusSlides(n) {
        showSlides(slideIndex += n); 
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });


    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

	const modal = document.getElementById("modaal");
	const btn = document.getElementById("seemore");
	const closeBtn = document.querySelector(".close");

	btn.addEventListener("click", function () {
		modal.classList.add("activemod");
		closeBtn.addEventListener("click", closeModal);
		function closeModal() {
			modal.classList.remove("activemod");
			closeBtn.removeEventListener("click", closeModal);
			modal.removeEventListener("click", hideModal);
		}
		modal.addEventListener("click", hideModal);
		function hideModal(event) {
			if (event.target === modal) {
				closeModal();
			}
		}
	});

    const accordion = () => {
		const btns = document.querySelectorAll(".strelochka");
		btns.forEach((btn) => {
			btn.addEventListener("click", function () {
				if (!this.classList.contains("acttext")) {
					btns.forEach((btn) => {
						btn.classList.remove("acttext", "actaccord");
					});
					this.classList.add("acttext", "actaccord");
				} else
					btns.forEach((btn) => {
						btn.classList.remove("acttext", "actaccord");
					});
			});
		});
	};
	accordion();

    const hamb = document.querySelector("#hamb");
	const popup = document.querySelector("#menushka");
	const menu = document.querySelector("#hat_nav").cloneNode(1);
    const closeBtn2 = document.querySelector(".close2");
	hamb.addEventListener("click", hambHandler);

	function hambHandler(e) {
		popup.classList.toggle('open');
		renderPopup();
	}
	function renderPopup() {
		popup.appendChild(menu);
	}
})

