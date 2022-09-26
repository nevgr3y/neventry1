let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
	search.classlist.toggle('active');
	navbar.classlist.remove('active');
}



let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
	navbar.classlist.toggle('active');
	search.classlist.remove('active');
}

window.onscroll = () => {
   navbar.classlist.toggle('active');
   search.classlist.remove('active');

}


let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
         header.classlist.toggle('shadow', window.scrollY > 0);
});