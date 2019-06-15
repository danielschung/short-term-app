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
	// $('div.coverage-table th.inputs').change(function() {
	// 	if ( $('input#coverage-A').is(':checked') ) {
	// 		$('div.coverage-table table tbody').children('tr').eq(3).toggleClass('selected');
	// 	} else {
	// 		$('div.coverage-table table tbody').children('tr').eq(3).removeClass('selected');
	// 	}
	// 	if ( $('input#coverage-B').is(':checked') ) {
	// 		$('div.coverage-table table tbody').children('tr').eq(4).toggleClass('selected');
	// 	} else {
	// 		$('div.coverage-table table tbody').children('tr').eq(4).removeClass('selected');
	// 	}
	// 	if ( $('input#coverage-C').is(':checked') ) {
	// 		$('div.coverage-table table tbody').children('tr').eq(5).toggleClass('selected');
	// 	} else {
	// 		$('div.coverage-table table tbody').children('tr').eq(5).removeClass('selected');
	// 	}
	// 	if ( $('input#coverage-D').is(':checked') ) {
	// 		$('div.coverage-table table tbody').children('tr').eq(6).toggleClass('selected');
	// 	} else {
	// 		$('div.coverage-table table tbody').children('tr').eq(6).removeClass('selected');
	// 	}
	// })	 
});

//fields missing
const alert = () => {
	let codeBlock = '<div class="codeBlock"><p>You have missing fields. See below.</p></div>';
	document.getElementById('alert').innerHTML = codeBlock;
}
const removeAlert = () => {
	$('div#alert').children().remove();
}
const next = () => {
	$(event.target).parent().parent().slideToggle();
	$(event.target).parent().parent().prev().toggleClass('closed');
};
const validate = () => {
	const container = $(event.target).parent().parent();
	const inputs = container.find('input:required, select:required').toArray();
	const checkBoxes = () => {
		let boxArray = container.find( $('input[value="check"]') ).toArray();
		if ( boxArray.length == 0 ) {
			return true;
		} else {
			for (let i = 0; i < boxArray.length; i++) {
				let boxNames = boxArray[i].name;
				if ( boxArray[i].checked ) {
					$(`#${boxNames}`).removeClass('invalid');
					return true;
				} else {
					return false;
				}
			}
		}		
	}
	for (let i = 0; i < inputs.length; i++) {
		let names = inputs[i].name;
		let values = inputs[i].value;
		if ( values == '' || values == 'check') {
			$(`#${names}`).addClass('invalid');
			checkBoxes();
		} else {
			$(`#${names}`).removeClass('invalid');
		}
	}
	let empty = container.find('input.invalid, select.invalid').toArray();
	if ( empty.length == 0 ) {
		removeAlert();
		next();
	} else {
		alert();
	}
}

//Prior last name function
const priorName = () => {
	const maritalStatus = document.getElementById('applicant-marital-status').value;
	if ( maritalStatus === 'married' || maritalStatus === 'divorced' ) {
		$('input#applicant-prior-last-name').removeClass('hide');
	} else {
		$('input#applicant-prior-last-name').addClass('hide');
	}
}

