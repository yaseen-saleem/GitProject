jQuery(document).ready(function ($) {
	tab = $('.tabs h3 a');

	tab.on('click', function (event) {
		event.preventDefault();
		tab.removeClass('active');
		$(this).addClass('active');

		tab_content = $(this).attr('href');
		$('div[id$="tab-content"]').removeClass('active');
		$(tab_content).addClass('active');
	});
});

// const printColors = (...colorsArray) => {
// 	console.log(colorsArray);
// };

// const arrayDestructurer = ['red', 'green', 'blue'];

// const [...colorsArray] = arrayDestructurer;

// // printColors(colorsArray);
// // function greeting(name) {
// // 	alert('Hello ' + name);
// // }

// // function processUserInput(callback) {
// // 	var name = prompt('Please enter your name.');
// // 	callback(name);
// // }

// // processUserInput(greeting);
