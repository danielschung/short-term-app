//jquery rules
$(document).ready(function(){
	$('div.wrapper').hide();
	$('div.wrapper').fadeIn(1000);

});

const automask = () => {
	//automask functions src=http://igorescobar.github.io/jQuery-Mask-Plugin/
	$('input.phone').mask('(000) 000-0000');
	$('input.SSN').mask('000-00-0000');
	$('input.zip').mask('00000');
	$('input.age').mask('000');
	$('input.height').mask('0\' 00\"');
	$('input.weight').mask('0000');
	$('input.num').mask('00');
	$('input.agent-ID').mask('00000000000000000000');
	$('input.date').mask('00/00/0000');
}

//calculate age
const lastElement = () => {
	const last = event.target;
	return last;
}
const calculateAge = () => {
	let input = lastElement();
	let split = input.value.split('/');
	let reformat = new Date(split[2], split[0] - 1, split[1]);
	let today = new Date();
	let calculate = parseInt((today - reformat)/(1000 * 60 * 60 * 24));
	let age = Math.floor(calculate/365);
	//autofill age
	let container = $(event.target).parent();
	let ageBox = container.find('input.age');
	let setValue = ageBox.val(age);
}

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
const nextExpand = () => {
	$(event.target).parent().next().slideToggle();
	$(event.target).toggleClass('closed');
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
	let codeBlock = `<div class="codeBlock"> <p class="header">Spouse Personal Information</p><input type="text" placeholder="First Name" required id="spouse-first-name" name="Request.Spouse.FirstName" minlength="1" maxlength="128"/> <input type="text" placeholder="MI" class="optional" id="spouse-MI" name="Request.Spouse.MiddleName" maxlength="1"/> <input type="text" placeholder="Last Name" required id="spouse-last-name" name="Request.Spouse.LastName"minlength="1" maxlength="128"/> <p class="tag">* If you do not have a SSN, please submit all zeros.</p><input type="text" placeholder="SSN" required id="spouse-SSN" name="Request.Spouse.Ssn" class="SSN" onfocus="(this.placeholder='000-00-0000')" onblur="(this.placeholder='SSN')" onkeyup="automask();" minlength="9" maxlength="9"/> <input type="text" placeholder="Birthday" required id="spouse-birthday" name="Request.Spouse.Birthdate" class="date" onfocus="(this.placeholder='MM/DD/YYYY')" onblur="(this.placeholder='Birthday');calculateAge();" onkeyup="automask();" onclick="lastElement();" minlength="8" maxlength="10"/> <select required id="spouse-gender" value="" class="purple-format" name="Request.Spouse.Sex"> <option value="" disabled selected class="placeholder">Gender</option> <option value="male">Male</option> <option value="female">Female</option> </select> <p class="header">Health Information</p><input type="hidden" placeholder="Age" required id="spouse-age" name="Request.Spouse.Age" class="age" onkeyup="automask();" minlength="1" maxlength="3"/> <input type="text" placeholder="Height" required id="spouse-height" name="Request.Spouse.Height" class="height" onfocus="(this.placeholder='0&lsquo; 00&ldquo;')" onblur="(this.placeholder='Height')" onkeyup="automask();" minlength="1" maxlength="6"/> <input type="text" placeholder="Weight" required id="spouse-weight" name="Request.Spouse.Weight" class="weight" onkeyup="automask();" minlength="1" maxlength="4"/> <p class="tag">* If you plan on enrolling in a POS Plan, please include your Primary Care Physician details.</p><input type="text" placeholder="Primary Care Physician (First Name)" id="spouse-pcp-first-name" name="Request.Spouse.PcpFirstName" class="optional" minlength="1" maxlength="128"/> <input type="text" placeholder="Primary Care Physician (Last Name)" class="optional" id="spouse-pcp-last-name" name="Request.Spouse.PcpLastName" minlength="1" maxlength="128"/> <div class="question"> <p>Are you an established patient?</p><select required id="spouse-question-1" value="" class="purple-format question" name="Request.Spouse.IsEstablishedPatient"> <option value="" disabled selected class="placeholder">Choose</option> <option value="true">Yes</option> <option value="false">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Have you been declined for insurance due to health reasons within the past 18 months?</p><select required id="spouse-question-2" value="" class="purple-format question" name="Request.Spouse.HasBeenDeclined"> <option value="" disabled selected class="placeholder">Choose</option> <option value="true">Yes</option> <option value="false">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Do you have hospital, major medical, group health, government or medical insurance coverage that will overlap during the duration of this coverage?</p><select required id="spouse-question-3" value="" class="purple-format question" name="Request.Spouse.HasInsuranceOverlap"> <option value="" disabled selected class="placeholder">Choose</option> <option value="true">Yes</option> <option value="false">No</option> </select> <div class="clear"></div></div><div class="question"> <p>If you are female, are you now pregnant, or if you are male, are you an expectant parent?</p><select required id="spouse-question-4" value="" class="purple-format question" name="Request.Spouse.IsExpectantParent"> <option value="" disabled selected class="placeholder">Choose</option> <option value="true">Yes</option> <option value="false">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Do you weigh more than 300 pounds if male or more than 250 pounds if female?</p><select required id="spouse-question-5" value="" class="purple-format question" name="Request.Spouse.IsOverweight"> <option value="" disabled selected class="placeholder">Choose</option> <option value="true">Yes</option> <option value="false">No</option> </select> <div class="clear"></div></div><div class="question"> <p>In the past five years, have you taken medication for or been advised, consulted, tested, diagnosed, treated or hospitalized or recommended for treatment by a physician for any of the following: heart or circulatory system disorder, including heart attack or stroke; insulin-dependent diabetes; cancer or tumors; disorder of the blood, including hemophilia or leukemia; kidney or liver disorder; mental or nervous conditions or disorders; alcoholism or alcohol abuse; drug abuse, addiction or dependency; organ transplant; emphysema; Crohn’s disease, ulcerative colitis or hepatitis?</p><select required id="spouse-question-6" value="" class="purple-format question" name="Request.Spouse.HasSeriousHealthCondition"> <option value="" disabled selected class="placeholder">Choose</option> <option value="true">Yes</option> <option value="false">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Have you ever been diagnosed or treated by a physician for acquired immune deficiency syndrome (AIDS) or AIDS-related complex (ARC), or have you in the past five years tested positive for HIV virus or other immune disorders?</p><select required id="spouse-question-7" value="" class="purple-format question" name="Request.Spouse.HasImmuneDisorder"> <option value="" disabled selected class="placeholder">Choose</option> <option value="true">Yes</option> <option value="false">No</option> </select> <div class="clear"></div></div></div>`;
	document.getElementById('spouse-block').innerHTML = codeBlock;
}
const addSpouseSignature = () => {
	let codeBlock = `<div class="codeBlock"> <input type="text" placeholder="Signature of Spouse or Civil Union (ONLY if to be insured)" required id="spouse-agreement-signature" name="Request.Spouse.AgreementSignature" minlength="1" maxlength="128"> <input type="text" placeholder="Date of Sign" required id="spouse-agreement-signature-date" name="Request.Spouse.AgreementSignatureDate" class="date" onfocus="(this.placeholder='MM/DD/YYYY')" onblur="(this.placeholder='Date of Sign')" onkeyup="automask();" minlength="8" maxlength="10"/> </div>`;
	document.getElementById('spouse-signature-block').innerHTML = codeBlock;
	let codeBlock2 = ` <div class="codeBlock2"> <input type="text" placeholder="Signature of Spouse or Civil Union" required id="spouse-authorization-signature" name="Request.Spouse.AuthorizationSignature" minlength="1" maxlength="128"> <input type="text" placeholder="Date of Sign" required id="spouse-authorization-signature-date" name="Request.Spouse.AuthorizationSignatureDate" class="date" onfocus="(this.placeholder='MM/DD/YYYY')" onblur="(this.placeholder='Date of Sign')" onkeyup="automask();" minlength="8" maxlength="10"> </div>`;
	document.getElementById('spouse-signature-block-2').innerHTML = codeBlock2;
}
const removeSpouse = () => {
	$('div#spouse-block').children().remove();
	$('div#spouse-signature-block').children().remove();
	$('div#spouse-signature-block-2').children().remove();
}

