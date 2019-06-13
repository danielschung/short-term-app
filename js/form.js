//jquery rules
$(document).ready(function(){

	$('div.wrapper').hide();
	$('div.wrapper').fadeIn(1000);

	//accordian expand and bg color
	$('div.accordian').click(function(){
		$(this).next().slideToggle();
		$(this).toggleClass('closed');
	});

	//automask functions src=http://igorescobar.github.io/jQuery-Mask-Plugin/
	$('input.phone').mask('(000) 000-0000');
	$('input.SSN').mask('000-00-0000');
	$('input.date').mask('00-00-0000');
	$('input.zip').mask('00000');
	$('input.age').mask('000');
	$('input.height').mask('0\' 00\"');
	$('input.weight').mask('0000');
	$('input.num').mask('0');

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
const addSpouse = () => {
	let codeBlock = '<div class=codeBlock><p class=header>Spouse Personal Information</p><input name=spouse-first-name required placeholder="First Name"id=spouse-first-name minlength=2 maxlength=128> <input name=spouse-MI required placeholder=MI id=spouse-MI maxlength=1> <input name=spouse-last-name required placeholder="Last Name"id=spouse-last-name minlength=2 maxlength=128> <input name=spouse-SSN required placeholder=SSN id=spouse-SSN class=SSN minlength=9 maxlength=9> <input name=spouse-birthday required placeholder=Birthday id=spouse-birthday class=date pattern=[0-9]{2}-[0-9]{2}-[0-9]{4} onfocus=\'this.placeholder="MM-DD-YYYY"\'onblur=\'this.placeholder="Birthday"\'maxlength=10><div class="gender radio"><p class=gender>Gender<div class=right><label>M</label> <input name=spouse-gender required type=radio value=male> <label>F</label> <input name=spouse-gender required type=radio value=female></div></div><p class=header>Health Information</p><input name=spouse-age required placeholder=Age id=spouse-age class=age minlength=1 maxlength=3> <input name=spouse-height required placeholder=Height id=spouse-height class=height onfocus=\'this.placeholder="0‘ 00“"\'onblur=\'this.placeholder="Height"\'minlength=2 maxlength=6> <input name=spouse-weight required placeholder=Weight id=spouse-weight class=weight minlength=2 maxlength=4> <input name=spouse-pcp-first-name required placeholder="Primary Care Physician (First Name)"id=spouse-pcp-first-name minlength=2 maxlength=128> <input name=spouse-pcp-last-name required placeholder="Primary Care Physician (Last Name)"id=spouse-pcp-last-name minlength=2 maxlength=128><div class=question><p>Are you an established patient?<div class=right><label>Y</label> <input name=applicant-question-1 required type=radio value=yes> <label>N</label> <input name=applicant-question-1 required type=radio value=no><div class=clear></div></div></div><div class=question><p>Have you been declined for insurance due to health reasons within the past 18 months?<div class=right><label>Y</label> <input name=applicant-question-2 required type=radio value=yes> <label>N</label> <input name=applicant-question-2 required type=radio value=no><div class=clear></div></div></div><div class=question><p>Do you have hospital, major medical, group health, government or medical insurance coverage that will overlap during the duration of this coverage?<div class=right><label>Y</label> <input name=applicant-question-3 required type=radio value=yes> <label>N</label> <input name=applicant-question-3 required type=radio value=no><div class=clear></div></div></div><div class=question><p>If you are female, are you now pregnant, or if you are male, are you an expectant parent?<div class=right><label>Y</label> <input name=applicant-question-4 required type=radio value=yes> <label>N</label> <input name=applicant-question-4 required type=radio value=no><div class=clear></div></div></div><div class=question><p>Do you weigh more than 300 pounds if male or more than 250 pounds if female?<div class=right><label>Y</label> <input name=applicant-question-5 required type=radio value=yes> <label>N</label> <input name=applicant-question-5 required type=radio value=no><div class=clear></div></div></div><div class=question><p>In the past five years, have you taken medication for or been advised, consulted, tested, diagnosed, treated or hospitalized or recommended for treatment by a physician for any of the following: heart or circulatory system disorder, including heart attack or stroke; insulin-dependent diabetes; cancer or tumors; disorder of the blood, including hemophilia or leukemia; kidney or liver disorder; mental or nervous conditions or disorders; alcoholism or alcohol abuse; drug abuse, addiction or dependency; organ transplant; emphysema; Crohn’s disease, ulcerative colitis or hepatitis?<div class=right><label>Y</label> <input name=applicant-question-6 required type=radio value=yes> <label>N</label> <input name=applicant-question-6 required type=radio value=no><div class=clear></div></div></div><div class=question><p>Have you ever been diagnosed or treated by a physician for acquired immune deficiency syndrome (AIDS) or AIDS-related complex (ARC), or have you in the past five years tested positive for HIV virus or other immune disorders?<div class=right><label>Y</label> <input name=applicant-question-7 required type=radio value=yes> <label>N</label> <input name=applicant-question-7 required type=radio value=no><div class=clear></div></div></div><input name=spouse-authorization-signature required placeholder="Signature of Spouse or Civil Union"id=spouse-authorization-signature minlength=2 maxlength=128> <input name=spouse-authorization-signature-date required placeholder="Date of Sign"id=spouse-authorization-signature-date class=date pattern=[0-9]{2}-[0-9]{2}-[0-9]{4} onfocus=\'this.placeholder="MM-DD-YYYY"\'onblur=\'this.placeholder="Date of Sign"\'maxlength=10><div class=agree><label><input name=authorization-signature-valid required type=checkbox value=Bike id=authorization-signature-valid>I agree that the typed names above shall be treated as valid signatures for all purposes of this form.</label></div><p class=header>Authorization<p class=authorize>I hereby authorize and direct Health Alliance to obtain all protected health information, including medical records from any healthcare provider who either advised, treated, attended or rendered service to me or my dependents or who has in his or her possession any information or records with respect to advice, treatment or services. This authorization is limited only to protected health information, including medical records, obtained for underwriting purposes as are necessary for Health Alliance to determine the acceptability of this application.<p class=authorize>I have read, and I understand and acknowledge the following statements about my rights:<p class=bullet>• I may revoke this authorization at any time prior to the use of the protected health information stated above, by notifying Health Alliance in writing. Please note, however, the revocation will not have any effect on actions taken before the revocation was received.<p class=bullet>• If the person or organization to whom this information is disclosed is not a covered entity under the federal privacy rules, the information may no longer be protected by the federal privacy rules after such disclosure is made.<p class=bullet>• I further understand that eligibility of enrollment in this plan will be conditioned on receiving authorization to obtain protected health information, including medical records, with the exception of psychotherapy notes.<p class=authorize>A copy of this authorization and release shall be valid as the original and will remain in effect for two and one-half (2 ½) years from the latest signature date below or until revoked by me in writing.</div>';
	document.getElementById('spouse-block').innerHTML = codeBlock;
}
const removeSpouse = () => {
	$('div#spouse-block').children().remove();
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