//spouse form progress
const spouseProgress = () => {
	const nextElement = $(event.target).parent().parent().next();
	if ( nextElement.hasClass('hide') ) {
		nextElement.removeClass('hide');
	} else {
		return;
	}
}
const addSpouse = () => {
	let codeBlock = '<div class="codeBlock"> <p class="header">Spouse Personal Information</p><input type="text" placeholder="First Name" required id="spouse-first-name" name="spouse-first-name" minlength="2" maxlength="128"/> <input type="text" placeholder="MI" required id="spouse-MI" name="spouse-MI" maxlength="1"/> <input type="text" placeholder="Last Name" required id="spouse-last-name" name="spouse-last-name" minlength="2" maxlength="128"/> <input type="text" placeholder="SSN" required id="spouse-SSN" name="spouse-SSN" class="SSN" minlength="9" maxlength="9"/> <input type="text" placeholder="Birthday" required id="spouse-birthday" name="spouse-birthday" class="date"pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Birthday\')" maxlength="10"/> <select required id="spouse-gender" value="" class="purple-format" name="spouse-gender"> <option value="" disabled selected class="placeholder">Gender</option> <option value="male">Male</option> <option value="female">Female</option> </select> <p class="header">Health Information</p><input type="text" placeholder="Age" required id="spouse-age" name="spouse-age" class="age" minlength="1" maxlength="3"/> <input type="text" placeholder="Height" required id="spouse-height" name="spouse-height" class="height" onfocus="(this.placeholder=\'0&lsquo; 00&ldquo;\')" onblur="(this.placeholder=\'Height\')" minlength="2" maxlength="6"/> <input type="text" placeholder="Weight" required id="spouse-weight" name="spouse-weight" class="weight" minlength="2" maxlength="4"/> <input type="text" placeholder="Primary Care Physician (First Name)" required id="spouse-pcp-first-name" name="spouse-pcp-first-name" minlength="2" maxlength="128"/> <input type="text" placeholder="Primary Care Physician (Last Name)" required id="spouse-pcp-last-name" name="spouse-pcp-last-name" minlength="2" maxlength="128"/> <div class="question"> <p>Are you an established patient?</p><select required id="spouse-question-1" value="" class="purple-format question" name="spouse-question-1"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Have you been declined for insurance due to health reasons within the past 18 months?</p><select required id="spouse-question-2" value="" class="purple-format question" name="spouse-question-2"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Do you have hospital, major medical, group health, government or medical insurance coverage that will overlap during the duration of this coverage?</p><select required id="spouse-question-3" value="" class="purple-format question" name="spouse-question-3"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>If you are female, are you now pregnant, or if you are male, are you an expectant parent?</p><select required id="spouse-question-4" value="" class="purple-format question" name="spouse-question-4"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Do you weigh more than 300 pounds if male or more than 250 pounds if female?</p><select required id="spouse-question-5" value="" class="purple-format question" name="spouse-question-5"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>In the past five years, have you taken medication for or been advised, consulted, tested, diagnosed, treated or hospitalized or recommended for treatment by a physician for any of the following: heart or circulatory system disorder, including heart attack or stroke; insulin-dependent diabetes; cancer or tumors; disorder of the blood, including hemophilia or leukemia; kidney or liver disorder; mental or nervous conditions or disorders; alcoholism or alcohol abuse; drug abuse, addiction or dependency; organ transplant; emphysema; Crohn’s disease, ulcerative colitis or hepatitis?</p><select required id="spouse-question-6" value="" class="purple-format question" name="spouse-question-6"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Have you ever been diagnosed or treated by a physician for acquired immune deficiency syndrome (AIDS) or AIDS-related complex (ARC), or have you in the past five years tested positive for HIV virus or other immune disorders?</p><select required id="spouse-question-7" value="" class="purple-format question" name="spouse-question-7"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><input type="text" placeholder="Signature of Spouse or Civil Union" required id="spouse-authorization-signature" name="spouse-authorization-signature" minlength="2" maxlength="128"> <input type="text" placeholder="Date of Sign" required id="spouse-authorization-signature-date" name="spouse-authorization-signature-date" class="date" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Date of Sign\')" maxlength="10"> <div class="agree"> <label><input type="checkbox" value="check" required id="authorization-spouse-signature-agree" name="authorization-spouse-signature-agree"/>I agree that the typed names above shall be treated as valid signatures for all purposes of this form.</label> </div><p class="header">Authorization</p><p class="authorize">I hereby authorize and direct Health Alliance to obtain all protected health information, including medical records from any healthcare provider who either advised, treated, attended or rendered service to me or my dependents or who has in his or her possession any information or records with respect to advice, treatment or services. This authorization is limited only to protected health information, including medical records, obtained for underwriting purposes as are necessary for Health Alliance to determine the acceptability of this application.</p><p class="authorize">I have read, and I understand and acknowledge the following statements about my rights:</p><p class="bullet">• I may revoke this authorization at any time prior to the use of the protected health information stated above, by notifying Health Alliance in writing. Please note, however, the revocation will not have any effect on actions taken before the revocation was received.</p><p class="bullet">• If the person or organization to whom this information is disclosed is not a covered entity under the federal privacy rules, the information may no longer be protected by the federal privacy rules after such disclosure is made.</p><p class="bullet">• I further understand that eligibility of enrollment in this plan will be conditioned on receiving authorization to obtain protected health information, including medical records, with the exception of psychotherapy notes.</p><p class="authorize">A copy of this authorization and release shall be valid as the original and will remain in effect for two and one-half (2 ½) years from the latest signature date below or until revoked by me in writing.</p></div>';
	document.getElementById('spouse-block').innerHTML = codeBlock;
}
const removeSpouse = () => {
	$('div#spouse-block').children().remove();
}