// notice for 6 month option
const dropNotice = () => {
	const sixMonth = $('select#benefit-period-length').val();
	const notice = $()
	if ( sixMonth === '6-months' ) {
		$('p#six-month-notice').show();
	} else {
		$('p#six-month-notice').hide();
	}
}

// add either single or family table
// const tableAdd = () => {
// 	const spouse = document.getElementsByName('add-spouse')[1];
// 	const dependents = document.getElementsByName('add-dependent')[1];
// 	const coverageTable = document.getElementById('coverage-table');
// 	const singleNote = $('p.note.single');
// 	const familyNote = $('p.note.family');
// 	const disclaimer = $('p.note.disclaimer');
// 	let singleTable = `<table class="coverage-table single"> <tbody> <tr> <th></th> <th colspan="2">Deductible</th> <th colspan="2">OOP-Max</th> </tr><tr class="selectable"> <td class="ppoPlan">PPO 1000</td><td class="posPlan">POS 1000</td><td colspan="2">In-Network: $1,000<br>Out-of-Network: $2,000</td><td colspan="2">In-Network: $2,000<br>Out-of-Network: $4,000</td></tr><tr class="selectable"> <td class="ppoPlan">PPO 2000</td><td class="posPlan">POS 2000</td><td colspan="2">In-Network: $2,000<br>Out-of-Network: $4,000</td><td colspan="2">In-Network: $4,000<br>Out-of-Network: $8,000</td></tr><tr class="selectable"> <td class="ppoPlan">PPO 5000</td><td class="posPlan">POS 5000</td><td colspan="2">In-Network: $5,000<br>Out-of-Network: $10,000</td><td colspan="2">In-Network: $10,000<br>Out-of-Network: $20,000</td></tr><tr class="selectable"> <td colspan="2">In-Network: $7,500<br>Out-of-Network: $15,000</td><td colspan="2">In-Network: $15,000<br>Out-of-Network: $30,000</td></tr></tbody> </table>`;
// 	let familyTable = `<table class="coverage-table family"> <tbody> <tr> <th></th> <th colspan="2">Deductible</th> <th colspan="2">OOP-Max</th> </tr><tr class="selectable"> <td class="ppoPlan">PPO 1000</td><td class="posPlan">POS 1000</td><td colspan="2">In-Network: $2,000<br>Out-of-Network: $4,000</td><td colspan="2">In-Network: $4,000<br>Out-of-Network: $8,000</td></tr><tr class="selectable"> <td class="ppoPlan">PPO 2000</td><td class="posPlan">POS 2000</td><td colspan="2">In-Network: $4,000<br>Out-of-Network: $8,000</td><td colspan="2">In-Network: $8,000<br>Out-of-Network: $16,000</td></tr><tr class="selectable"> <td class="ppoPlan">PPO 5000</td><td class="posPlan">POS 5000</td><td colspan="2">In-Network: $10,000<br>Out-of-Network: $20,000</td><td colspan="2">In-Network: $20,000<br>Out-of-Network:s $40,000</td></tr><tr class="selectable"> <td class="ppoPlan">PPO 5000</td><td class="posPlan">POS 5000</td><td colspan="2">In-Network: $15,000<br>Out-of-Network: $30,000</td><td colspan="2">In-Network: $30,000<br>Out-of-Network: $60,000</td></tr></tbody> </table>`;
// 	while (coverageTable.firstChild) {
// 		coverageTable.removeChild(coverageTable.firstChild);
// 	}
// 	if ( spouse.checked && dependents.checked ) {
// 		coverageTable.innerHTML = singleTable;
// 		disclaimer.hide();
// 		familyNote.hide();
// 		singleNote.show();
// 	} else {
// 		coverageTable.innerHTML = familyTable;
// 		disclaimer.hide();
// 		singleNote.hide();
// 		familyNote.show();
// 	}
// }

