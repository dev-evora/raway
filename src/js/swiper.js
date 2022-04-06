system = document.querySelectorAll('.system-carousel');
if(system){
	system.forEach((el) => {
		var system = new Swiper(el,{
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			observer: true,
			observeParents: true,
      navigation: {
				nextEl: '.system-carousel__next',
				prevEl: '.system-carousel__prev',
			},
			breakpoints: {
				576: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				}
			}
		});
	});
}

equipment = document.querySelectorAll('.equipment-carousel .carousel');
if(equipment){
	equipment.forEach((el) => {
		var equipment = new Swiper(el,{
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			observer: true,
			observeParents: true,
      navigation: {
				nextEl: '.equipment-carousel__next',
				prevEl: '.equipment-carousel__prev',
			},
			breakpoints: {
				576: {
					slidesPerView: 2,
				},
			}
		});
	});
}

confident = document.querySelectorAll('.confident-slider');
if(confident){
	confident.forEach((el) => {
		var confident = new Swiper(el,{
			autoplay: {
				delay: 5000,
			},
			loop: true,
			observer: true,
			observeParents: true,
			pagination: {
				el: '.confident-pagination',
				clickable: true,
			},
		});
	});
}

promo = document.querySelectorAll('.promo-slider');
if(promo){
	promo.forEach((el) => {
		var promo = new Swiper(el,{
			autoplay: {
				delay: 5000,
			},
			loop: true,
			observer: true,
			observeParents: true,
			pagination: {
				el: '.promo-pagination',
				clickable: true,
			},
		});
	});
}

item = document.querySelectorAll('.item');
if(item){
	let second = new Swiper(".item-second", {
		spaceBetween: 25,
		slidesPerView: 2,
		freeMode: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '.item-next',
			prevEl: '.item-prev',
		},
		breakpoints: {
			475: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			}
		}
	});
	
	let main = new Swiper(".item-main", {
		thumbs: {
			swiper: second,
		},
		navigation: {
			nextEl: '.item-next',
			prevEl: '.item-prev',
		},
	});	
}