//dependents form progress
const dependentsProgress = () => {
	const nextElement = $(event.target).parent().parent().next();
	if ( nextElement.hasClass('hide') ) {
		nextElement.removeClass('hide');
	} else {
		return;
	}
}
const numOfDependents = () => {
	const inputBox = $('input#num-of-dependents');
	const amount = inputBox.val();
	const dependentBlock = document.getElementById('dependent-block');
	let codeBlock = '<div class="codeBlock"> <p class="header">Dependent Personal Information</p><input type="text" placeholder="First Name" required id="dependent-first-name" name="dependent-first-name" minlength="2" maxlength="128"> <input type="text" placeholder="MI" required id="dependent-MI" name="dependent-MI" maxlength="1"> <input type="text" placeholder="Last Name" required id="dependent-last-name" name="dependent-last-name" minlength="2" maxlength="128"> <input type="text" placeholder="SSN" required id="dependent-SSN" name="dependent-SSN" class="SSN" minlength="9" maxlength="9"> <input type="text" placeholder="Birthday" required id="dependent-birthday" name="dependent-birthday" class="date" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Birthday\')" maxlength="10"> <div class="radio gender"> <p class="gender">Gender</p><div class="right"> <label>M</label> <input type="radio" name="dependent-gender" value="male" required> <label>F</label> <input type="radio" name="dependent-gender" value="female" required> </div></div><p class="header">Health Information</p><input type="text" placeholder="Age" required id="dependent-age" name="dependent-age" class="age" minlength="1" maxlength="3"> <input type="text" placeholder="Height" required id="dependent-height" name="dependent-height" class="height" onfocus="(this.placeholder=\'0&lsquo; 00&ldquo;\')" onblur="(this.placeholder=\'Height\')" minlength="2" maxlength="6"> <input type="text" placeholder="Weight" required id="dependent-weight" name="dependent-weight" class="weight" minlength="2" maxlength="4"> <input type="text" placeholder="Primary Care Physician (First Name)" required id="dependent-pcp-first-name" name="dependent-pcp-first-name" minlength="2" maxlength="128"> <input type="text" placeholder="Primary Care Physician (Last Name)" required id="dependent-pcp-last-name" name="dependent-pcp-last-name" minlength="2" maxlength="128"> <div class="question"> <p>Are you an established patient?</p><select required id="dependent-question-1" value="" class="purple-format question" name="dependent-question-1"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Have you been declined for insurance due to health reasons within the past 18 months?</p><select required id="dependent-question-2" value="" class="purple-format question" name="dependent-question-2"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Do you have hospital, major medical, group health, government or medical insurance coverage that will overlap during the duration of this coverage?</p><select required id="dependent-question-3" value="" class="purple-format question" name="dependent-question-3"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>If you are female, are you now pregnant, or if you are male, are you an expectant parent?</p><select required id="dependent-question-4" value="" class="purple-format question" name="dependent-question-4"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Do you weigh more than 300 pounds if male or more than 250 pounds if female?</p><select required id="dependent-question-5" value="" class="purple-format question" name="dependent-question-5"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>In the past five years, have you taken medication for or been advised, consulted, tested, diagnosed, treated or hospitalized or recommended for treatment by a physician for any of the following: heart or circulatory system disorder, including heart attack or stroke; insulin-dependent diabetes; cancer or tumors; disorder of the blood, including hemophilia or leukemia; kidney or liver disorder; mental or nervous conditions or disorders; alcoholism or alcohol abuse; drug abuse, addiction or dependency; organ transplant; emphysema; Crohn’s disease, ulcerative colitis or hepatitis?</p><select required id="dependent-question-6" value="" class="purple-format question" name="dependent-question-6"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Have you ever been diagnosed or treated by a physician for acquired immune deficiency syndrome (AIDS) or AIDS-related complex (ARC), or have you in the past five years tested positive for HIV virus or other immune disorders?</p><select required id="dependent-question-7" value="" class="purple-format question" name="dependent-question-7"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><input type="text" placeholder="Signature of Dependent" required id="dependent-authorization-signature" name="dependent-authorization-signature" minlength="2" maxlength="128"> <input type="text" placeholder="Date of Sign" required id="dependent-authorization-signature-date" name="dependent-authorization-signature-date" class="date" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Date of Sign\')" maxlength="10"> <div class="agree"> <label><input type="checkbox" required id="authorization-dependent-signature-agree" name="authorization-dependent-signature-agree" value="check">I agree that the typed names above shall be treated as valid signatures for all purposes of this form.</label> </div><p class="header">Authorization</p><p class="authorize">I hereby authorize and direct Health Alliance to obtain all protected health information, including medical records from any healthcare provider who either advised, treated, attended or rendered service to me or my dependents or who has in his or her possession any information or records with respect to advice, treatment or services. This authorization is limited only to protected health information, including medical records, obtained for underwriting purposes as are necessary for Health Alliance to determine the acceptability of this application.</p><p class="authorize">I have read, and I understand and acknowledge the following statements about my rights:</p><p class="bullet">• I may revoke this authorization at any time prior to the use of the protected health information stated above, by notifying Health Alliance in writing. Please note, however, the revocation will not have any effect on actions taken before the revocation was received.</p><p class="bullet">• If the person or organization to whom this information is disclosed is not a covered entity under the federal privacy rules, the information may no longer be protected by the federal privacy rules after such disclosure is made.</p><p class="bullet">• I further understand that eligibility of enrollment in this plan will be conditioned on receiving authorization to obtain protected health information, including medical records, with the exception of psychotherapy notes.</p><p class="authorize">A copy of this authorization and release shall be valid as the original and will remain in effect for two and one-half (2 ½) years from the latest signature date below or until revoked by me in writing.</p><input type="text" placeholder="Signature of Applicant or Legally Authorized Representative" required id="applicant-authorization-signature" name="applicant-authorization-signature" minlength="2" maxlength="128"> <input type="text" placeholder="Date of Sign" required id="applicant-authorization-signature-date" name="applicant-authorization-signature-date" class="date" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Date of Sign\')" maxlength="10"> <input type="text" placeholder="If signed by a Legally Authorized Representative, please indicate the relationship to the individual" id="applicant-relationship" name="applicant-relationship" minlength="2" maxlength="128"> <div class="agree"> <label><input type="checkbox" required id="authorization-applicant-signature-agree" name="authorization-applicant-signature-agree" value="check">I agree that the typed names above shall be treated as valid signatures for all purposes of this form.</label> </div></div>';
	const validateOutput = () => {
		let countDiv = $('#dependent-block').children().length;
		if ( countDiv < amount ) {
			let difference = amount - countDiv;
			for (i = 0; i < difference; i++) {
				dependentBlock.insertAdjacentHTML('beforeend',codeBlock);
			}
		} else if ( countDiv > amount ) {
			let difference = countDiv - amount;
			for (i = 0; i < difference; i++) {
				dependentBlock.removeChild(dependentBlock.lastChild);	
			}
		} else if ( countDiv === amount && amount.length < 1 ) {
			dependentBlock.insertAdjacentHTML('beforeend',codeBlock);
		} else {
			return;
		}
	}

	if ( amount.length < 1 ) {
		validateOutput();
	} else if ( amount.length > 0 && amount <= 3 ) {
		colorize();
		validateOutput();
	} else {
	}
}
const dependentsDigress = () => {
	const nextElement = $(event.target).parent().parent().next();
	if ( nextElement.hasClass('hide') ) {
		return;
	} else {
		nextElement.addClass('hide');
		$('div#dependent-block').children().remove();
	};
}
const colorize = () => {
	const inputBox = $('input#num-of-dependents');
	const amount = inputBox.val();
	if ( amount <= 3 ) {
		inputBox.removeClass('invalid');
	} else if ( amount > 3 ) {
		inputBox.addClass('invalid');
	}
}

