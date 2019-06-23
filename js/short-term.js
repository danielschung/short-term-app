"use strict";

//jquery rules
$(document).ready(function () {
  $('div.wrapper').hide();
  $('div.wrapper').fadeIn(1000); //accordian expand and bg color

  $('div.accordian').click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('closed');
  }); //automask functions src=http://igorescobar.github.io/jQuery-Mask-Plugin/

  $('input.phone').mask('(000) 000-0000');
  $('input.SSN').mask('000-00-0000');
  $('input.zip').mask('00000');
  $('input.age').mask('000');
  $('input.height').mask('0\' 00\"');
  $('input.weight').mask('0000');
  $('input.num').mask('00');
  $('input.agent-ID').mask('00000');
  $('input.date').mask('#0-00-00##');
}); //fields missing

var alert = function alert() {
  var codeBlock = '<div class="codeBlock"><p class="alert">You have missing fields. See below.</p></div>';
  document.getElementById('alert').innerHTML = codeBlock;
};

var removeAlert = function removeAlert() {
  $('div#alert').children().remove();
};

var next = function next() {
  $(event.target).parent().parent().slideToggle();
  $(event.target).parent().parent().prev().toggleClass('closed');
};

var validate = function validate() {
  //declare constant variables
  var container = $(event.target).parent().parent();
  var inputs = container.find('input:required, select:required').toArray(); //validate checkboxes

  var validateCheckBoxes = function validateCheckBoxes() {
    var boxArray = container.find($('input[value="check"]')).toArray();

    if (boxArray.length == 0) {
      console.log('valid');
    } else {
      for (var _i = 0; _i < boxArray.length; _i++) {
        var boxNames = boxArray[_i].name;

        if (boxArray[_i].checked) {
          $("#".concat(boxNames)).removeClass('invalid');
        }
      }
    }
  };

  for (var _i2 = 0; _i2 < inputs.length; _i2++) {
    var names = inputs[_i2].name;
    var values = inputs[_i2].value;

    if (values == '' || values == 'check') {
      $("#".concat(names)).addClass('invalid');
      validateCheckBoxes();
    } else {
      $("#".concat(names)).removeClass('invalid');
    }
  } //validate ssn


  var validateSSN = function validateSSN() {
    var thisBox = container.find('input.SSN');
    var boxArray = thisBox.toArray();

    var runLoop = function runLoop() {
      for (i = 0; i < boxArray.length; i++) {
        var _names = boxArray[i].name;
        var _values = boxArray[i].value;

        if (_values.length == 11) {
          $("#".concat(_names)).removeClass('invalid');
          return true;
        } else {
          $("#".concat(_names)).addClass('invalid');
          return false;
        }
      }
    };

    if (boxArray.length == 0) {
      return true;
    } else {
      runLoop();
    }
  };

  validateSSN(); //validate dates

  var validateDates = function validateDates() {
    var thisBox = container.find('input.date');
    var boxArray = thisBox.toArray();

    var runLoop = function runLoop() {
      for (i = 0; i < boxArray.length; i++) {
        var _names2 = boxArray[i].name;
        var _values2 = boxArray[i].value;

        if (_values2.length == 8 || _values2.length == 10) {
          $("#".concat(_names2)).removeClass('invalid');
          return true;
        } else {
          $("#".concat(_names2)).addClass('invalid');
          return false;
        }
      }
    };

    if (boxArray.length == 0) {
      return true;
    } else {
      runLoop();
    }
  };

  validateDates(); //validate phone numbers

  var validatePhone = function validatePhone() {
    var thisBox = container.find('input.phone');
    var boxArray = thisBox.toArray();

    var runLoop = function runLoop() {
      for (i = 0; i < boxArray.length; i++) {
        var _names3 = boxArray[i].name;
        var _values3 = boxArray[i].value;

        if (_values3.length > 14) {
          $("#".concat(_names3)).removeClass('invalid');
          return true;
        } else {
          $("#".concat(_names3)).addClass('invalid');
          return false;
        }
      }
    };

    if (boxArray.length == 0) {
      return true;
    } else {
      runLoop();
    }
  };

  validatePhone(); //validate emails

  var emailArray = container.find('input[type=email]').toArray();

  if (emailArray.length > 0) {
    for (i = 0; i < emailArray.length; i++) {
      var valid = emailArray[i].checkValidity();
      var name = emailArray[i].name;

      if (valid) {
        $("input#".concat(name)).removeClass('invalid');
      } else {
        $("input#".concat(name)).addClass('invalid');
      }
    }
  } //validate radio buttons


  var validateRadio = function validateRadio() {
    var spouseArray = container.find('input[type=radio][name=add-spouse]').toArray();
    var dependentArray = container.find('input[type=radio][name=add-spouse]').toArray();
    var representativeArray = container.find('input[type=radio][name=legal-representative]').toArray();
    var agentArray = container.find('input[type=radio][name=add-agent]').toArray();

    var checkSpouse = function checkSpouse() {
      var spouseYes = container.find('input[type=radio][name=add-spouse][value=yes]');
      var spouseNo = container.find('input[type=radio][name=add-spouse][value=no]');

      if (spouseYes.is(':checked') || spouseNo.is(':checked')) {
        $('input[name=add-spouse').removeClass('invalid');
        return true;
      } else if (!spouseYes.is('checked') && !spouseNo.is('checked')) {
        $('input[name=add-spouse').addClass('invalid');
        return false;
      }
    };

    if (spouseArray.length > 0) {
      checkSpouse();
    }

    var checkDependent = function checkDependent() {
      var dependentYes = container.find('input[type=radio][name=add-dependent][value=yes]');
      var dependentNo = container.find('input[type=radio][name=add-dependent][value=no]');

      if (dependentYes.is(':checked') || dependentNo.is(':checked')) {
        $('input[name=add-dependent').removeClass('invalid');
        return true;
      } else if (!dependentYes.is('checked') && !dependentNo.is('checked')) {
        $('input[name=add-dependent').addClass('invalid');
        return false;
      }
    };

    if (dependentArray.length > 0) {
      checkDependent();
    }

    var checkRepresentative = function checkRepresentative() {
      var representativeYes = container.find('input[type=radio][name=legal-representative][value=yes]');
      var representativeNo = container.find('input[type=radio][name=legal-representative][value=no]');

      if (representativeYes.is(':checked') || representativeNo.is(':checked')) {
        $('input[name=legal-representative').removeClass('invalid');
        return true;
      } else if (!representativeYes.is('checked') && !representativeNo.is('checked')) {
        $('input[name=legal-representative').addClass('invalid');
        return false;
      }
    };

    if (representativeArray.length > 0) {
      checkRepresentative();
    }

    var checkAgent = function checkAgent() {
      var agentYes = container.find('input[type=radio][name=add-agent][value=yes]');
      var agentNo = container.find('input[type=radio][name=add-agent][value=no]');

      if (agentYes.is(':checked') || agentNo.is(':checked')) {
        $('input[name=add-agent').removeClass('invalid');
        return true;
      } else if (!agentYes.is('checked') && !agentNo.is('checked')) {
        $('input[name=add-agent').addClass('invalid');
        return false;
      }
    };

    if (agentArray.length > 0) {
      checkAgent();
    }
  };

  validateRadio(); //final section check

  var empty = container.find('input.invalid, select.invalid').toArray();

  if (empty.length == 0) {
    removeAlert();
    next();
  } else {
    alert();
  }
}; //Prior last name function


