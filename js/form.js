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
	$('input.num').mask('00');
	$('input.agent-ID').mask('00000');
});

//fields missing
const alert = () => {
	let codeBlock = '<div class="codeBlock"><p class="alert">You have missing fields. See below.</p></div>';
	document.getElementById('alert').innerHTML = codeBlock;
}
const removeAlert = () => {
	$('div#alert').children().remove();
}
const next = () => {
	$(event.target).parent().parent().slideToggle();
	$(event.target).parent().parent().prev().toggleClass('closed');
}
const validate = () => {
	//declare constant variables
	const container = $(event.target).parent().parent();
	const inputs = container.find('input:required, select:required').toArray();
	//validate checkboxes
	const validateCheckBoxes = () => {
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
			validateCheckBoxes();
		} else {
			$(`#${names}`).removeClass('invalid');
		}
	}
	//validate ssn
	const validateSSN = () => {
		let thisBox = container.find('input.SSN');
		let boxArray = thisBox.toArray();
		const runLoop = () => {
			for (i = 0; i < boxArray.length; i++) {
				let names = boxArray[i].name;
				let values = boxArray[i].value;
				if ( values.length == 11 ) {
					$(`#${names}`).removeClass('invalid');
					return true;
				} else {
					$(`#${names}`).addClass('invalid');
					return false;
				}
			}
		}	
		if ( boxArray.length == 0 ) {
			return true;
		} else {
			runLoop();
		}
	}
	validateSSN();
	//validate dates
	const validateDates = () => {
		let thisBox = container.find('input.date');
		let boxArray = thisBox.toArray();
		const runLoop = () => {
			for (i = 0; i < boxArray.length; i++) {
				let names = boxArray[i].name;
				let values = boxArray[i].value;
				if ( values.length == 10 ) {
					$(`#${names}`).removeClass('invalid');
					return true;
				} else {
					$(`#${names}`).addClass('invalid');
					return false;
				}
			}
		}	
		if ( boxArray.length == 0 ) {
			return true;
		} else {
			runLoop();
		}
	}
	validateDates();
	//validate phone numbers
	const validatePhone = () => {
		let thisBox = container.find('input.phone');
		let boxArray = thisBox.toArray();
		const runLoop = () => {
			for (i = 0; i < boxArray.length; i++) {
				let names = boxArray[i].name;
				let values = boxArray[i].value;
				if ( values.length == 14 ) {
					$(`#${names}`).removeClass('invalid');
					return true;
				} else {
					$(`#${names}`).addClass('invalid');
					return false;
				}
			}
		}	
		if ( boxArray.length == 0 ) {
			return true;
		} else {
			runLoop();
		}
	}
	validatePhone();
	//validate emails
	const emailArray = container.find('input[type=email]').toArray();
	if ( emailArray.length > 0 ) {
		for (i = 0; i < emailArray.length; i++) {
			let valid = emailArray[i].checkValidity();
			let name = emailArray[i].name;
			if ( valid ) {
				$(`input#${name}`).removeClass('invalid');
			} else {
				$(`input#${name}`).addClass('invalid');
			}
		}
	}
	//validate radio buttons
	const validateRadio = () => {
		let spouseArray = container.find('input[type=radio][name=add-spouse]').toArray();
		let dependentArray = container.find('input[type=radio][name=add-spouse]').toArray();
		let representativeArray = container.find('input[type=radio][name=legal-representative]').toArray();
		let agentArray = container.find('input[type=radio][name=add-agent]').toArray();
		const checkSpouse = () => {
			let spouseYes = container.find('input[type=radio][name=add-spouse][value=yes]');
			let spouseNo = container.find('input[type=radio][name=add-spouse][value=no]');
			if ( spouseYes.is(':checked') || spouseNo.is(':checked') ) {
				$('input[name=add-spouse').removeClass('invalid');
				return true;
			} else if ( !spouseYes.is('checked') && !spouseNo.is('checked') ) {
				$('input[name=add-spouse').addClass('invalid');
				return false;
			}
		}
		if ( spouseArray.length > 0 ) {
			checkSpouse();
		}
		const checkDependent = () => {
			let dependentYes = container.find('input[type=radio][name=add-dependent][value=yes]');
			let dependentNo = container.find('input[type=radio][name=add-dependent][value=no]');
			if ( dependentYes.is(':checked') || dependentNo.is(':checked') ) {
				$('input[name=add-dependent').removeClass('invalid');
				return true;
			} else if ( !dependentYes.is('checked') && !dependentNo.is('checked') ) {
				$('input[name=add-dependent').addClass('invalid');
				return false;
			}
		}
		if ( dependentArray.length > 0 ) {
			checkDependent();
		}
		const checkRepresentative = () => {
			let representativeYes = container.find('input[type=radio][name=legal-representative][value=yes]');
			let representativeNo = container.find('input[type=radio][name=legal-representative][value=no]');
			if ( representativeYes.is(':checked') || representativeNo.is(':checked') ) {
				$('input[name=legal-representative').removeClass('invalid');
				return true;
			} else if ( !representativeYes.is('checked') && !representativeNo.is('checked') ) {
				$('input[name=legal-representative').addClass('invalid');
				return false;
			}
		}
		if ( representativeArray.length > 0 ) {
			checkRepresentative();
		}
		const checkAgent = () => {
			let agentYes = container.find('input[type=radio][name=add-agent][value=yes]');
			console.log(agentYes);
			let agentNo = container.find('input[type=radio][name=add-agent][value=no]');
			console.log(agentNo);
			if ( agentYes.is(':checked') || agentNo.is(':checked') ) {
				$('input[name=add-agent').removeClass('invalid');
				return true;
			} else if ( !agentYes.is('checked') && !agentNo.is('checked') ) {
				$('input[name=add-agent').addClass('invalid');
				return false;
			}
		}
		if ( agentArray.length > 0 ) {
			checkAgent();
		}
	}
	validateRadio();
	//final section check
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
	let codeBlock = '<div class="codeBlock"> <p class="header">Spouse Personal Information</p><input type="text" placeholder="First Name" required id="spouse-first-name" name="spouse-first-name" minlength="2" maxlength="128"/> <input type="text" placeholder="MI" class="optional" id="spouse-MI" name="spouse-MI" maxlength="1"/> <input type="text" placeholder="Last Name" required id="spouse-last-name" name="spouse-last-name" minlength="2" maxlength="128"/> <input type="text" placeholder="SSN" required id="spouse-SSN" name="spouse-SSN" class="SSN" minlength="9" maxlength="9"/> <input type="text" placeholder="Birthday" required id="spouse-birthday" name="spouse-birthday" class="date" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Birthday\')" maxlength="10"/> <select required id="spouse-gender" value="" class="purple-format" name="spouse-gender"> <option value="" disabled selected class="placeholder">Gender</option> <option value="male">Male</option> <option value="female">Female</option> </select> <p class="header">Health Information</p><input type="text" placeholder="Age" required id="spouse-age" name="spouse-age" class="age" minlength="1" maxlength="3"/> <input type="text" placeholder="Height" required id="spouse-height" name="spouse-height" class="height" onfocus="(this.placeholder=\'0&lsquo; 00&ldquo;\')" onblur="(this.placeholder=\'Height\')" minlength="2" maxlength="6"/> <input type="text" placeholder="Weight" required id="spouse-weight" name="spouse-weight" class="weight" minlength="2" maxlength="4"/> <input type="text" placeholder="Primary Care Physician (First Name)" required id="spouse-pcp-first-name" name="spouse-pcp-first-name" minlength="2" maxlength="128"/> <input type="text" placeholder="Primary Care Physician (Last Name)" required id="spouse-pcp-last-name" name="spouse-pcp-last-name" minlength="2" maxlength="128"/> <div class="question"> <p>Are you an established patient?</p><select required id="spouse-question-1" value="" class="purple-format question" name="spouse-question-1"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Have you been declined for insurance due to health reasons within the past 18 months?</p><select required id="spouse-question-2" value="" class="purple-format question" name="spouse-question-2"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Do you have hospital, major medical, group health, government or medical insurance coverage that will overlap during the duration of this coverage?</p><select required id="spouse-question-3" value="" class="purple-format question" name="spouse-question-3"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>If you are female, are you now pregnant, or if you are male, are you an expectant parent?</p><select required id="spouse-question-4" value="" class="purple-format question" name="spouse-question-4"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Do you weigh more than 300 pounds if male or more than 250 pounds if female?</p><select required id="spouse-question-5" value="" class="purple-format question" name="spouse-question-5"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>In the past five years, have you taken medication for or been advised, consulted, tested, diagnosed, treated or hospitalized or recommended for treatment by a physician for any of the following: heart or circulatory system disorder, including heart attack or stroke; insulin-dependent diabetes; cancer or tumors; disorder of the blood, including hemophilia or leukemia; kidney or liver disorder; mental or nervous conditions or disorders; alcoholism or alcohol abuse; drug abuse, addiction or dependency; organ transplant; emphysema; Crohn’s disease, ulcerative colitis or hepatitis?</p><select required id="spouse-question-6" value="" class="purple-format question" name="spouse-question-6"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Have you ever been diagnosed or treated by a physician for acquired immune deficiency syndrome (AIDS) or AIDS-related complex (ARC), or have you in the past five years tested positive for HIV virus or other immune disorders?</p><select required id="spouse-question-7" value="" class="purple-format question" name="spouse-question-7"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div></div>';
	document.getElementById('spouse-block').innerHTML = codeBlock;
}
const addSpouseSignature = () => {
	let codeBlock = '<div class="codeBlock"> <input type="text" placeholder="Signature of Spouse or Civil Union (ONLY if to be insured)" required id="spouse-agreement-signature" name="spouse-agreement-signature" minlength="1" maxlength="128"> <input type="text" placeholder="Date of Sign" required id="spouse-agreement-signature-date" name="spouse-agreement-signature-date" class="date" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Date of Sign\')" maxlength="10"/></div>';
	document.getElementById('spouse-signature-block').innerHTML = codeBlock;
	let codeBlock2 = '<div class="codeBlock2"> <input type="text" placeholder="Signature of Spouse or Civil Union" required id="spouse-authorization-signature" name="spouse-authorization-signature" minlength="2" maxlength="128"> <input type="text" placeholder="Date of Sign" required id="spouse-authorization-signature-date" name="spouse-authorization-signature-date" class="date" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Date of Sign\')" maxlength="10"> </div>';
	document.getElementById('spouse-signature-block-2').innerHTML = codeBlock2;
}
const removeSpouse = () => {
	$('div#spouse-block').children().remove();
	$('div#spouse-signature-block').children().remove();
	$('div#spouse-signature-block-2').children().remove();
}