//table highlight
const tableSelect = () => {
	let tableChoice = document.getElementById('coverage-table-select').value;
	let tableRow = $('#coverage-table table tbody').children();
	if ( tableChoice === 'A' ) {
		tableRow.eq(3).addClass('selected');
		tableRow.eq(4).removeClass('selected');
		tableRow.eq(5).removeClass('selected');
		tableRow.eq(6).removeClass('selected');
	} else if ( tableChoice === 'B' ) {
		tableRow.eq(4).addClass('selected');
		tableRow.eq(3).removeClass('selected');
		tableRow.eq(5).removeClass('selected');
		tableRow.eq(6).removeClass('selected');
	} else if ( tableChoice === 'C' ) {
		tableRow.eq(5).addClass('selected');
		tableRow.eq(3).removeClass('selected');
		tableRow.eq(4).removeClass('selected');
		tableRow.eq(6).removeClass('selected');
	} else if ( tableChoice === 'D' ) {
		tableRow.eq(6).addClass('selected');
		tableRow.eq(3).removeClass('selected');
		tableRow.eq(4).removeClass('selected');
		tableRow.eq(5).removeClass('selected');
	}
}

//agent form progress function
const addAgent = () => {
	let codeBlock = '<div class="codeBlock"> <p class="header">I certify that:</p><p class="bullet">• All answers provided in this application were completed by or provided by the applicant.</p><p class="bullet">• I have reviewed this enrollment form to ensure that all required items have been completed.</p><p class="bullet">• I am not aware of any information not disclosed on this enrollment form relating to the health, habits or reputation of any person listed on this enrollment form, which might have a bearing on the risk.</p><p class="header">Agent / Broker Information</p><input type="text" placeholder="Full Name" required id="agent-name" name="agent-name" minlength="2" maxlength="128"> <input type="text" placeholder="ID# / Code" required id="agent-ID" name="agent-ID" onfocus="(this.placeholder=\'00-000-0000\')" onblur="(this.placeholder=\'ID# / Code\')" minlength="2" maxlength="12"> <input type="text" placeholder="Agency" required id="agent-agency" name="agent-agency" minlength="2" maxlength="256"> <br><input type="text" placeholder="Home Phone" required id="agent-phone" name="agent-phone" class="phone" minlength="10" maxlength="14" pattern="^[0-9]{3}-[0-9]{3}-[0-9]{4}$"> <input type="email" placeholder="Email" required id="agent-email" name="agent-email" minlength="3" maxlength="256"> <input type="text" placeholder="Producer Signature" required id="producer-signature" name="producer-signature" minlength="2" maxlength="128"> <input type="text" placeholder="Date of Sign" required id="producer-signature-date" name="producer-signature-date" class="date" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Date of Sign\')" maxlength="10"> <div class="agree"> <label><input type="checkbox" required id="producer-signature-valid" name="producer-signature-valid">I agree that the typed names above shall be treated as valid signatures for all purposes of this form.</label> </div></div>';
	document.getElementById('agent-block').innerHTML = codeBlock;
}
const removeAgent = () => {
	$('div#agent-block').children().remove();
}

//download form function
const addPDF = () => {
	let codeBlock = '<div class="codeBlock"> <p class="header">Download a hard copy instead of the application above upload below. <a href="/media/Resources/ind-ILshorttermapp-1118fill.pdf" target="_blank">(Download here)</a></p><input type="file" name="files" id="files" multiple="multiple" accept="image/jpeg,image/gif,image/png,application/pdf,image/tiff,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" data-val="true" data-val-allowedfileextensions="Allowed file extensions: pdf, jpg, jpeg, gif, tiff, png, txt, doc, docx"/> </div>';
	document.getElementById('download-block').innerHTML = codeBlock;
}
const removePDF = () => {
	$('div#download-block').children().remove();
}


