//dependents form progress
const dependentsProgress = () => {
	let codeBlock = '<div class="codeBlock"> <div class="radio number-input"> <p>How many?</p><div class="right"> <input type="text" name="num-of-dependents" id="num-of-dependents" required class="num" onfocus="(this.placeholder=\'10 max\')" onblur="(this.placeholder=\'\')" onkeyup="colorize();" minlength="1" maxlength="2" max="10"> <button type="button" class="update" onclick="numOfDependents();">Update</button> </div></div></div>';
	document.getElementById('num-of-dependents-block').innerHTML = codeBlock;
}
const numOfDependents = () => {
	const inputBox = $('input#num-of-dependents');
	const amount = inputBox.val();
	const amountArray = [];
	const countDiv = $('#dependent-block').children().length;
	const dependentBlock = document.getElementById('dependent-block');
	const dependentSignatureBlock = document.getElementById('dependent-signature-block');
	const dependentSignatureBlock2 = document.getElementById('dependent-signature-block-2');
	const matchBox = () => {
		$('div#dependent-block').children().remove();
		$('div#dependent-signature-block').children().remove();
		$('div#dependent-signature-block-2').children().remove();
		for (let i = 0; i < amount; i++) {
			amountArray.push(i);
			const depNum = (`[${amountArray[i]}]`);
			const depNumUI = (`${amountArray[i]+1} `);
			const depID = (`${amountArray[i]}`);
			let codeBlock = `<div class="codeBlock"> <p class="header">Dependent ${depNumUI}Personal Information</p><input type="text" placeholder="First Name" required id="dependent${depID}-first-name" class="dependent-names" name="Request.Dependents${depNum}.FirstName" minlength="1" maxlength="128"> <input type="text" placeholder="MI" class=" optional dependent-MI" id="dependent${depID}-MI" name="Request.Dependents${depNum}.MiddleName" maxlength="1"> <input type="text" placeholder="Last Name" required id="dependent${depID}-last-name" class="dependent-names" name="Request.Dependents${depNum}.LastName" minlength="1" maxlength="128"> <p class="tag">* If you do not have a SSN, please submit all zeros.</p><input type="text" placeholder="SSN" required id="dependent${depID}-SSN" class="SSN dependent-SSN" name="Request.Dependents${depNum}.Ssn" onkeyup="automask();" minlength="9" maxlength="9"> <input type="text" placeholder="Birthday" required id="dependent${depID}-birthday" class="date dependent-birthday" name="Request.Dependents${depNum}.Birthdate" onfocus="(this.placeholder='MM/DD/YYYY')" onblur="(this.placeholder='Birthday');calcDependent();" onkeyup="automask();" onclick="lastElement();" minlength="8" maxlength="10"> <select required id="dependent${depID}-gender" value="" class="purple-format dependent-gender" name="Request.Dependents${depNum}.Sex"> <option value="" disabled selected class="placeholder">Gender</option> <option value="male">Male</option> <option value="female">Female</option> </select> <p class="header">Health Information</p><input type="hidden" placeholder="Age" required id="dependent${depID}-age" class="age dependent-age" name="Request.Dependents${depNum}.Age" onkeyup="automask();" minlength="1" maxlength="3"> <input type="text" placeholder="Height" required id="dependent${depID}-height" class="height dependent-height" name="Request.Dependents${depNum}.Height" onfocus="(this.placeholder='0&lsquo; 00&ldquo;')" onblur="(this.placeholder='Height')" onkeyup="automask();" minlength="1" maxlength="6"> <input type="text" placeholder="Weight" required id="dependent${depID}-weight" class="weight dependent-weight" name="Request.Dependents${depNum}.Weight" onkeyup="automask();" minlength="1" maxlength="4"> <p class="tag">* If you plan on enrolling in a POS Plan, please include your Primary Care Physician details.</p><input type="text" placeholder="Primary Care Physician (First Name)" id="dependent${depID}-pcp-first-name" class="dependent-pcp-first-name optional" name="Request.Dependents${depNum}.PcpFirstName" minlength="1" maxlength="128"> <input type="text" placeholder="Primary Care Physician (Last Name)" id="dependent${depID}-pcp-last-name" class="dependent-pcp-last-name optional" name="Request.Dependents${depNum}.PcpLastName" minlength="1" maxlength="128"> <div class="question"> <p>Are you an established patient?</p><select required id="dependent${depID}-question-1" value="" class="purple-format question" name="Request.Dependents${depNum}.IsEstablishedPatient"> <option value="" disabled selected class="placeholder">Choose</option> <option value="true">Yes</option> <option value="false">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Have you been declined for insurance due to health reasons within the past 18 months?</p><select required id="dependent${depID}-question-2" value="" class="purple-format question" name="Request.Dependents${depNum}.HasBeenDeclined"> <option value="" disabled selected class="placeholder">Choose</option> <option value="true">Yes</option> <option value="false">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Do you have hospital, major medical, group health, government or medical insurance coverage that will overlap during the duration of this coverage?</p><select required id="dependent${depID}-question-3" value="" class="purple-format question" name="Request.Dependents${depNum}.HasInsuranceOverlap"> <option value="" disabled selected class="placeholder">Choose</option> <option value="true">Yes</option> <option value="false">No</option> </select> <div class="clear"></div></div><div class="question"> <p>If you are female, are you now pregnant, or if you are male, are you an expectant parent?</p><select required id="dependent${depID}-question-4" value="" class="purple-format question" name="Request.Dependents${depNum}.IsExpectantParent"> <option value="" disabled selected class="placeholder">Choose</option> <option value="true">Yes</option> <option value="false">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Do you weigh more than 300 pounds if male or more than 250 pounds if female?</p><select required id="dependent${depID}-question-5" value="" class="purple-format question" name="Request.Dependents${depNum}.IsOverweight"> <option value="" disabled selected class="placeholder">Choose</option> <option value="true">Yes</option> <option value="false">No</option> </select> <div class="clear"></div></div><div class="question"> <p>In the past five years, have you taken medication for or been advised, consulted, tested, diagnosed, treated or hospitalized or recommended for treatment by a physician for any of the following: heart or circulatory system disorder, including heart attack or stroke; insulin-dependent diabetes; cancer or tumors; disorder of the blood, including hemophilia or leukemia; kidney or liver disorder; mental or nervous conditions or disorders; alcoholism or alcohol abuse; drug abuse, addiction or dependency; organ transplant; emphysema; Crohn’s disease, ulcerative colitis or hepatitis?</p><select required id="dependent${depID}-question-6" value="" class="purple-format question" name="Request.Dependents${depNum}.HasSeriousHealthCondition"> <option value="" disabled selected class="placeholder">Choose</option> <option value="true">Yes</option> <option value="false">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Have you ever been diagnosed or treated by a physician for acquired immune deficiency syndrome (AIDS) or AIDS-related complex (ARC), or have you in the past five years tested positive for HIV virus or other immune disorders?</p><select required id="dependent${depID}-question-7" value="" class="purple-format question" name="Request.Dependents${depNum}.HasImmuneDisorder"> <option value="" disabled selected class="placeholder">Choose</option> <option value="true">Yes</option> <option value="false">No</option> </select> <div class="clear"></div></div></div>`;
			let codeSignatureBlock = `<div class="codeBlock"> <input type="text" placeholder="Signature of Dependent ${depNumUI}(ONLY if to be insured and 18 or older)" id="dependent${depID}-signature" class="signature dependent-signature" name="Request.Dependents${depNum}.AgreementSignature" minlength="1" maxlength="128" required/> <input type="text" placeholder="Date of Sign" id="dependent${depID}-signature-date" name="Request.Dependents${depNum}.AgreementSignatureDate" class="date dependent-signature-date" onfocus="(this.placeholder='MM/DD/YYYY')" onblur="(this.placeholder='Date of Sign')" onkeyup="automask();" minlength="8" maxlength="10" required/> </div>`;
			let codeSignatureBlock2 = `<div class="codeBlock2"> <input type="text" placeholder="Signature of Dependent ${depNumUI}(ONLY if to be insured and 18 or older)" required id="dependent${depID}-authorization-signature" class="signature dependent-signature" name="Request.Dependents${depNum}.AuthorizationSignature" minlength="1" maxlength="128"> <input type="text" placeholder="Date of Sign" required id="dependent${depID}-authorization-signature-date" name="Request.Dependents${depNum}.AuthorizationSignatureDate" class="date dependent-signature-date" onfocus="(this.placeholder='MM/DD/YYYY')" onblur="(this.placeholder='Date of Sign')" onkeyup="automask();" minlength="8" maxlength="10"> </div>`;
			dependentBlock.insertAdjacentHTML('beforeend',codeBlock);
			dependentSignatureBlock.insertAdjacentHTML('beforeend',codeSignatureBlock);
			dependentSignatureBlock2.insertAdjacentHTML('beforeend',codeSignatureBlock2);
		}
	}
	if ( amount.length < 1 ) {
		matchBox();
	} else if ( amount.length > 0 && amount <= 10 ) {
		colorize();
		matchBox();
	}
}
//for dependent: if dependent is over 18 make signature optional
const checkAgeSignature = () => {
	let dependentBlocks = $('#dependent-block').find('input[type=hidden]').toArray();
	let signatures = $('#dependent-signature-block').children();
	let signatures2 = $('#dependent-signature-block-2').children();
	let signatureArray = signatures.toArray();
	let signature2Array = signatures2.toArray();
	for (let i = 0; i < dependentBlocks.length; i++) {
		console.log(dependentBlocks[i].value);
		if ( dependentBlocks[i].value < 18 ) {
			$(signatureArray[i]).children('input').addClass('optional');
			$(signatureArray[i]).children('input').removeClass('invalid');
			$(signatureArray[i]).children('input').prop('required',false);
			$(signature2Array[i]).children('input').addClass('optional');
			$(signature2Array[i]).children('input').removeClass('invalid');
			$(signature2Array[i]).children('input').prop('required',false);
		} else {
			$(signatureArray[i]).children('input').removeClass('optional');
			$(signatureArray[i]).children('input').prop('required',true);
			$(signature2Array[i]).children('input').removeClass('optional');
			$(signature2Array[i]).children('input').prop('required',true);
		}
		let blankInput = document.getElementById('dependent-signature-block').firstElementChild.firstElementChild;
	}
}
const calcDependent = () => {
	calculateAge();
	checkAgeSignature();
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
	} else if ( amount > 10 || amount === '0') {
		inputBox.addClass('invalid');
	}
}

