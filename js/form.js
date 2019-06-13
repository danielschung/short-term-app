$(document).ready(function(){

	$('div.wrapper').hide();
	$('div.wrapper').fadeIn(1000);

	//accordian expand and bg color
	$('div.accordian').click(function(){
		$(this).next().slideToggle();
		$(this).toggleClass('closed');
	});

	//automask functions
	$('input.phone').mask('(000) 000-0000');
	$('input.SSN').mask('000-00-0000');
	$('input.date').mask('00-00-0000');
	$('input.zip').mask('00000');
	$('input.age').mask('000');
	$('input.height').mask('0\' 00\"');
	$('input.weight').mask('0000');
	$('input.num').mask('00');

	//table highlight
	$('div.coverage-table div.left input').change(function() {
		if ( $('input#coverage-A').is(':checked') ) {
			$('div.coverage-table table tbody').children('tr').eq(2).toggleClass('selected');
		} else {
			$('div.coverage-table table tbody').children('tr').eq(2).removeClass('selected');
		}
		if ( $('input#coverage-B').is(':checked') ) {
			$('div.coverage-table table tbody').children('tr').eq(3).toggleClass('selected');
		} else {
			$('div.coverage-table table tbody').children('tr').eq(3).removeClass('selected');
		}
		if ( $('input#coverage-C').is(':checked') ) {
			$('div.coverage-table table tbody').children('tr').eq(4).toggleClass('selected');
		} else {
			$('div.coverage-table table tbody').children('tr').eq(4).removeClass('selected');
		}
		if ( $('input#coverage-D').is(':checked') ) {
			$('div.coverage-table table tbody').children('tr').eq(5).toggleClass('selected');
		} else {
			$('div.coverage-table table tbody').children('tr').eq(5).removeClass('selected');
		}
	})
	 
});

//next button function
const next = () => {
	$(event.target).parent().parent().slideToggle();
	$(event.target).parent().parent().prev().toggleClass('closed');
	console.log('this button works');
};

//spouse form progress
const spouseProgress = () => {
	let nextElement = $(event.target).parent().parent().next();
	if ( nextElement.hasClass('hide') ) {
		nextElement.removeClass('hide');
	} else {
		return;
	}
}

//dependents form progress
const dependentsProgress = () => {
	let nextElement = $(event.target).parent().parent().next();
	if ( nextElement.hasClass('hide') ) {
		nextElement.removeClass('hide');
	} else {
		return;
	}
}

const dependentsDigress = () => {
	let nextElement = $(event.target).parent().parent().next();
	if ( nextElement.hasClass('hide') ) {
		return;
	} else {
		nextElement.addClass('hide');
	}
}






