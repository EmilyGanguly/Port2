window.addEventListener("scroll",function(){
	var header=document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})
const track= document.querySelector(".carousal_track");
const slides= Array.from(track.children);
const nextButton= document.querySelector(".right");
const prevButton= document.querySelector(".left");
// const nav= document.querySelector(".nav");
// const dots= document.querySelector("nav.children");

const slideWidth= slides[0].getBoundingClientRect().width;

const slidePosition=(slide,index)=>{
	slide.style.left=slideWidth*index+'px';
}
slides.forEach(slidePosition);

const moveToSlide=(track,currentSlide,targetSlide)=>{
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	currentSlide.classList.remove("current_slide");
	targetSlide.classList.add("current_slide");
}

//When i click left, slides moves to left
prevButton.addEventListener('click',e=>{
	let currentSlide = track.querySelector(".current_slide");
	const prevSlide = currentSlide.previousElementSibling;

	moveToSlide(track,currentSlide,prevSlide);
	// track.style.transform = 'translateX(-' + amountToMove + ')';
	// currentSlide.classList.remove("current_slide");
	// nextSlide.classList.add("current_slide");
})

//When i click right, slides move to right
nextButton.addEventListener('click',e=>{
	let currentSlide = track.querySelector(".current_slide");
	// console.log(track);
	// console.log(currentSlide);
	const nextSlide = currentSlide.nextElementSibling;
	//const amountToMove = nextSlide.style.left;

	moveToSlide(track,currentSlide,nextSlide);
	// track.style.transform = 'translateX(-' + amountToMove + ')';
	// currentSlide.classList.remove("current_slide");
	// nextSlide.classList.add("current_slide");
})
console.log("test");