var priorName = function priorName() {
  var maritalStatus = document.getElementById('applicant-marital-status').value;

  if (maritalStatus === 'married' || maritalStatus === 'divorced') {
    $('input#applicant-prior-last-name').removeClass('hide');
  } else {
    $('input#applicant-prior-last-name').addClass('hide');
  }
}; //spouse form progress


var spouseProgress = function spouseProgress() {
  var nextElement = $(event.target).parent().parent().next();

  if (nextElement.hasClass('hide')) {
    nextElement.removeClass('hide');
  } else {
    return;
  }
};

var addSpouse = function addSpouse() {
  var codeBlock = '<div class="codeBlock"> <p class="header">Spouse Personal Information</p><input type="text" placeholder="First Name" required id="spouse-first-name" name="spouse-first-name" minlength="2" maxlength="128"/> <input type="text" placeholder="MI" class="optional" id="spouse-MI" name="spouse-MI" maxlength="1"/> <input type="text" placeholder="Last Name" required id="spouse-last-name" name="spouse-last-name" minlength="2" maxlength="128"/> <input type="text" placeholder="000-00-0000" required id="spouse-SSN" name="spouse-SSN" class="SSN" minlength="9" maxlength="9"/> <input type="text" placeholder="Birthday" required id="spouse-birthday" name="spouse-birthday" class="date" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Birthday\')" minlength="8" maxlength="10"/> <select required id="spouse-gender" value="" class="purple-format" name="spouse-gender"> <option value="" disabled selected class="placeholder">Gender</option> <option value="male">Male</option> <option value="female">Female</option> </select> <p class="header">Health Information</p><input type="text" placeholder="Age" required id="spouse-age" name="spouse-age" class="age" minlength="1" maxlength="3"/> <input type="text" placeholder="Height" required id="spouse-height" name="spouse-height" class="height" onfocus="(this.placeholder=\'0&lsquo; 00&ldquo;\')" onblur="(this.placeholder=\'Height\')" minlength="2" maxlength="6"/> <input type="text" placeholder="Weight" required id="spouse-weight" name="spouse-weight" class="weight" minlength="2" maxlength="4"/> <input type="text" placeholder="Primary Care Physician (First Name)" required id="spouse-pcp-first-name" name="spouse-pcp-first-name" minlength="2" maxlength="128"/> <input type="text" placeholder="Primary Care Physician (Last Name)" required id="spouse-pcp-last-name" name="spouse-pcp-last-name" minlength="2" maxlength="128"/> <div class="question"> <p>Are you an established patient?</p><select required id="spouse-question-1" value="" class="purple-format question" name="spouse-question-1"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Have you been declined for insurance due to health reasons within the past 18 months?</p><select required id="spouse-question-2" value="" class="purple-format question" name="spouse-question-2"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Do you have hospital, major medical, group health, government or medical insurance coverage that will overlap during the duration of this coverage?</p><select required id="spouse-question-3" value="" class="purple-format question" name="spouse-question-3"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>If you are female, are you now pregnant, or if you are male, are you an expectant parent?</p><select required id="spouse-question-4" value="" class="purple-format question" name="spouse-question-4"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Do you weigh more than 300 pounds if male or more than 250 pounds if female?</p><select required id="spouse-question-5" value="" class="purple-format question" name="spouse-question-5"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>In the past five years, have you taken medication for or been advised, consulted, tested, diagnosed, treated or hospitalized or recommended for treatment by a physician for any of the following: heart or circulatory system disorder, including heart attack or stroke; insulin-dependent diabetes; cancer or tumors; disorder of the blood, including hemophilia or leukemia; kidney or liver disorder; mental or nervous conditions or disorders; alcoholism or alcohol abuse; drug abuse, addiction or dependency; organ transplant; emphysema; Crohn’s disease, ulcerative colitis or hepatitis?</p><select required id="spouse-question-6" value="" class="purple-format question" name="spouse-question-6"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Have you ever been diagnosed or treated by a physician for acquired immune deficiency syndrome (AIDS) or AIDS-related complex (ARC), or have you in the past five years tested positive for HIV virus or other immune disorders?</p><select required id="spouse-question-7" value="" class="purple-format question" name="spouse-question-7"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div></div>';
  document.getElementById('spouse-block').innerHTML = codeBlock;
};

