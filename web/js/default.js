$(function(){
	var i = $('#patchwork'),
	e = $('#skills'),
	o = $('#patchwork-btn'),
	n = '1000';
	resized = !1,
	$.resize_window = function (o) {
	var n = $('body').width(),
		s = $('.box-heavy'),
		c = $('.box-medium');
		1 == o ? ($.hideThis(i), $.showThis(e), resized = !0)  : n > 1280 && 1 != resized ? ($.showThis(s), $.hideThis(c))  : 800 < n && n <= 1280 ? ($.hideThis(s), $.showThis(c), resized = !1)  : 550 < n && n <= 800 ? ($.hideThis(s), $.showThis(c))  : n <= 550 && ($.hideThis(s), $.showThis(c))
	},
	$.hideThis = function (i) {
		i.slideUp('100').trigger('formVisible')
	},
	$.showThis = function (i) {
		i.slideDown('100').trigger('formVisible')
	},
	$(window).resize(function () {
		$.resize_window(!1)
	}),
	$(window).ready(function () {
		$.resize_window(!1)
	})
});