//accordian expand and bg color
const expandAccordian = () => {
	//declare constant variables
	const findButton = $(event.target).parent().next().find( $('button.next') );
	const container = findButton.parent().parent();
	const inputs = container.find('input:required, select:required').toArray();
	//validate checkboxes and text inputs (else)
	const validateCheckBoxes = () => {
		let boxArray = container.find( $('input[value="check"]') ).toArray();
		if ( boxArray.length == 0 ) {
			console.log('valid');
		} else {
			for (let i = 0; i < boxArray.length; i++) {
				let boxIds = boxArray[i].id;
				if ( boxArray[i].checked ) {
					$(`#${boxIds}`).removeClass('invalid');
				}
			}
		}		
	}
	for (let i = 0; i < inputs.length; i++) {
		let ids = inputs[i].id;
		let names = inputs[i].name;
		let values = inputs[i].value;
		if ( inputs[i].type == 'radio' ) {
			if ( values == '' ) {
				$(`#${names}`).addClass('invalid');
			} else {
				$(`#${names}`).removeClass('invalid');
			}
		} else {
			if ( values == '' || values == 'check' ) {
				$(`#${ids}`).addClass('invalid');
				validateCheckBoxes();
			} else {
				$(`#${ids}`).removeClass('invalid');
			}
		}
	}
	//validate ssn
	const validateSSN = () => {
		let thisBox = container.find('input.SSN');
		let boxArray = thisBox.toArray();
		const runLoop = () => {
			for (let i = 0; i < boxArray.length; i++) {
				let ids = boxArray[i].id;
				let values = boxArray[i].value;
				if ( values.length == 11 ) {
					$(`#${ids}`).removeClass('invalid');
					return true;
				} else {
					$(`#${ids}`).addClass('invalid');
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
			for (let i = 0; i < boxArray.length; i++) {
				let ids = boxArray[i].id;
				let values = boxArray[i].value;
				let month = values.slice(0,2);
				let day = values.slice(3,5);
				let year = values.slice(6,10);
				parseInt(month);
				parseInt(day);
				parseInt(year);
				if ( month <= 12 && day <= 31 && year <= 3000 && month > 0 && day > 0 && year > 0 && values.length == 10 ) {
					$(`#${ids}`).removeClass('invalid');
					$(`#${ids}`).addClass('passed');
				} else {
					$(`#${ids}`).addClass('invalid');
					$(`#${ids}`).removeClass('passed');
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
			for (let i = 0; i < boxArray.length; i++) {
				let ids = boxArray[i].id;
				let values = boxArray[i].value;
				if ( values.length > 13 ) {
					$(`#${ids}`).removeClass('invalid');
					return true;
				} else {
					$(`#${ids}`).addClass('invalid');
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
		for (let i = 0; i < emailArray.length; i++) {
			let valid = emailArray[i].checkValidity();
			let ids = emailArray[i].id;
			if ( valid ) {
				$(`input#${ids}`).removeClass('invalid');
			} else {
				$(`input#${ids}`).addClass('invalid');
			}
		}
	}
	//validate height
	const validateHeight = () => {
		const heightInput = container.find('input.height');
		let heightArray = heightInput.toArray();
		for (let i = 0; i < heightArray.length; i++) {
			let ids = heightArray[i].id;
			let height = heightArray[i].value;
			let feet = height.slice(0,1);
			let inches = height.slice(3,5);
			parseInt(feet);
			parseInt(inches);
			if ( inches > 11 || height.length == 0 ) {
				$(`#${ids}`).addClass('invalid');
			} else {
				$(`#${ids}`).removeClass('invalid');
			}	
		}
	}
	validateHeight();
	//validate radio buttons
	const validateRadio = () => {
		let spouseArray = container.find('input[type=radio][name=add-spouse]').toArray();
		let dependentArray = container.find('input[type=radio][name=add-spouse]').toArray();
		let representativeArray = container.find('input[type=radio][name="Request.Applicant.IsLegallyAuthorized"]').toArray();
		let agentArray = container.find('input[type=radio][name=add-agent]').toArray();
		const checkSpouse = () => {
			let spouseYes = container.find('input[type=radio][name=add-spouse][value=yes]');
			let spouseNo = container.find('input[type=radio][name=add-spouse][value=no]');
			if ( spouseYes.is(':checked') || spouseNo.is(':checked') ) {
				$('input[name=add-spouse]').removeClass('invalid');
				return true;
			} else if ( !spouseYes.is('checked') && !spouseNo.is('checked') ) {
				$('input[name=add-spouse]').addClass('invalid');
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
			let representativeYes = container.find('input[type=radio][name="Request.Applicant.IsLegallyAuthorized"][value=true]');
			let representativeNo = container.find('input[type=radio][name="Request.Applicant.IsLegallyAuthorized"][value=false]');
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
			let agentNo = container.find('input[type=radio][name=add-agent][value=no]');
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

	//validate dependent signatures
	const emptySignature = () => {
		let signature = $('#dependent-signature-block').children().find('input.dependent-signature').toArray();
		let date = $('#dependent-signature-block').children().find('input.dependent-signature-date').toArray();
		let signature2 = $('#dependent-signature-block-2').children().find('input.dependent-signature').toArray();
		let date2 = $('#dependent-signature-block-2').children().find('input.dependent-signature-date').toArray();
		let dependentBlocks = $('#dependent-block').find('input[type=hidden]').toArray();
		const dateOfToday = () => {
			let today = new Date();
			let dd = today.getDate();
			let mm = today.getMonth()+1;
			let yyyy = today.getFullYear();
			if ( dd < 10 ) {
				dd = '0'+dd;
			}
			if ( mm < 10 ) {
				mm = '0'+mm;
			}
			today = mm+'/'+dd+'/'+yyyy;
			return today;
		}
		for (let i = 0; i < signature.length; i++) {
			let value = signature[i].value;
			if ( value == '' && dependentBlocks[i].value < 18 ) {
				signature[i].value = 'signature not required due to less than 18 years old';
				date[i].value = dateOfToday();
				signature[i].style.color = '#E3E3E3';
				date[i].style.color = '#E3E3E3';
			} else if ( dependentBlocks[i].value >= 18 && value == 'signature not required due to less than 18 years old' ) {
				signature[i].value = '';
				date[i].value = '';
				signature[i].style.color = '#5844A7';
				date[i].style.color = '#5844A7';
				signature[i].classList.add('invalid');
				date[i].classList.add('invalid');
			}
			
		}
		for (let i = 0; i < signature2.length; i++) {
			let value = signature2[i].value;
			if ( value == '' && dependentBlocks[i].value < 18 ) {
				signature2[i].value = 'signature not required due to less than 18 years old';
				date2[i].value = dateOfToday();
				signature2[i].style.color = '#E3E3E3';
				date2[i].style.color = '#E3E3E3';
			} else if ( dependentBlocks[i].value >= 18 && value == 'signature not required due to less than 18 years old' ) {
				signature2[i].value = '';
				date2[i].value = '';
				signature2[i].style.color = '#5844A7';
				date2[i].style.color = '#5844A7';
				signature2[i].classList.add('invalid');
				date2[i].classList.add('invalid');
			}
			
		}
	}
	emptySignature();
	// final section check

	let empty = container.find('input.invalid, select.invalid').toArray();
	if ( empty.length == 0 ) {
		removeAlert();
		nextExpand();
	} else {
		alert();
	}
}


const validate = () => {
	//declare constant variables
	const container = $(event.target).parent().parent();
	const inputs = container.find('input:required, select:required').toArray();
	//validate checkboxes and text inputs (else)
	const validateCheckBoxes = () => {
		let boxArray = container.find( $('input[value="check"]') ).toArray();
		if ( boxArray.length == 0 ) {
			console.log('valid');
		} else {
			for (let i = 0; i < boxArray.length; i++) {
				let boxIds = boxArray[i].id;
				if ( boxArray[i].checked ) {
					$(`#${boxIds}`).removeClass('invalid');
				}
			}
		}		
	}
	for (let i = 0; i < inputs.length; i++) {
		let ids = inputs[i].id;
		let names = inputs[i].name;
		let values = inputs[i].value;
		if ( inputs[i].type == 'radio' ) {
			if ( values == '' ) {
				$(`#${names}`).addClass('invalid');
			} else {
				$(`#${names}`).removeClass('invalid');
			}
		} else {
			if ( values == '' || values == 'check' ) {
				$(`#${ids}`).addClass('invalid');
				validateCheckBoxes();
			} else {
				$(`#${ids}`).removeClass('invalid');
			}
		}
	}
	//validate ssn
	const validateSSN = () => {
		let thisBox = container.find('input.SSN');
		let boxArray = thisBox.toArray();
		const runLoop = () => {
			for (let i = 0; i < boxArray.length; i++) {
				let ids = boxArray[i].id;
				let values = boxArray[i].value;
				if ( values.length == 11 ) {
					$(`#${ids}`).removeClass('invalid');
					return true;
				} else {
					$(`#${ids}`).addClass('invalid');
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
			for (let i = 0; i < boxArray.length; i++) {
				let ids = boxArray[i].id;
				let values = boxArray[i].value;
				let month = values.slice(0,2);
				let day = values.slice(3,5);
				let year = values.slice(6,10);
				parseInt(month);
				parseInt(day);
				parseInt(year);
				if ( month <= 12 && day <= 31 && year <= 3000 && month > 0 && day > 0 && year > 0 && values.length == 10 ) {
					$(`#${ids}`).removeClass('invalid');
					$(`#${ids}`).addClass('passed');
				} else {
					$(`#${ids}`).addClass('invalid');
					$(`#${ids}`).removeClass('passed');
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
			for (let i = 0; i < boxArray.length; i++) {
				let ids = boxArray[i].id;
				let values = boxArray[i].value;
				if ( values.length > 13 ) {
					$(`#${ids}`).removeClass('invalid');
					return true;
				} else {
					$(`#${ids}`).addClass('invalid');
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
		for (let i = 0; i < emailArray.length; i++) {
			let valid = emailArray[i].checkValidity();
			let ids = emailArray[i].id;
			if ( valid ) {
				$(`input#${ids}`).removeClass('invalid');
			} else {
				$(`input#${ids}`).addClass('invalid');
			}
		}
	}
	//validate height
	const validateHeight = () => {
		const heightInput = container.find('input.height');
		let heightArray = heightInput.toArray();
		for (let i = 0; i < heightArray.length; i++) {
			let ids = heightArray[i].id;
			let height = heightArray[i].value;
			let feet = height.slice(0,1);
			let inches = height.slice(3,5);
			parseInt(feet);
			parseInt(inches);
			if ( inches > 11 || height.length == 0 ) {
				$(`#${ids}`).addClass('invalid');
			} else {
				$(`#${ids}`).removeClass('invalid');
			}	
		}
	}
	validateHeight();
	//validate radio buttons
	const validateRadio = () => {
		let spouseArray = container.find('input[type=radio][name=add-spouse]').toArray();
		let dependentArray = container.find('input[type=radio][name=add-spouse]').toArray();
		let representativeArray = container.find('input[type=radio][name="Request.Applicant.IsLegallyAuthorized"]').toArray();
		let agentArray = container.find('input[type=radio][name=add-agent]').toArray();
		const checkSpouse = () => {
			let spouseYes = container.find('input[type=radio][name=add-spouse][value=yes]');
			let spouseNo = container.find('input[type=radio][name=add-spouse][value=no]');
			if ( spouseYes.is(':checked') || spouseNo.is(':checked') ) {
				$('input[name=add-spouse]').removeClass('invalid');
				return true;
			} else if ( !spouseYes.is('checked') && !spouseNo.is('checked') ) {
				$('input[name=add-spouse]').addClass('invalid');
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
			let representativeYes = container.find('input[type=radio][name="Request.Applicant.IsLegallyAuthorized"][value=true]');
			let representativeNo = container.find('input[type=radio][name="Request.Applicant.IsLegallyAuthorized"][value=false]');
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
			let agentNo = container.find('input[type=radio][name=add-agent][value=no]');
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

	//validate dependent signatures
	const emptySignature = () => {
		let signature = $('#dependent-signature-block').children().find('input.dependent-signature').toArray();
		let date = $('#dependent-signature-block').children().find('input.dependent-signature-date').toArray();
		let signature2 = $('#dependent-signature-block-2').children().find('input.dependent-signature').toArray();
		let date2 = $('#dependent-signature-block-2').children().find('input.dependent-signature-date').toArray();
		let dependentBlocks = $('#dependent-block').find('input[type=hidden]').toArray();
		const dateOfToday = () => {
			let today = new Date();
			let dd = today.getDate();
			let mm = today.getMonth()+1;
			let yyyy = today.getFullYear();
			if ( dd < 10 ) {
				dd = '0'+dd;
			}
			if ( mm < 10 ) {
				mm = '0'+mm;
			}
			today = mm+'/'+dd+'/'+yyyy;
			return today;
		}
		for (let i = 0; i < signature.length; i++) {
			let value = signature[i].value;
			if ( value == '' && dependentBlocks[i].value < 18 ) {
				signature[i].value = 'signature not required due to less than 18 years old';
				date[i].value = dateOfToday();
				signature[i].style.color = '#E3E3E3';
				date[i].style.color = '#E3E3E3';
			} else if ( dependentBlocks[i].value >= 18 && value == 'signature not required due to less than 18 years old' ) {
				signature[i].value = '';
				date[i].value = '';
				signature[i].style.color = '#5844A7';
				date[i].style.color = '#5844A7';
				signature[i].classList.add('invalid');
				date[i].classList.add('invalid');
			}
			
		}
		for (let i = 0; i < signature2.length; i++) {
			let value = signature2[i].value;
			if ( value == '' && dependentBlocks[i].value < 18 ) {
				signature2[i].value = 'signature not required due to less than 18 years old';
				date2[i].value = dateOfToday();
				signature2[i].style.color = '#E3E3E3';
				date2[i].style.color = '#E3E3E3';
			} else if ( dependentBlocks[i].value >= 18 && value == 'signature not required due to less than 18 years old' ) {
				signature2[i].value = '';
				date2[i].value = '';
				signature2[i].style.color = '#5844A7';
				date2[i].style.color = '#5844A7';
				signature2[i].classList.add('invalid');
				date2[i].classList.add('invalid');
			}
			
		}
	}
	emptySignature();
	// final section check

	let empty = container.find('input.invalid, select.invalid').toArray();
	if ( empty.length == 0 ) {
		removeAlert();
		next();
	} else {
		alert();
	}
}

//choose plan table
let coverageTableType = '';
const storeTableData = () => {
	const spouse = document.getElementsByName('add-spouse')[1];
	const dependents = document.getElementsByName('add-dependent')[1];
	let tableType = '';
	if ( spouse.checked && dependents.checked ) {
		coverageTableType = 'single';
	} else {
		coverageTableType = 'family';
	}
}
const tableAdd = () => {
	const coverageTable = document.getElementById('coverage-table');
	const singleNote = $('p.note.single');
	const familyNote = $('p.note.family');
	const disclaimer = $('p.note.disclaimer');
	let singleTable = `<table class="coverage-table single"> <tbody> <tr> <th></th> <th colspan="2">Deductible</th> <th colspan="2">OOP-Max</th> </tr><tr class="selectable"> <td class="ppoPlan">PPO 1000</td><td class="posPlan">POS 1000</td><td colspan="2">In-Network: $1,000<br>Out-of-Network: $2,000</td><td colspan="2">In-Network: $2,000<br>Out-of-Network: $4,000</td></tr><tr class="selectable"> <td class="ppoPlan">PPO 2000</td><td class="posPlan">POS 2000</td><td colspan="2">In-Network: $2,000<br>Out-of-Network: $4,000</td><td colspan="2">In-Network: $4,000<br>Out-of-Network: $8,000</td></tr><tr class="selectable"> <td class="ppoPlan">PPO 5000</td><td class="posPlan">POS 5000</td><td colspan="2">In-Network: $5,000<br>Out-of-Network: $10,000</td><td colspan="2">In-Network: $10,000<br>Out-of-Network: $20,000</td></tr><tr class="selectable"> <td class="ppoPlan">PPO 7500</td><td class="posPlan">POS 7500</td><td colspan="2">In-Network: $7,500<br>Out-of-Network: $15,000</td><td colspan="2">In-Network: $15,000<br>Out-of-Network: $30,000</td></tr></tbody> </table>`;
	let familyTable = `<table class="coverage-table family"> <tbody> <tr> <th></th> <th colspan="2">Deductible</th> <th colspan="2">OOP-Max</th> </tr><tr class="selectable"> <td class="ppoPlan">PPO 1000</td><td class="posPlan">POS 1000</td><td colspan="2">In-Network: $2,000<br>Out-of-Network: $4,000</td><td colspan="2">In-Network: $4,000<br>Out-of-Network: $8,000</td></tr><tr class="selectable"> <td class="ppoPlan">PPO 2000</td><td class="posPlan">POS 2000</td><td colspan="2">In-Network: $4,000<br>Out-of-Network: $8,000</td><td colspan="2">In-Network: $8,000<br>Out-of-Network: $16,000</td></tr><tr class="selectable"> <td class="ppoPlan">PPO 5000</td><td class="posPlan">POS 5000</td><td colspan="2">In-Network: $10,000<br>Out-of-Network: $20,000</td><td colspan="2">In-Network: $20,000<br>Out-of-Network:s $40,000</td></tr><tr class="selectable"> <td class="ppoPlan">PPO 7500</td><td class="posPlan">POS 7500</td><td colspan="2">In-Network: $15,000<br>Out-of-Network: $30,000</td><td colspan="2">In-Network: $30,000<br>Out-of-Network: $60,000</td></tr></tbody> </table>`;
	while (coverageTable.firstChild) {
		coverageTable.removeChild(coverageTable.firstChild);
	}
	if ( coverageTableType == 'single' ) {
		coverageTable.innerHTML = singleTable;
		disclaimer.hide();
		familyNote.hide();
		singleNote.show();
	} else if (coverageTableType == 'family') {
		coverageTable.innerHTML = familyTable;
		disclaimer.hide();
		singleNote.hide();
		familyNote.show();
	}

}
const planTypeTable = () => {
	const coveragePlanType = document.getElementById('coverage-plan-type');
	const coverageTableDropdown = document.getElementById('coverage-table-dropdown');
	const ppoPlan = $('td.ppoPlan');
	const posPlan = $('td.posPlan');
	let ppoSelect = `<select required id="coverage-table-select" value="" class="purple-format" onchange="tableSelect(); sendCoverage();"> <option value="" disabled selected class="placeholder">Choose a Plan</option> <option value="A">PPO Short Term 1000</option> <option value="B">PPO Short Term 2000</option> <option value="C">PPO Short Term 5000</option> <option value="D">PPO Short Term 7500</option> </select>`;
	let posSelect = `<select required id="coverage-table-select" value="" class="purple-format" onchange="tableSelect(); sendCoverage();"> <option value="" disabled selected class="placeholder">Choose a Plan</option> <option value="A">POS Short Term 1000</option> <option value="B">POS Short Term 2000</option> <option value="C">POS Short Term 5000</option> <option value="D">POS Short Term 7500</option> </select>`;
	if ( coveragePlanType.value == 'PPO' ) {
		coverageTableDropdown.innerHTML = ppoSelect;
		ppoPlan.show();
		posPlan.hide();
	} else if ( coveragePlanType.value == 'POS' ) {
		coverageTableDropdown.innerHTML = posSelect;
		posPlan.show();
		ppoPlan.hide();
	}
}

//table select
const tableSelect = () => {
	let tableChoice = document.getElementById('coverage-table-select').value;
	let tableRow = $('#coverage-table table tbody').children();
	if ( tableChoice === 'A' ) {
		tableRow.eq(1).addClass('selected');
		tableRow.eq(2).removeClass('selected');
		tableRow.eq(3).removeClass('selected');
		tableRow.eq(4).removeClass('selected');
	} else if ( tableChoice === 'B' ) {
		tableRow.eq(2).addClass('selected');
		tableRow.eq(1).removeClass('selected');
		tableRow.eq(3).removeClass('selected');
		tableRow.eq(4).removeClass('selected');
	} else if ( tableChoice === 'C' ) {
		tableRow.eq(3).addClass('selected');
		tableRow.eq(1).removeClass('selected');
		tableRow.eq(2).removeClass('selected');
		tableRow.eq(4).removeClass('selected');
	} else if ( tableChoice === 'D' ) {
		tableRow.eq(4).addClass('selected');
		tableRow.eq(1).removeClass('selected');
		tableRow.eq(2).removeClass('selected');
		tableRow.eq(3).removeClass('selected');
	}
}
const sendCoverage = () => {
	let planName = document.getElementById('plan-name');
	let tableChoice = document.getElementById('coverage-table-select').value;
	let planType = document.getElementById('coverage-plan-type').value;
	if ( tableChoice === 'A' ) {
		planName.value = `${planType} Short Term 1000`;
	} else if ( tableChoice === 'B' ) {
		planName.value = `${planType} Short Term 2000`;
	} else if ( tableChoice === 'C' ) {
		planName.value = `${planType} Short Term 5000`;
	} else if ( tableChoice === 'D' ) {
		planName.value = `${planType} Short Term 7500`;
	}
	console.log(planName.value);
}

//agent form progress function
const addAgent = () => {
	let codeBlock = `<div class="codeBlock"> <p class="header">I certify that:</p><p class="bullet">• All answers provided in this application were completed by or provided by the applicant.</p><p class="bullet">• I have reviewed this enrollment form to ensure that all required items have been completed.</p><p class="bullet">• I am not aware of any information not disclosed on this enrollment form relating to the health, habits or reputation of any person listed on this enrollment form, which might have a bearing on the risk.</p><p class="header">Agent / Broker Information</p><input type="text" placeholder="Full Name" required id="agent-name" name="Request.Agent.Name" minlength="1" maxlength="128"/> <input type="text" placeholder="ID# / Code" required id="agent-ID" class="agent-ID" name="Request.Agent.Code" onfocus="(this.placeholder='000000')" onblur="(this.placeholder='ID# / Code')" onkeyup="automask();" minlength="1" maxlength="20"/> <input type="text" placeholder="Agency" required id="agent-agency" name="Request.Agent.Agency" minlength="1" maxlength="256"/> <br><input type="text" placeholder="Home Phone" required id="agent-phone" name="Request.Agent.Phone" class="phone" onkeyup="automask();"> <input type="email" placeholder="Email" required id="agent-email" name="Request.Agent.Email" minlength="1" maxlength="256" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"> <input type="text" placeholder="Agent Signature" required id="producer-signature" name="Request.Agent.Signature" minlength="1" maxlength="128"/> <input type="text" placeholder="Date of Sign" required id="producer-signature-date" name="Request.Agent.SignatureDate" class="date" onfocus="(this.placeholder='MM/DD/YYYY')" onblur="(this.placeholder='Date of Sign')" onkeyup="automask();" minlength="8" maxlength="10"/> <div class="agree"> <label><input type="checkbox" value="check" required id="producer-signature-valid" name="producer-signature-valid">I agree that the typed names above shall be treated as valid signatures for all purposes of this form.</label> </div></div>`;
	document.getElementById('agent-block').innerHTML = codeBlock;
}
const removeAgent = () => {
	$('div#agent-block').children().remove();
}

//download form function
const addPDF = () => {
	$('div#legal-block').children().remove();
	let codeBlock = `<div class="codeBlock"> <input type="text" placeholder="As a Legally Authorized Representative, please indicate your relationship to the individual" id="applicant-relationship" required name="Request.Applicant.AuthorizationRelationship" minlength="1" maxlength="128"> <p class="header">Please upload your Legally Authorized Representative Documents.</p><input type="file" name="files" id="files" onchange="fileSize();" multiple="multiple" accept="image/jpeg,image/gif,image/png,application/pdf,image/tiff,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" data-val="true" data-val-allowedfileextensions="Allowed file extensions: pdf, jpg, jpeg, gif, tiff, png, txt, doc, docx"/> </div>`;
	document.getElementById('legal-block').innerHTML = codeBlock;
}
const removePDF = () => {
	$('div#legal-block').children().remove();
}
const fileSize = () => {
	let file = document.getElementById('files');
	let filejq = $('input#files');
	if ( file.files[0].size > 4 * 1024 * 1024 ) {
		filejq.addClass('invalid');
		$('p#too-large').show();
	} else {
		filejq.removeClass('invalid');
		$('p#too-large').hide();
	}
}

//submit function
$('#form').submit(function(e) {
    validate();
    const container = $(event.target).parent().parent();
    let finalValidation = container.find('input.invalid, select.invalid').toArray();
    if ( finalValidation.length === 0 ) {
        removeAlert();
        return true;
    } else {
        alert();
        console.log(finalValidation);
        e.preventDefault();
        return false;
    }
});