var addSpouseSignature = function addSpouseSignature() {
  var codeBlock = '<div class="codeBlock"> <input type="text" placeholder="Signature of Spouse or Civil Union (ONLY if to be insured)" required id="spouse-agreement-signature" name="spouse-agreement-signature" minlength="1" maxlength="128"> <input type="text" placeholder="Date of Sign" required id="spouse-agreement-signature-date" name="spouse-agreement-signature-date" class="date" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Date of Sign\')" maxlength="10"/></div>';
  document.getElementById('spouse-signature-block').innerHTML = codeBlock;
  var codeBlock2 = '<div class="codeBlock2"> <input type="text" placeholder="Signature of Spouse or Civil Union" required id="spouse-authorization-signature" name="spouse-authorization-signature" minlength="2" maxlength="128"> <input type="text" placeholder="Date of Sign" required id="spouse-authorization-signature-date" name="spouse-authorization-signature-date" class="date" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Date of Sign\')" maxlength="10"> </div>';
  document.getElementById('spouse-signature-block-2').innerHTML = codeBlock2;
};

var removeSpouse = function removeSpouse() {
  $('div#spouse-block').children().remove();
  $('div#spouse-signature-block').children().remove();
  $('div#spouse-signature-block-2').children().remove();
}; //dependents form progress


var dependentsProgress = function dependentsProgress() {
  var codeBlock = '<div class="codeBlock"> <div class="radio number-input"> <p>How many?</p><div class="right"> <input type="text" name="num-of-dependents" id="num-of-dependents" required class="num" onfocus="(this.placeholder=\'10 max\')" onblur="(this.placeholder=\'\')" onkeyup="colorize();" minlength="1" maxlength="2" max="10"> <button type="button" class="update" onclick="numOfDependents();">Update</button> </div></div></div>';
  document.getElementById('num-of-dependents-block').innerHTML = codeBlock;
};

