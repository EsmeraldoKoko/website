const articles = document.querySelectorAll('article');
const title = document.querySelectorAll('h2');
const formularioUser = document.querySelector('.formUser');
const formularioComment = document.querySelector('.formComment');


const obs = new IntersectionObserver((esmer)=>{
	esmer.forEach((item)=>{
		if(item.isIntersecting){
			item.target.classList.add('showArticles')
		}
	})
})

articles.forEach((esmer)=> obs.observe(esmer));
title.forEach(esmer => obs.observe(esmer));

const btnMore = document.querySelector('.btnMore');
const more = document.querySelector('.more')
btnMore.addEventListener('click', (e)=>{
	
	more.style.display = 'flex';
	btnMore.style.display = 'none';
})

const name = document.querySelector('h1');
const setName = window.prompt('What is your name?')
if(setName.length < 15 && setName.length > 0){
	name.innerHTML = setName
}else{
	name.innerHTML = 'Esmeraldo - Markesmer'
}

const signIn = document.querySelector('.signIn');
const nav = document.querySelector('nav');
const addUser = document.querySelector('.addUser');

signIn.addEventListener('click', ()=>{
	addUser.style.display = 'block';
	nav.style.display = 'none';
})

formularioComment.addEventListener('submit', (esmer)=>{
	esmer.preventDefault();

	const nome = document.querySelector('.nome').value;
	const pass = document.querySelector('.pass').value;
	const comment = document.querySelector('textarea').innerHTML;

	//Esmeraldo@gmail.com

	if(nome === nome && pass === pass && comment === comment){
		alert(`Hi ${nome}! \n Welcome to the \n Esmeraldo's Website.
		 \n Thanks for your feedback.`)
	}else{
		alert('No comment.')
	}
})

formularioUser.addEventListener('submit', (esmer)=>{
	esmer.preventDefault();

	const userName = document.querySelector('.userName').value;
	const userPassword = document.querySelector('.userPassword').value;

	if(userName == userName && userPassword == userPassword){
		alert(`Hi ${userName}! \n Welcome to the \n Esmeraldo's Website.`)
		nav.style.display = 'sticky';
		addUser.style.display = 'none';
	}else{
		alert('Enter your name or your password.')
	}
})