//dependents form progress
const dependentsProgress = () => {
	let codeBlock = '<div class="codeBlock"> <div class="radio number-input"> <p>How many?</p><div class="right"> <input type="text" name="num-of-dependents" id="num-of-dependents" required class="num" onfocus="(this.placeholder=\'10 max\')" onblur="(this.placeholder=\'\')" onkeyup="colorize();" minlength="1" maxlength="2" max="10"> <button type="button" class="update" onclick="numOfDependents();">Update</button> </div></div></div>';
	document.getElementById('num-of-dependents-block').innerHTML = codeBlock;
}
const numOfDependents = () => {
	const inputBox = $('input#num-of-dependents');
	const amount = inputBox.val();
	const dependentBlock = document.getElementById('dependent-block');
	const dependentSignatureBlock = document.getElementById('dependent-signature-block');
	const dependentSignatureBlock2 = document.getElementById('dependent-signature-block-2');
 	let codeBlock = '<div class="codeBlock"> <p class="header">Dependent Personal Information</p><input type="text" placeholder="First Name" required id="dependent-first-name" name="dependent-first-name" minlength="2" maxlength="128"> <input type="text" placeholder="MI" class="optional" id="dependent-MI" name="dependent-MI" maxlength="1"> <input type="text" placeholder="Last Name" required id="dependent-last-name" name="dependent-last-name" minlength="2" maxlength="128"> <input type="text" placeholder="SSN" required id="dependent-SSN" name="dependent-SSN" class="SSN" minlength="9" maxlength="9"> <input type="text" placeholder="Birthday" required id="dependent-birthday" name="dependent-birthday" class="date" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Birthday\')" maxlength="10"> <select required id="spouse-gender" value="" class="purple-format" name="dependent-gender"> <option value="" disabled selected class="placeholder">Gender</option> <option value="male">Male</option> <option value="female">Female</option> </select> <p class="header">Health Information</p><input type="text" placeholder="Age" required id="dependent-age" name="dependent-age" class="age" minlength="1" maxlength="3"> <input type="text" placeholder="Height" required id="dependent-height" name="dependent-height" class="height" onfocus="(this.placeholder=\'0&lsquo; 00&ldquo;\')" onblur="(this.placeholder=\'Height\')" minlength="2" maxlength="6"> <input type="text" placeholder="Weight" required id="dependent-weight" name="dependent-weight" class="weight" minlength="2" maxlength="4"> <input type="text" placeholder="Primary Care Physician (First Name)" required id="dependent-pcp-first-name" name="dependent-pcp-first-name" minlength="2" maxlength="128"> <input type="text" placeholder="Primary Care Physician (Last Name)" required id="dependent-pcp-last-name" name="dependent-pcp-last-name" minlength="2" maxlength="128"> <div class="question"> <p>Are you an established patient?</p><select required id="dependent-question-1" value="" class="purple-format question" name="dependent-question-1"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Have you been declined for insurance due to health reasons within the past 18 months?</p><select required id="dependent-question-2" value="" class="purple-format question" name="dependent-question-2"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Do you have hospital, major medical, group health, government or medical insurance coverage that will overlap during the duration of this coverage?</p><select required id="dependent-question-3" value="" class="purple-format question" name="dependent-question-3"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>If you are female, are you now pregnant, or if you are male, are you an expectant parent?</p><select required id="dependent-question-4" value="" class="purple-format question" name="dependent-question-4"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Do you weigh more than 300 pounds if male or more than 250 pounds if female?</p><select required id="dependent-question-5" value="" class="purple-format question" name="dependent-question-5"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>In the past five years, have you taken medication for or been advised, consulted, tested, diagnosed, treated or hospitalized or recommended for treatment by a physician for any of the following: heart or circulatory system disorder, including heart attack or stroke; insulin-dependent diabetes; cancer or tumors; disorder of the blood, including hemophilia or leukemia; kidney or liver disorder; mental or nervous conditions or disorders; alcoholism or alcohol abuse; drug abuse, addiction or dependency; organ transplant; emphysema; Crohn’s disease, ulcerative colitis or hepatitis?</p><select required id="dependent-question-6" value="" class="purple-format question" name="dependent-question-6"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Have you ever been diagnosed or treated by a physician for acquired immune deficiency syndrome (AIDS) or AIDS-related complex (ARC), or have you in the past five years tested positive for HIV virus or other immune disorders?</p><select required id="dependent-question-7" value="" class="purple-format question" name="dependent-question-7"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div></div>';
	let codeSignatureBlock = '<div class="codeBlock"> <input type="text" placeholder="Signature of Dependent (ONLY if to be insured and 18 years or older)" required id="dependent-agreement-signature" name="dependent-agreement-signature" minlenght="2" maxlength="128"/> <input type="text" placeholder="Date of Sign" required id="dependent-agreement-signature-date" name="dependent-agreement-signature-date" class="date" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Date of Sign\')" maxlength="10"/> </div>';
	let codeSignatureBlock2 = '<div class="codeBlock2"> <input type="text" placeholder="Signature of Dependent" required id="dependent-authorization-signature" name="dependent-authorization-signature" minlength="2" maxlength="128"> <input type="text" placeholder="Date of Sign" required id="dependent-authorization-signature-date" name="dependent-authorization-signature-date" class="date" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Date of Sign\')" maxlength="10"> </div>';
	const validateOutput = () => {
		let countDiv = $('#dependent-block').children().length;
		if ( countDiv < amount ) {
			let difference = amount - countDiv;
			for (i = 0; i < difference; i++) {
				dependentBlock.insertAdjacentHTML('beforeend',codeBlock);
				dependentSignatureBlock.insertAdjacentHTML('beforeend',codeSignatureBlock);
				dependentSignatureBlock2.insertAdjacentHTML('beforeend',codeSignatureBlock2);
			}
		} else if ( countDiv > amount ) {
			let difference = countDiv - amount;
			for (i = 0; i < difference; i++) {
				dependentBlock.removeChild(dependentBlock.lastChild);
				dependentSignatureBlock.removeChild(dependentSignatureBlock.lastChild);
				dependentSignatureBlock2.removeChild(dependentSignatureBlock2.lastChild);	
			}
		} else if ( countDiv === amount && amount.length < 1 ) {
			dependentBlock.insertAdjacentHTML('beforeend',codeBlock);
		} else {
			return;
		}
	}
	if ( amount.length < 1 ) {
		validateOutput();
	} else if ( amount.length > 0 && amount <= 10 ) {
		colorize();
		validateOutput();
	} else {
	}
}
const dependentsDigress = () => {
	$('div#num-of-dependents-block').children().remove();
	$('div#dependent-block').children().remove();
}
const dependentRemoveSignatures = () => {
	$('div#dependent-signature-block').children().remove();
	$('div#dependent-signature-block-2').children().remove();
}
const colorize = () => {
	const inputBox = $('input#num-of-dependents');
	const amount = inputBox.val();
	if ( amount <= 10 ) {
		inputBox.removeClass('invalid');
	} else if ( amount > 10 ) {
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
	let codeBlock = '<div class="codeBlock"> <p class="header">I certify that:</p><p class="bullet">• All answers provided in this application were completed by or provided by the applicant.</p><p class="bullet">• I have reviewed this enrollment form to ensure that all required items have been completed.</p><p class="bullet">• I am not aware of any information not disclosed on this enrollment form relating to the health, habits or reputation of any person listed on this enrollment form, which might have a bearing on the risk.</p><p class="header">Agent / Broker Information</p><input type="text" placeholder="Full Name" required id="agent-name" name="agent-name" minlength="1" maxlength="128"/> <input type="text" placeholder="ID# / Code" required id="agent-ID" class="agent-ID" name="agent-ID" onfocus="(this.placeholder=\'000000\')" onblur="(this.placeholder=\'ID# / Code\')" minlength="1" maxlength="6"/> <input type="text" placeholder="Agency" required id="agent-agency" name="agent-agency" minlength="1" maxlength="256"/> <br><input type="text" placeholder="Home Phone" required id="agent-phone" name="agent-phone" class="phone" minlength="10" maxlength="14"/> <input type="email" placeholder="Email" required id="agent-email" name="agent-email" minlength="1" maxlength="256" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"> <input type="text" placeholder="Producer Signature" required id="producer-signature" name="producer-signature" minlength="2" maxlength="128"/> <input type="text" placeholder="Date of Sign" required id="producer-signature-date" name="producer-signature-date" class="date" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Date of Sign\')" maxlength="10"/> <div class="agree"> <label><input type="checkbox" value="check" required id="producer-signature-valid" name="producer-signature-valid">I agree that the typed names above shall be treated as valid signatures for all purposes of this form.</label> </div></div>';
	document.getElementById('agent-block').innerHTML = codeBlock;
}
const removeAgent = () => {
	$('div#agent-block').children().remove();
}

//download form function
const addPDF = () => {
	$('div#legal-block').children().remove();
	let codeBlock = '<div class="codeBlock"> <p class="header">Please upload your Legally Authorized Representative Documents.</p><input type="file" name="files" id="files" multiple="multiple" accept="image/jpeg,image/gif,image/png,application/pdf,image/tiff,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" data-val="true" data-val-allowedfileextensions="Allowed file extensions: pdf, jpg, jpeg, gif, tiff, png, txt, doc, docx"/> </div>';
	document.getElementById('legal-block').innerHTML = codeBlock;
}
const removePDF = () => {
	$('div#legal-block').children().remove();
}


























