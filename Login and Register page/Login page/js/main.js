
(function() {
	//Dùng chế độ nghiêm ngặt
	"use strict";
	//Cho biến fullHeight thành một function
	var fullHeight = function() {
		//Cho các elements bằng với những phần tử có lớp .js-fullheight
	  var elements = document.querySelectorAll('.js-fullheight');
	  //Cho biến windownHeight bằng với chiều cao màn hình
	  var windowHeight = window.innerHeight;
		//Đặt giá trị cho biến đếm, so sánh biến đếm
	  for (var i = 0; i < elements.length; i++) {
		//Chỉnh giá trị của lớp js-fullheight
		elements[i].style.height = windowHeight + 'px';
	  }
	};
	//Chạy function
	fullHeight();
  
	// var togglePasswords = document.querySelectorAll('.toggle-password');
  
	// for (var i = 0; i < togglePasswords.length; i++) {
	//   togglePasswords[i].addEventListener('click', function() {
	// 	this.classList.toggle('fa-eye');
	// 	this.classList.toggle('fa-eye-slash');
	// 	var input = document.querySelector(this.getAttribute('toggle'));
	// 	if (input.getAttribute('type') === 'password') {
	// 	  input.setAttribute('type', 'text');
	// 	} else {
	// 	  input.setAttribute('type', 'password');
	// 	}
	//   });
	// }
  })();
  
