var toggleNavStatus = false;
let toggleNav = () => { //here i have used anonymous arrow function u can use normal function
	let getSidebar = document.querySelector('.side-bar');
	let getSidebarUl = document.querySelector('.side-bar ul');
	let getSidebarLinks = document.querySelectorAll('.side-bar ul li a');
	if(toggleNavStatus === false){
		getSidebarUl.style.visibility = 'visible';
		getSidebar.style.width = '250px';
		let arrayLength = getSidebarLinks.length;
		for(let i = 0; i<arrayLength; i++){
			getSidebarLinks[i].style.opacity='1';
		}
		toggleNavStatus = true;
	}
	else if (toggleNavStatus === true){
		getSidebar.style.width = '0%';
		let arrayLength = getSidebarLinks.length;
		for(let i = 0; i<arrayLength; i++){
			getSidebarLinks[i].style.opacity='0';
		}
		getSidebarUl.style.visibility = 'visible';
		toggleNavStatus = false;
	}
}

$(document).ready(function(){
	$('.hamburg').click(function(){
		$('.hamburg').hide();
		$('.close-side').css('display','block');
	})
	$('.close-side').click(function(){
		$('.hamburg').show();
		$('.close-side').hide();
	})
})