var numOfDependents = function numOfDependents() {
  var inputBox = $('input#num-of-dependents');
  var amount = inputBox.val();
  var dependentBlock = document.getElementById('dependent-block');
  var dependentSignatureBlock = document.getElementById('dependent-signature-block');
  var dependentSignatureBlock2 = document.getElementById('dependent-signature-block-2');
  var codeBlock = '<!-- <div class="codeBlock"> <p class="header">Dependent Personal Information</p><input type="text" placeholder="First Name" required id="dependent-first-name" name="dependent-first-name" minlength="2" maxlength="128"> <input type="text" placeholder="MI" class="optional" id="dependent-MI" name="dependent-MI" maxlength="1"> <input type="text" placeholder="Last Name" required id="dependent-last-name" name="dependent-last-name" minlength="2" maxlength="128"> <input type="text" placeholder="SSN" required id="dependent-SSN" name="dependent-SSN" class="SSN" minlength="9" maxlength="9"> <input type="text" placeholder="Birthday" required id="dependent-birthday" name="dependent-birthday" class="date" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Birthday\')" minlength="8" maxlength="10"> <select required id="spouse-gender" value="" class="purple-format" name="dependent-gender"> <option value="" disabled selected class="placeholder">Gender</option> <option value="male">Male</option> <option value="female">Female</option> </select> <p class="header">Health Information</p><input type="text" placeholder="Age" required id="dependent-age" name="dependent-age" class="age" minlength="1" maxlength="3"> <input type="text" placeholder="Height" required id="dependent-height" name="dependent-height" class="height" onfocus="(this.placeholder=\'0&lsquo; 00&ldquo;\')" onblur="(this.placeholder=\'Height\')" minlength="2" maxlength="6"> <input type="text" placeholder="Weight" required id="dependent-weight" name="dependent-weight" class="weight" minlength="2" maxlength="4"> <input type="text" placeholder="Primary Care Physician (First Name)" required id="dependent-pcp-first-name" name="dependent-pcp-first-name" minlength="2" maxlength="128"> <input type="text" placeholder="Primary Care Physician (Last Name)" required id="dependent-pcp-last-name" name="dependent-pcp-last-name" minlength="2" maxlength="128"> <div class="question"> <p>Are you an established patient?</p><select required id="dependent-question-1" value="" class="purple-format question" name="dependent-question-1"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Have you been declined for insurance due to health reasons within the past 18 months?</p><select required id="dependent-question-2" value="" class="purple-format question" name="dependent-question-2"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Do you have hospital, major medical, group health, government or medical insurance coverage that will overlap during the duration of this coverage?</p><select required id="dependent-question-3" value="" class="purple-format question" name="dependent-question-3"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>If you are female, are you now pregnant, or if you are male, are you an expectant parent?</p><select required id="dependent-question-4" value="" class="purple-format question" name="dependent-question-4"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Do you weigh more than 300 pounds if male or more than 250 pounds if female?</p><select required id="dependent-question-5" value="" class="purple-format question" name="dependent-question-5"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>In the past five years, have you taken medication for or been advised, consulted, tested, diagnosed, treated or hospitalized or recommended for treatment by a physician for any of the following: heart or circulatory system disorder, including heart attack or stroke; insulin-dependent diabetes; cancer or tumors; disorder of the blood, including hemophilia or leukemia; kidney or liver disorder; mental or nervous conditions or disorders; alcoholism or alcohol abuse; drug abuse, addiction or dependency; organ transplant; emphysema; Crohn’s disease, ulcerative colitis or hepatitis?</p><select required id="dependent-question-6" value="" class="purple-format question" name="dependent-question-6"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Have you ever been diagnosed or treated by a physician for acquired immune deficiency syndrome (AIDS) or AIDS-related complex (ARC), or have you in the past five years tested positive for HIV virus or other immune disorders?</p><select required id="dependent-question-7" value="" class="purple-format question" name="dependent-question-7"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div></div>-->';
  var codeSignatureBlock = '<div class="codeBlock"> <input type="text" placeholder="Signature of Dependent (ONLY if to be insured and 18 years or older)" required id="dependent-agreement-signature" name="dependent-agreement-signature" minlenght="2" maxlength="128"/> <input type="text" placeholder="Date of Sign" required id="dependent-agreement-signature-date" name="dependent-agreement-signature-date" class="date" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Date of Sign\')" maxlength="10"/> </div>';
  var codeSignatureBlock2 = '<div class="codeBlock2"> <input type="text" placeholder="Signature of Dependent" required id="dependent-authorization-signature" name="dependent-authorization-signature" minlength="2" maxlength="128"> <input type="text" placeholder="Date of Sign" required id="dependent-authorization-signature-date" name="dependent-authorization-signature-date" class="date" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Date of Sign\')" maxlength="10"> </div>';

  var validateOutput = function validateOutput() {
    var countDiv = $('#dependent-block').children().length;

    if (countDiv < amount) {
      var difference = amount - countDiv;

      for (i = 0; i < difference; i++) {
        dependentBlock.insertAdjacentHTML('beforeend', codeBlock);
        dependentSignatureBlock.insertAdjacentHTML('beforeend', codeSignatureBlock);
        dependentSignatureBlock2.insertAdjacentHTML('beforeend', codeSignatureBlock2);
      }
    } else if (countDiv > amount) {
      var _difference = countDiv - amount;

      for (i = 0; i < _difference; i++) {
        dependentBlock.removeChild(dependentBlock.lastChild);
        dependentSignatureBlock.removeChild(dependentSignatureBlock.lastChild);
        dependentSignatureBlock2.removeChild(dependentSignatureBlock2.lastChild);
      }
    } else if (countDiv === amount && amount.length < 1) {
      dependentBlock.insertAdjacentHTML('beforeend', codeBlock);
    } else {
      return;
    }
  };

  if (amount.length < 1) {
    validateOutput();
  } else if (amount.length > 0 && amount <= 10) {
    colorize();
    validateOutput();
  } else {}
};

