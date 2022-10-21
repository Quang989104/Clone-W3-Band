var buyBtns = document.querySelectorAll('.buy-ticket-btn')
var modal = document.querySelector('.js-modal')
var closeBtn = document.querySelector('.js-modal-close')
var container = document.querySelector('.js-modal-container')
var menuMobile = document.querySelector('.js-mobile-menu-btn')
var headeritems =  document.querySelectorAll('#nav li a[href*="#"]')
var header = document.querySelector('.js-header')

headeritems.forEach(function(headeritem) {
	headeritem.onclick = function() {
		header.style.height = null
		header.style.position = 'fixed'
	}
})


function buyTickets() {
	modal.classList.add('open')
}

function closeBuyTickets() {
	modal.classList.remove('open')
}

buyBtns.forEach((buyBtn) => {
	buyBtn.addEventListener('click',buyTickets)
})

modal.addEventListener('click',closeBuyTickets)

container.addEventListener('click',function(e) {
	e.stopPropagation()
})

closeBtn.addEventListener('click',closeBuyTickets)



var heightHeader = header.clientHeight
menuMobile.onclick = function() {
	isClose = header.clientHeight === heightHeader
	if(isClose) {
		header.style.height = 'auto'
	} else {
		header.style.height = null
	}
}