var dependentsDigress = function dependentsDigress() {
  $('div#num-of-dependents-block').children().remove();
  $('div#dependent-block').children().remove();
};

var dependentRemoveSignatures = function dependentRemoveSignatures() {
  $('div#dependent-signature-block').children().remove();
  $('div#dependent-signature-block-2').children().remove();
};

var colorize = function colorize() {
  var inputBox = $('input#num-of-dependents');
  var amount = inputBox.val();

  if (amount <= 10) {
    inputBox.removeClass('invalid');
  } else if (amount > 10) {
    inputBox.addClass('invalid');
  }
}; //table highlight


var tableSelect = function tableSelect() {
  var tableChoice = document.getElementById('coverage-table-select').value;
  var tableRow = $('#coverage-table table tbody').children();

  if (tableChoice === 'A') {
    tableRow.eq(1).addClass('selected');
    tableRow.eq(2).removeClass('selected');
    tableRow.eq(3).removeClass('selected');
    tableRow.eq(4).removeClass('selected');
  } else if (tableChoice === 'B') {
    tableRow.eq(2).addClass('selected');
    tableRow.eq(1).removeClass('selected');
    tableRow.eq(3).removeClass('selected');
    tableRow.eq(4).removeClass('selected');
  } else if (tableChoice === 'C') {
    tableRow.eq(3).addClass('selected');
    tableRow.eq(1).removeClass('selected');
    tableRow.eq(2).removeClass('selected');
    tableRow.eq(4).removeClass('selected');
  } else if (tableChoice === 'D') {
    tableRow.eq(4).addClass('selected');
    tableRow.eq(1).removeClass('selected');
    tableRow.eq(2).removeClass('selected');
    tableRow.eq(3).removeClass('selected');
  }
}; //agent form progress function


var addAgent = function addAgent() {
  var codeBlock = '<div class="codeBlock"> <p class="header">I certify that:</p><p class="bullet">• All answers provided in this application were completed by or provided by the applicant.</p><p class="bullet">• I have reviewed this enrollment form to ensure that all required items have been completed.</p><p class="bullet">• I am not aware of any information not disclosed on this enrollment form relating to the health, habits or reputation of any person listed on this enrollment form, which might have a bearing on the risk.</p><p class="header">Agent / Broker Information</p><input type="text" placeholder="Full Name" required id="agent-name" name="agent-name" minlength="1" maxlength="128"/> <input type="text" placeholder="ID# / Code" required id="agent-ID" class="agent-ID" name="agent-ID" onfocus="(this.placeholder=\'000000\')" onblur="(this.placeholder=\'ID# / Code\')" minlength="1" maxlength="6"/> <input type="text" placeholder="Agency" required id="agent-agency" name="agent-agency" minlength="1" maxlength="256"/> <br><input type="text" placeholder="Home Phone" required id="agent-phone" name="agent-phone" class="phone"> <input type="email" placeholder="Email" required id="agent-email" name="agent-email" minlength="1" maxlength="256" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"> <input type="text" placeholder="Producer Signature" required id="producer-signature" name="producer-signature" minlength="2" maxlength="128"/> <input type="text" placeholder="Date of Sign" required id="producer-signature-date" name="producer-signature-date" class="date" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Date of Sign\')" minlength="8" maxlength="10"/> <div class="agree"> <label><input type="checkbox" value="check" required id="producer-signature-valid" name="producer-signature-valid">I agree that the typed names above shall be treated as valid signatures for all purposes of this form.</label> </div></div>';
  document.getElementById('agent-block').innerHTML = codeBlock;
};

var removeAgent = function removeAgent() {
  $('div#agent-block').children().remove();
}; //download form function


var addPDF = function addPDF() {
  $('div#legal-block').children().remove();
  var codeBlock = '<div class="codeBlock"> <p class="header">Please upload your Legally Authorized Representative Documents.</p><input type="file" name="files" id="files" multiple="multiple" accept="image/jpeg,image/gif,image/png,application/pdf,image/tiff,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" data-val="true" data-val-allowedfileextensions="Allowed file extensions: pdf, jpg, jpeg, gif, tiff, png, txt, doc, docx"/> </div>';
  document.getElementById('legal-block').innerHTML = codeBlock;
};

var removePDF = function removePDF() {
  $('div#legal-block').children().remove();
}; //submit function


var submitForm = function submitForm() {
  validate();
  var container = $(event.target).parent().parent();
  var finalValidation = container.find('input.invalid, select.invalid').toArray();

  if (finalValidation.length == 0) {
    removeAlert();
    window.location.href = "./short-term-application-confirm.html";
    return true;
  } else {
    alert();
    console.log(finalValidation);
  }
};

var form = document.getElementById('form');
form.addEventListener("submit", submitForm, true);
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// jQuery Mask Plugin v1.14.15
// github.com/igorescobar/jQuery-Mask-Plugin
var $jscomp = {
  scope: {},
  findInternal: function findInternal(a, l, d) {
    a instanceof String && (a = String(a));

    for (var p = a.length, h = 0; h < p; h++) {
      var b = a[h];
      if (l.call(d, b, h, a)) return {
        i: h,
        v: b
      };
    }

    return {
      i: -1,
      v: void 0
    };
  }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, l, d) {
  if (d.get || d.set) throw new TypeError("ES3 does not support getters and setters.");
  a != Array.prototype && a != Object.prototype && (a[l] = d.value);
};

$jscomp.getGlobal = function (a) {
  return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
};

$jscomp.global = $jscomp.getGlobal(void 0);

$jscomp.polyfill = function (a, l, d, p) {
  if (l) {
    d = $jscomp.global;
    a = a.split(".");

    for (p = 0; p < a.length - 1; p++) {
      var h = a[p];
      h in d || (d[h] = {});
      d = d[h];
    }

    a = a[a.length - 1];
    p = d[a];
    l = l(p);
    l != p && null != l && $jscomp.defineProperty(d, a, {
      configurable: !0,
      writable: !0,
      value: l
    });
  }
};

$jscomp.polyfill("Array.prototype.find", function (a) {
  return a ? a : function (a, d) {
    return $jscomp.findInternal(this, a, d).v;
  };
}, "es6-impl", "es3");

(function (a, l, d) {
  "function" === typeof define && define.amd ? define(["jquery"], a) : "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = a(require("jquery")) : a(l || d);
})(function (a) {
  var l = function l(b, e, f) {
    var c = {
      invalid: [],
      getCaret: function getCaret() {
        try {
          var a,
              r = 0,
              g = b.get(0),
              e = document.selection,
              f = g.selectionStart;
          if (e && -1 === navigator.appVersion.indexOf("MSIE 10")) a = e.createRange(), a.moveStart("character", -c.val().length), r = a.text.length;else if (f || "0" === f) r = f;
          return r;
        } catch (C) {}
      },
      setCaret: function setCaret(a) {
        try {
          if (b.is(":focus")) {
            var c,
                g = b.get(0);
            g.setSelectionRange ? g.setSelectionRange(a, a) : (c = g.createTextRange(), c.collapse(!0), c.moveEnd("character", a), c.moveStart("character", a), c.select());
          }
        } catch (B) {}
      },
      events: function events() {
        b.on("keydown.mask", function (a) {
          b.data("mask-keycode", a.keyCode || a.which);
          b.data("mask-previus-value", b.val());
          b.data("mask-previus-caret-pos", c.getCaret());
          c.maskDigitPosMapOld = c.maskDigitPosMap;
        }).on(a.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", c.behaviour).on("paste.mask drop.mask", function () {
          setTimeout(function () {
            b.keydown().keyup();
          }, 100);
        }).on("change.mask", function () {
          b.data("changed", !0);
        }).on("blur.mask", function () {
          d === c.val() || b.data("changed") || b.trigger("change");
          b.data("changed", !1);
        }).on("blur.mask", function () {
          d = c.val();
        }).on("focus.mask", function (b) {
          !0 === f.selectOnFocus && a(b.target).select();
        }).on("focusout.mask", function () {
          f.clearIfNotMatch && !h.test(c.val()) && c.val("");
        });
      },
      getRegexMask: function getRegexMask() {
        for (var a = [], b, c, f, n, d = 0; d < e.length; d++) {
          (b = m.translation[e.charAt(d)]) ? (c = b.pattern.toString().replace(/.{1}$|^.{1}/g, ""), f = b.optional, (b = b.recursive) ? (a.push(e.charAt(d)), n = {
            digit: e.charAt(d),
            pattern: c
          }) : a.push(f || b ? c + "?" : c)) : a.push(e.charAt(d).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
        }

        a = a.join("");
        n && (a = a.replace(new RegExp("(" + n.digit + "(.*" + n.digit + ")?)"), "($1)?").replace(new RegExp(n.digit, "g"), n.pattern));
        return new RegExp(a);
      },
      destroyEvents: function destroyEvents() {
        b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "));
      },
      val: function val(a) {
        var c = b.is("input") ? "val" : "text";

        if (0 < arguments.length) {
          if (b[c]() !== a) b[c](a);
          c = b;
        } else c = b[c]();

        return c;
      },
      calculateCaretPosition: function calculateCaretPosition() {
        var a = b.data("mask-previus-value") || "",
            e = c.getMasked(),
            g = c.getCaret();

        if (a !== e) {
          var f = b.data("mask-previus-caret-pos") || 0,
              e = e.length,
              d = a.length,
              m = a = 0,
              h = 0,
              l = 0,
              k;

          for (k = g; k < e && c.maskDigitPosMap[k]; k++) {
            m++;
          }

          for (k = g - 1; 0 <= k && c.maskDigitPosMap[k]; k--) {
            a++;
          }

          for (k = g - 1; 0 <= k; k--) {
            c.maskDigitPosMap[k] && h++;
          }

          for (k = f - 1; 0 <= k; k--) {
            c.maskDigitPosMapOld[k] && l++;
          }

          g > d ? g = 10 * e : f >= g && f !== d ? c.maskDigitPosMapOld[g] || (f = g, g = g - (l - h) - a, c.maskDigitPosMap[g] && (g = f)) : g > f && (g = g + (h - l) + m);
        }

        return g;
      },
      behaviour: function behaviour(f) {
        f = f || window.event;
        c.invalid = [];
        var e = b.data("mask-keycode");

        if (-1 === a.inArray(e, m.byPassKeys)) {
          var e = c.getMasked(),
              g = c.getCaret();
          setTimeout(function () {
            c.setCaret(c.calculateCaretPosition());
          }, a.jMaskGlobals.keyStrokeCompensation);
          c.val(e);
          c.setCaret(g);
          return c.callbacks(f);
        }
      },
      getMasked: function getMasked(a, b) {
        var g = [],
            d = void 0 === b ? c.val() : b + "",
            n = 0,
            h = e.length,
            q = 0,
            l = d.length,
            k = 1,
            r = "push",
            p = -1,
            t = 0,
            y = [],
            v,
            z;
        f.reverse ? (r = "unshift", k = -1, v = 0, n = h - 1, q = l - 1, z = function z() {
          return -1 < n && -1 < q;
        }) : (v = h - 1, z = function z() {
          return n < h && q < l;
        });

        for (var A; z();) {
          var x = e.charAt(n),
              w = d.charAt(q),
              u = m.translation[x];
          if (u) w.match(u.pattern) ? (g[r](w), u.recursive && (-1 === p ? p = n : n === v && n !== p && (n = p - k), v === p && (n -= k)), n += k) : w === A ? (t--, A = void 0) : u.optional ? (n += k, q -= k) : u.fallback ? (g[r](u.fallback), n += k, q -= k) : c.invalid.push({
            p: q,
            v: w,
            e: u.pattern
          }), q += k;else {
            if (!a) g[r](x);
            w === x ? (y.push(q), q += k) : (A = x, y.push(q + t), t++);
            n += k;
          }
        }

        d = e.charAt(v);
        h !== l + 1 || m.translation[d] || g.push(d);
        g = g.join("");
        c.mapMaskdigitPositions(g, y, l);
        return g;
      },
      mapMaskdigitPositions: function mapMaskdigitPositions(a, b, e) {
        a = f.reverse ? a.length - e : 0;
        c.maskDigitPosMap = {};

        for (e = 0; e < b.length; e++) {
          c.maskDigitPosMap[b[e] + a] = 1;
        }
      },
      callbacks: function callbacks(a) {
        var h = c.val(),
            g = h !== d,
            m = [h, a, b, f],
            q = function q(a, b, c) {
          "function" === typeof f[a] && b && f[a].apply(this, c);
        };

        q("onChange", !0 === g, m);
        q("onKeyPress", !0 === g, m);
        q("onComplete", h.length === e.length, m);
        q("onInvalid", 0 < c.invalid.length, [h, a, b, c.invalid, f]);
      }
    };
    b = a(b);
    var m = this,
        d = c.val(),
        h;
    e = "function" === typeof e ? e(c.val(), void 0, b, f) : e;
    m.mask = e;
    m.options = f;

    m.remove = function () {
      var a = c.getCaret();
      m.options.placeholder && b.removeAttr("placeholder");
      b.data("mask-maxlength") && b.removeAttr("maxlength");
      c.destroyEvents();
      c.val(m.getCleanVal());
      c.setCaret(a);
      return b;
    };

    m.getCleanVal = function () {
      return c.getMasked(!0);
    };

    m.getMaskedVal = function (a) {
      return c.getMasked(!1, a);
    };

    m.init = function (d) {
      d = d || !1;
      f = f || {};
      m.clearIfNotMatch = a.jMaskGlobals.clearIfNotMatch;
      m.byPassKeys = a.jMaskGlobals.byPassKeys;
      m.translation = a.extend({}, a.jMaskGlobals.translation, f.translation);
      m = a.extend(!0, {}, m, f);
      h = c.getRegexMask();
      if (d) c.events(), c.val(c.getMasked());else {
        f.placeholder && b.attr("placeholder", f.placeholder);
        b.data("mask") && b.attr("autocomplete", "off");
        d = 0;

        for (var l = !0; d < e.length; d++) {
          var g = m.translation[e.charAt(d)];

          if (g && g.recursive) {
            l = !1;
            break;
          }
        }

        l && b.attr("maxlength", e.length).data("mask-maxlength", !0);
        c.destroyEvents();
        c.events();
        d = c.getCaret();
        c.val(c.getMasked());
        c.setCaret(d);
      }
    };

    m.init(!b.is("input"));
  };

  a.maskWatchers = {};

  var d = function d() {
    var b = a(this),
        e = {},
        f = b.attr("data-mask");
    b.attr("data-mask-reverse") && (e.reverse = !0);
    b.attr("data-mask-clearifnotmatch") && (e.clearIfNotMatch = !0);
    "true" === b.attr("data-mask-selectonfocus") && (e.selectOnFocus = !0);
    if (p(b, f, e)) return b.data("mask", new l(this, f, e));
  },
      p = function p(b, e, f) {
    f = f || {};
    var c = a(b).data("mask"),
        d = JSON.stringify;
    b = a(b).val() || a(b).text();

    try {
      return "function" === typeof e && (e = e(b)), "object" !== _typeof(c) || d(c.options) !== d(f) || c.mask !== e;
    } catch (t) {}
  },
      h = function h(a) {
    var b = document.createElement("div"),
        d;
    a = "on" + a;
    d = a in b;
    d || (b.setAttribute(a, "return;"), d = "function" === typeof b[a]);
    return d;
  };

  a.fn.mask = function (b, d) {
    d = d || {};

    var e = this.selector,
        c = a.jMaskGlobals,
        h = c.watchInterval,
        c = d.watchInputs || c.watchInputs,
        t = function t() {
      if (p(this, b, d)) return a(this).data("mask", new l(this, b, d));
    };

    a(this).each(t);
    e && "" !== e && c && (clearInterval(a.maskWatchers[e]), a.maskWatchers[e] = setInterval(function () {
      a(document).find(e).each(t);
    }, h));
    return this;
  };

  a.fn.masked = function (a) {
    return this.data("mask").getMaskedVal(a);
  };

  a.fn.unmask = function () {
    clearInterval(a.maskWatchers[this.selector]);
    delete a.maskWatchers[this.selector];
    return this.each(function () {
      var b = a(this).data("mask");
      b && b.remove().removeData("mask");
    });
  };

  a.fn.cleanVal = function () {
    return this.data("mask").getCleanVal();
  };

  a.applyDataMask = function (b) {
    b = b || a.jMaskGlobals.maskElements;
    (b instanceof a ? b : a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(d);
  };

  h = {
    maskElements: "input,td,span,div",
    dataMaskAttr: "*[data-mask]",
    dataMask: !0,
    watchInterval: 300,
    watchInputs: !0,
    keyStrokeCompensation: 10,
    useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && h("input"),
    watchDataMask: !1,
    byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
    translation: {
      0: {
        pattern: /\d/
      },
      9: {
        pattern: /\d/,
        optional: !0
      },
      "#": {
        pattern: /\d/,
        recursive: !0
      },
      A: {
        pattern: /[a-zA-Z0-9]/
      },
      S: {
        pattern: /[a-zA-Z]/
      }
    }
  };
  a.jMaskGlobals = a.jMaskGlobals || {};
  h = a.jMaskGlobals = a.extend(!0, {}, h, a.jMaskGlobals);
  h.dataMask && a.applyDataMask();
  setInterval(function () {
    a.jMaskGlobals.watchDataMask && a.applyDataMask();
  }, h.watchInterval);
}, window.jQuery, window.Zepto);