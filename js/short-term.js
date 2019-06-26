"use strict";

//jquery rules
$(document).ready(function () {
  $('div.wrapper').hide();
  $('div.wrapper').fadeIn(1000); //accordian expand and bg color

  $('div.accordian').click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('closed');
  });
});

var automask = function automask() {
  //automask functions src=http://igorescobar.github.io/jQuery-Mask-Plugin/
  $('input.phone').mask('(000) 000-0000');
  $('input.SSN').mask('000-00-0000');
  $('input.zip').mask('00000');
  $('input.age').mask('000');
  $('input.height').mask('0\' 00\"');
  $('input.weight').mask('0000');
  $('input.num').mask('00');
  $('input.agent-ID').mask('00000');
  $('input.date').mask('#0-00-00##');
}; //fields missing


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
      for (var i = 0; i < boxArray.length; i++) {
        var boxIds = boxArray[i].id;

        if (boxArray[i].checked) {
          $("#".concat(boxIds)).removeClass('invalid');
        }
      }
    }
  };

  for (var i = 0; i < inputs.length; i++) {
    var ids = inputs[i].id;
    var names = inputs[i].name;
    var values = inputs[i].value;

    if (inputs[i].type == 'radio') {
      if (values == '') {
        $("#".concat(names)).addClass('invalid');
      } else {
        $("#".concat(names)).removeClass('invalid');
      }
    } else {
      if (values == '' || values == 'check') {
        $("#".concat(ids)).addClass('invalid');
        validateCheckBoxes();
      } else {
        $("#".concat(ids)).removeClass('invalid');
      }
    }
  } //validate ssn


  var validateSSN = function validateSSN() {
    var thisBox = container.find('input.SSN');
    var boxArray = thisBox.toArray();

    var runLoop = function runLoop() {
      for (var _i = 0; _i < boxArray.length; _i++) {
        var _ids = boxArray[_i].id;
        var _values = boxArray[_i].value;

        if (_values.length == 11) {
          $("#".concat(_ids)).removeClass('invalid');
          return true;
        } else {
          $("#".concat(_ids)).addClass('invalid');
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
      for (var _i2 = 0; _i2 < boxArray.length; _i2++) {
        var _ids2 = boxArray[_i2].id;
        var _values2 = boxArray[_i2].value;

        if (_values2.length == 8 || _values2.length == 10) {
          $("#".concat(_ids2)).removeClass('invalid');
          return true;
        } else {
          $("#".concat(_ids2)).addClass('invalid');
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
      for (var _i3 = 0; _i3 < boxArray.length; _i3++) {
        var _ids3 = boxArray[_i3].id;
        var _values3 = boxArray[_i3].value;

        if (_values3.length > 13) {
          $("#".concat(_ids3)).removeClass('invalid');
          return true;
        } else {
          $("#".concat(_ids3)).addClass('invalid');
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
    for (var _i4 = 0; _i4 < emailArray.length; _i4++) {
      var valid = emailArray[_i4].checkValidity();

      var _ids4 = emailArray[_i4].id;

      if (valid) {
        $("input#".concat(_ids4)).removeClass('invalid');
      } else {
        $("input#".concat(_ids4)).addClass('invalid');
      }
    }
  } //validate radio buttons


  var validateRadio = function validateRadio() {
    var spouseArray = container.find('input[type=radio][name=add-spouse]').toArray();
    var dependentArray = container.find('input[type=radio][name=add-spouse]').toArray();
    var representativeArray = container.find('input[type=radio][name="Request.Applicant.IsLegallyAuthorized"]').toArray();
    var agentArray = container.find('input[type=radio][name=add-agent]').toArray();

    var checkSpouse = function checkSpouse() {
      var spouseYes = container.find('input[type=radio][name=add-spouse][value=yes]');
      var spouseNo = container.find('input[type=radio][name=add-spouse][value=no]');

      if (spouseYes.is(':checked') || spouseNo.is(':checked')) {
        $('input[name=add-spouse]').removeClass('invalid');
        return true;
      } else if (!spouseYes.is('checked') && !spouseNo.is('checked')) {
        $('input[name=add-spouse]').addClass('invalid');
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
      var representativeYes = container.find('input[type=radio][name="Request.Applicant.IsLegallyAuthorized"][value=true]');
      var representativeNo = container.find('input[type=radio][name="Request.Applicant.IsLegallyAuthorized"][value=false]');

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
  var codeBlock = "<div class=\"codeBlock\"> <p class=\"header\">Spouse Personal Information</p><input type=\"text\" placeholder=\"First Name\" required id=\"spouse-first-name\" name=\"Request.Spouse.FirstName\" minlength=\"2\" maxlength=\"128\"/> <input type=\"text\" placeholder=\"MI\" class=\"optional\" id=\"spouse-MI\" name=\"Request.Spouse.MiddleName\" maxlength=\"1\"/> <input type=\"text\" placeholder=\"Last Name\" required id=\"spouse-last-name\" name=\"Request.Spouse.LastName\"minlength=\"2\" maxlength=\"128\"/> <input type=\"text\" placeholder=\"SSN\" required id=\"spouse-SSN\" name=\"Request.Spouse.Ssn\" class=\"SSN\" onfocus=\"(this.placeholder='000-00-0000')\" onblur=\"(this.placeholder='SSN')\" onkeyup=\"automask();\" minlength=\"9\" maxlength=\"9\"/> <input type=\"text\" placeholder=\"Birthday\" required id=\"spouse-birthday\" name=\"Request.Spouse.Birthdate\" class=\"date\" onfocus=\"(this.placeholder='MM-DD-YYYY')\" onblur=\"(this.placeholder='Birthday')\" onkeyup=\"automask();\" minlength=\"8\" maxlength=\"10\"/> <select required id=\"spouse-gender\" value=\"\" class=\"purple-format\" name=\"Request.Spouse.Sex\"> <option value=\"\" disabled selected class=\"placeholder\">Gender</option> <option value=\"male\">Male</option> <option value=\"female\">Female</option> </select> <p class=\"header\">Health Information</p><input type=\"text\" placeholder=\"Age\" required id=\"spouse-age\" name=\"Request.Spouse.Age\" class=\"age\" onkeyup=\"automask();\" minlength=\"1\" maxlength=\"3\"/> <input type=\"text\" placeholder=\"Height\" required id=\"spouse-height\" name=\"Request.Spouse.Height\" class=\"height\" onfocus=\"(this.placeholder='0&lsquo; 00&ldquo;')\" onblur=\"(this.placeholder='Height')\" onkeyup=\"automask();\" minlength=\"2\" maxlength=\"6\"/> <input type=\"text\" placeholder=\"Weight\" required id=\"spouse-weight\" name=\"Request.Spouse.Weight\" class=\"weight\" onkeyup=\"automask();\" minlength=\"2\" maxlength=\"4\"/> <input type=\"text\" placeholder=\"Primary Care Physician (First Name)\" required id=\"spouse-pcp-first-name\" name=\"Request.Spouse.PcpFirstName\" minlength=\"2\" maxlength=\"128\"/> <input type=\"text\" placeholder=\"Primary Care Physician (Last Name)\" required id=\"spouse-pcp-last-name\" name=\"Request.Spouse.PcpLastName\" minlength=\"2\" maxlength=\"128\"/> <div class=\"question\"> <p>Are you an established patient?</p><select required id=\"spouse-question-1\" value=\"\" class=\"purple-format question\" name=\"Request.Spouse.IsEstablishedPatient\"> <option value=\"\" disabled selected class=\"placeholder\">Choose</option> <option value=\"true\">Yes</option> <option value=\"false\">No</option> </select> <div class=\"clear\"></div></div><div class=\"question\"> <p>Have you been declined for insurance due to health reasons within the past 18 months?</p><select required id=\"spouse-question-2\" value=\"\" class=\"purple-format question\" name=\"Request.Spouse.HasBeenDeclined\"> <option value=\"\" disabled selected class=\"placeholder\">Choose</option> <option value=\"true\">Yes</option> <option value=\"false\">No</option> </select> <div class=\"clear\"></div></div><div class=\"question\"> <p>Do you have hospital, major medical, group health, government or medical insurance coverage that will overlap during the duration of this coverage?</p><select required id=\"spouse-question-3\" value=\"\" class=\"purple-format question\" name=\"Request.Spouse.HasInsuranceOverlap\"> <option value=\"\" disabled selected class=\"placeholder\">Choose</option> <option value=\"true\">Yes</option> <option value=\"false\">No</option> </select> <div class=\"clear\"></div></div><div class=\"question\"> <p>If you are female, are you now pregnant, or if you are male, are you an expectant parent?</p><select required id=\"spouse-question-4\" value=\"\" class=\"purple-format question\" name=\"Request.Spouse.IsExpectantParent\"> <option value=\"\" disabled selected class=\"placeholder\">Choose</option> <option value=\"true\">Yes</option> <option value=\"false\">No</option> </select> <div class=\"clear\"></div></div><div class=\"question\"> <p>Do you weigh more than 300 pounds if male or more than 250 pounds if female?</p><select required id=\"spouse-question-5\" value=\"\" class=\"purple-format question\" name=\"Request.Spouse.IsOverweight\"> <option value=\"\" disabled selected class=\"placeholder\">Choose</option> <option value=\"true\">Yes</option> <option value=\"false\">No</option> </select> <div class=\"clear\"></div></div><div class=\"question\"> <p>In the past five years, have you taken medication for or been advised, consulted, tested, diagnosed, treated or hospitalized or recommended for treatment by a physician for any of the following: heart or circulatory system disorder, including heart attack or stroke; insulin-dependent diabetes; cancer or tumors; disorder of the blood, including hemophilia or leukemia; kidney or liver disorder; mental or nervous conditions or disorders; alcoholism or alcohol abuse; drug abuse, addiction or dependency; organ transplant; emphysema; Crohn\u2019s disease, ulcerative colitis or hepatitis?</p><select required id=\"spouse-question-6\" value=\"\" class=\"purple-format question\" name=\"Request.Spouse.HasSeriousHealthCondition\"> <option value=\"\" disabled selected class=\"placeholder\">Choose</option> <option value=\"true\">Yes</option> <option value=\"false\">No</option> </select> <div class=\"clear\"></div></div><div class=\"question\"> <p>Have you ever been diagnosed or treated by a physician for acquired immune deficiency syndrome (AIDS) or AIDS-related complex (ARC), or have you in the past five years tested positive for HIV virus or other immune disorders?</p><select required id=\"spouse-question-7\" value=\"\" class=\"purple-format question\" name=\"Request.Spouse.HasImmuneDisorder\"> <option value=\"\" disabled selected class=\"placeholder\">Choose</option> <option value=\"true\">Yes</option> <option value=\"false\">No</option> </select> <div class=\"clear\"></div></div></div>";
  document.getElementById('spouse-block').innerHTML = codeBlock;
};

var addSpouseSignature = function addSpouseSignature() {
  var codeBlock = '<div class="codeBlock"> <input type="text" placeholder="Signature of Spouse or Civil Union (ONLY if to be insured)" required id="spouse-agreement-signature" name="Request.Spouse.AgreementSignature" minlength="1" maxlength="128"> <input type="text" placeholder="Date of Sign" required id="spouse-agreement-signature-date" name="Request.Spouse.AgreementSignatureDate" class="date" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Date of Sign\')" minlength="8" maxlength="10"/> </div>';
  document.getElementById('spouse-signature-block').innerHTML = codeBlock;
  var codeBlock2 = '<div class="codeBlock2"> <input type="text" placeholder="Signature of Spouse or Civil Union" required id="spouse-authorization-signature" name="Request.Spouse.AuthorizationSignature" minlength="2" maxlength="128"> <input type="text" placeholder="Date of Sign" required id="spouse-authorization-signature-date" name="spouse-authorization-signature-date" class="date" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Date of Sign\')" minlength="8" maxlength="10"> </div>';
  document.getElementById('spouse-signature-block-2').innerHTML = codeBlock2;
};

var removeSpouse = function removeSpouse() {
  $('div#spouse-block').children().remove();
  $('div#spouse-signature-block').children().remove();
  $('div#spouse-signature-block-2').children().remove();
}; // add either single or family table


var tableAdd = function tableAdd() {
  var spouse = document.getElementsByName('add-spouse')[1];
  var dependents = document.getElementsByName('add-dependent')[1];
  var coverageTable = document.getElementById('coverage-table');
  var singleNote = $('p.note.single');
  var familyNote = $('p.note.family');
  var disclaimer = $('p.note.disclaimer');
  var singleTable = "<table class=\"coverage-table single\"> <tbody> <tr> <th></th> <th colspan=\"2\">Deductible</th> <th colspan=\"2\">OOP-Max</th> </tr><tr class=\"selectable\"> <td>A</td><td colspan=\"2\">In-Network: $1,000<br>Out-of-Network: $2,000</td><td colspan=\"2\">In-Network: $2,000<br>Out-of-Network: $4,000</td></tr><tr class=\"selectable\"> <td>B</td><td colspan=\"2\">In-Network: $2,000<br>Out-of-Network: $4,000</td><td colspan=\"2\">In-Network: $4,000<br>Out-of-Network: $8,000</td></tr><tr class=\"selectable\"> <td>C</td><td colspan=\"2\">In-Network: $5,000<br>Out-of-Network: $10,000</td><td colspan=\"2\">In-Network: $10,000<br>Out-of-Network: $20,000</td></tr><tr class=\"selectable\"> <td>D</td><td colspan=\"2\">In-Network: $7,500<br>Out-of-Network: $15,000</td><td colspan=\"2\">In-Network: $15,000<br>Out-of-Network: $30,000</td></tr></tbody> </table>";
  var familyTable = "<table class=\"coverage-table family\"> <tbody> <tr> <th></th> <th colspan=\"2\">Deductible</th> <th colspan=\"2\">OOP-Max</th> </tr><tr class=\"selectable\"> <td>A</td><td colspan=\"2\">In-Network: $2,000<br>Out-of-Network: $4,000</td><td colspan=\"2\">In-Network: $4,000<br>Out-of-Network: $8,000</td></tr><tr class=\"selectable\"> <td>B</td><td colspan=\"2\">In-Network: $4,000<br>Out-of-Network: $8,000</td><td colspan=\"2\">In-Network: $8,000<br>Out-of-Network: $16,000</td></tr><tr class=\"selectable\"> <td>C</td><td colspan=\"2\">In-Network: $10,000<br>Out-of-Network: $20,000</td><td colspan=\"2\">In-Network: $20,000<br>Out-of-Network: $40,000</td></tr><tr class=\"selectable\"> <td>D</td><td colspan=\"2\">In-Network: $15,000<br>Out-of-Network: $30,000</td><td colspan=\"2\">In-Network: $30,000<br>Out-of-Network: $60,000</td></tr></tbody> </table>";

  while (coverageTable.firstChild) {
    coverageTable.removeChild(coverageTable.firstChild);
  }

  if (spouse.checked && dependents.checked) {
    coverageTable.innerHTML = singleTable;
    disclaimer.hide();
    familyNote.hide();
    singleNote.show();
  } else {
    coverageTable.innerHTML = familyTable;
    disclaimer.hide();
    singleNote.hide();
    familyNote.show();
  }
}; //dependents form progress


var dependentsProgress = function dependentsProgress() {
  var codeBlock = '<div class="codeBlock"> <div class="radio number-input"> <p>How many?</p><div class="right"> <input type="text" name="num-of-dependents" id="num-of-dependents" required class="num" onfocus="(this.placeholder=\'10 max\')" onblur="(this.placeholder=\'\')" onkeyup="colorize();" minlength="1" maxlength="2" max="10"> <button type="button" class="update" onclick="numOfDependents();">Update</button> </div></div></div>';
  document.getElementById('num-of-dependents-block').innerHTML = codeBlock;
};

var numOfDependents = function numOfDependents() {
  var inputBox = $('input#num-of-dependents');
  var amount = inputBox.val();
  var amountArray = [];
  var countDiv = $('#dependent-block').children().length;
  var dependentBlock = document.getElementById('dependent-block');
  var dependentSignatureBlock = document.getElementById('dependent-signature-block');
  var dependentSignatureBlock2 = document.getElementById('dependent-signature-block-2');

  var matchBox = function matchBox() {
    $('div#dependent-block').children().remove();
    $('div#dependent-signature-block').children().remove();
    $('div#dependent-signature-block-2').children().remove();

    for (var i = 0; i < amount; i++) {
      amountArray.push(i);
      var depNum = "[".concat(amountArray[i], "]");
      var codeBlock = "<div class=\"codeBlock\"> <p class=\"header\">Dependent Personal Information</p><input type=\"text\" placeholder=\"First Name\" required id=\"dependent-first-name\" name=\"Request.Dependents".concat(depNum, ".FirstName\" minlength=\"2\" maxlength=\"128\"> <input type=\"text\" placeholder=\"MI\" class=\"optional\" id=\"dependent-MI\" name=\"Request.Dependents").concat(depNum, ".MiddleName\" maxlength=\"1\"> <input type=\"text\" placeholder=\"Last Name\" required id=\"dependent-last-name\" name=\"Request.Dependents").concat(depNum, ".LastName\" minlength=\"2\" maxlength=\"128\"> <input type=\"text\" placeholder=\"SSN\" required id=\"dependent-SSN\" class=\"SSN\" name=\"Request.Dependents").concat(depNum, ".Ssn\" onkeyup=\"automask();\" minlength=\"9\" maxlength=\"9\"> <input type=\"text\" placeholder=\"Birthday\" required id=\"dependent-birthday\" class=\"date\" name=\"Request.Dependents").concat(depNum, ".Birthdate\" onfocus=\"(this.placeholder='MM-DD-YYYY')\" onblur=\"(this.placeholder='Birthday')\" onkeyup=\"automask();\" minlength=\"8\" maxlength=\"10\"> <select required id=\"dependent-gender\" value=\"\" class=\"purple-format\" name=\"Request.Dependents").concat(depNum, ".Sex\"> <option value=\"\" disabled selected class=\"placeholder\">Gender</option> <option value=\"male\">Male</option> <option value=\"female\">Female</option> </select> <p class=\"header\">Health Information</p><input type=\"text\" placeholder=\"Age\" required id=\"dependent-age\" class=\"age\" name=\"Request.Dependents").concat(depNum, ".Age\" onkeyup=\"automask();\" minlength=\"1\" maxlength=\"3\"> <input type=\"text\" placeholder=\"Height\" required id=\"dependent-height\" class=\"height\" name=\"Request.Dependents").concat(depNum, ".Height\" onfocus=\"(this.placeholder='0&lsquo; 00&ldquo;')\" onblur=\"(this.placeholder='Height')\" onkeyup=\"automask();\" minlength=\"2\" maxlength=\"6\"> <input type=\"text\" placeholder=\"Weight\" required id=\"dependent-weight\" class=\"weight\" name=\"Request.Dependents").concat(depNum, ".Weight\" onkeyup=\"automask();\" minlength=\"2\" maxlength=\"4\"> <input type=\"text\" placeholder=\"Primary Care Physician (First Name)\" required id=\"dependent-pcp-first-name\" name=\"Request.Dependents").concat(depNum, ".PcpFirstName\" minlength=\"2\" maxlength=\"128\"> <input type=\"text\" placeholder=\"Primary Care Physician (Last Name)\" required id=\"dependent-pcp-last-name\" name=\"Request.Dependents").concat(depNum, ".PcpLastName\" minlength=\"2\" maxlength=\"128\"> <div class=\"question\"> <p>Are you an established patient?</p><select required id=\"dependent-question-1\" value=\"\" class=\"purple-format question\" name=\"Request.Dependents").concat(depNum, ".IsEstablishedPatient\"> <option value=\"\" disabled selected class=\"placeholder\">Choose</option> <option value=\"true\">Yes</option> <option value=\"false\">No</option> </select> <div class=\"clear\"></div></div><div class=\"question\"> <p>Have you been declined for insurance due to health reasons within the past 18 months?</p><select required id=\"dependent-question-2\" value=\"\" class=\"purple-format question\" name=\"Request.Dependents").concat(depNum, ".HasBeenDeclined\"> <option value=\"\" disabled selected class=\"placeholder\">Choose</option> <option value=\"true\">Yes</option> <option value=\"false\">No</option> </select> <div class=\"clear\"></div></div><div class=\"question\"> <p>Do you have hospital, major medical, group health, government or medical insurance coverage that will overlap during the duration of this coverage?</p><select required id=\"dependent-question-3\" value=\"\" class=\"purple-format question\" name=\"Request.Dependents").concat(depNum, ".HasInsuranceOverlap\"> <option value=\"\" disabled selected class=\"placeholder\">Choose</option> <option value=\"true\">Yes</option> <option value=\"false\">No</option> </select> <div class=\"clear\"></div></div><div class=\"question\"> <p>If you are female, are you now pregnant, or if you are male, are you an expectant parent?</p><select required id=\"dependent-question-4\" value=\"\" class=\"purple-format question\" name=\"Request.Dependents").concat(depNum, ".IsExpectantParent\"> <option value=\"\" disabled selected class=\"placeholder\">Choose</option> <option value=\"true\">Yes</option> <option value=\"false\">No</option> </select> <div class=\"clear\"></div></div><div class=\"question\"> <p>Do you weigh more than 300 pounds if male or more than 250 pounds if female?</p><select required id=\"dependent-question-5\" value=\"\" class=\"purple-format question\" name=\"Request.Dependents").concat(depNum, ".IsOverweight\"> <option value=\"\" disabled selected class=\"placeholder\">Choose</option> <option value=\"true\">Yes</option> <option value=\"false\">No</option> </select> <div class=\"clear\"></div></div><div class=\"question\"> <p>In the past five years, have you taken medication for or been advised, consulted, tested, diagnosed, treated or hospitalized or recommended for treatment by a physician for any of the following: heart or circulatory system disorder, including heart attack or stroke; insulin-dependent diabetes; cancer or tumors; disorder of the blood, including hemophilia or leukemia; kidney or liver disorder; mental or nervous conditions or disorders; alcoholism or alcohol abuse; drug abuse, addiction or dependency; organ transplant; emphysema; Crohn\u2019s disease, ulcerative colitis or hepatitis?</p><select required id=\"dependent-question-6\" value=\"\" class=\"purple-format question\" name=\"Request.Dependents").concat(depNum, ".HasSeriousHealthCondition\"> <option value=\"\" disabled selected class=\"placeholder\">Choose</option> <option value=\"true\">Yes</option> <option value=\"false\">No</option> </select> <div class=\"clear\"></div></div><div class=\"question\"> <p>Have you ever been diagnosed or treated by a physician for acquired immune deficiency syndrome (AIDS) or AIDS-related complex (ARC), or have you in the past five years tested positive for HIV virus or other immune disorders?</p><select required id=\"dependent-question-7\" value=\"\" class=\"purple-format question\" name=\"Request.Dependents").concat(depNum, ".HasImmuneDisorder\"> <option value=\"\" disabled selected class=\"placeholder\">Choose</option> <option value=\"true\">Yes</option> <option value=\"false\">No</option> </select> <div class=\"clear\"></div></div></div>");
      var codeSignatureBlock = "<div class=\"codeBlock\"> <input type=\"text\" placeholder=\"Signature of Dependent (ONLY if to be insured and 18 years or older)\" required id=\"dependent-agreement-signature\" name=\"Request.Dependents".concat(depNum, ".AgreementSignature\" minlenght=\"2\" maxlength=\"128\"/> <input type=\"text\" placeholder=\"Date of Sign\" required id=\"dependent-agreement-signature-date\" name=\"Request.Dependents").concat(depNum, ".AgreementSignatureDate\" class=\"date\" onfocus=\"(this.placeholder='MM-DD-YYYY')\" onblur=\"(this.placeholder='Date of Sign')\" minlength=\"8\" maxlength=\"10\"/> </div>");
      var codeSignatureBlock2 = "<div class=\"codeBlock2\"> <input type=\"text\" placeholder=\"Signature of Dependent\" required id=\"dependent-authorization-signature\" name=\"Request.Dependents".concat(depNum, ".AuthorizationSignature\" minlength=\"2\" maxlength=\"128\"> <input type=\"text\" placeholder=\"Date of Sign\" required id=\"dependent-authorization-signature-date\" name=\"Request.Dependents").concat(depNum, ".AuthorizationSignatureDate\" class=\"date\" onfocus=\"(this.placeholder='MM-DD-YYYY')\" onblur=\"(this.placeholder='Date of Sign')\" minlength=\"8\" maxlength=\"10\"> </div>");
      dependentBlock.insertAdjacentHTML('beforeend', codeBlock);
      dependentSignatureBlock.insertAdjacentHTML('beforeend', codeSignatureBlock);
      dependentSignatureBlock2.insertAdjacentHTML('beforeend', codeSignatureBlock2);
    } // let difference = amount - countDiv;
    // for (i = 0; i < amount; i++) {
    // 	amountArray.push(i);
    // 	const depNum = (`[${amountArray[i]}]`);
    // 	if ( amount > countDiv ) {
    // 		let x = 0;
    // 		do {
    // 			x += 1;
    // 			let codeBlock = `<div class="codeBlock"> <p class="header">Dependent Personal Information</p><input type="text" placeholder="First Name" required id="dependent-first-name" name="Request.Dependents${depNum}.FirstName" minlength="2" maxlength="128"> <input type="text" placeholder="MI" class="optional" id="dependent-MI" name="Request.Dependents${depNum}.MiddleName" maxlength="1"> <input type="text" placeholder="Last Name" required id="dependent-last-name" name="Request.Dependents${depNum}.LastName" minlength="2" maxlength="128"> <input type="text" placeholder="SSN" required id="dependent-SSN" class="SSN" name="Request.Dependents${depNum}.Ssn" onkeyup="automask();" minlength="9" maxlength="9"> <input type="text" placeholder="Birthday" required id="dependent-birthday" class="date" name="Request.Dependents${depNum}.Birthdate" onfocus="(this.placeholder='MM-DD-YYYY')" onblur="(this.placeholder='Birthday')" onkeyup="automask();" minlength="8" maxlength="10"> <select required id="dependent-gender" value="" class="purple-format" name="Request.Dependents${depNum}.Sex"> <option value="" disabled selected class="placeholder">Gender</option> <option value="male">Male</option> <option value="female">Female</option> </select> <p class="header">Health Information</p><input type="text" placeholder="Age" required id="dependent-age" class="age" name="Request.Dependents${depNum}.Age" onkeyup="automask();" minlength="1" maxlength="3"> <input type="text" placeholder="Height" required id="dependent-height" class="height" name="Request.Dependents${depNum}.Height" onfocus="(this.placeholder='0&lsquo; 00&ldquo;')" onblur="(this.placeholder='Height')" onkeyup="automask();" minlength="2" maxlength="6"> <input type="text" placeholder="Weight" required id="dependent-weight" class="weight" name="Request.Dependents${depNum}.Weight" onkeyup="automask();" minlength="2" maxlength="4"> <input type="text" placeholder="Primary Care Physician (First Name)" required id="dependent-pcp-first-name" name="Request.Dependents${depNum}.PcpFirstName" minlength="2" maxlength="128"> <input type="text" placeholder="Primary Care Physician (Last Name)" required id="dependent-pcp-last-name" name="Request.Dependents${depNum}.PcpLastName" minlength="2" maxlength="128"> <div class="question"> <p>Are you an established patient?</p><select required id="dependent-question-1" value="" class="purple-format question" name="Request.Dependents${depNum}.IsEstablishedPatient"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Have you been declined for insurance due to health reasons within the past 18 months?</p><select required id="dependent-question-2" value="" class="purple-format question" name="Request.Dependents${depNum}.HasBeenDeclined"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Do you have hospital, major medical, group health, government or medical insurance coverage that will overlap during the duration of this coverage?</p><select required id="dependent-question-3" value="" class="purple-format question" name="Request.Dependents${depNum}.HasInsuranceOverlap"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>If you are female, are you now pregnant, or if you are male, are you an expectant parent?</p><select required id="dependent-question-4" value="" class="purple-format question" name="Request.Dependents${depNum}.IsExpectantParent"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Do you weigh more than 300 pounds if male or more than 250 pounds if female?</p><select required id="dependent-question-5" value="" class="purple-format question" name="Request.Dependents${depNum}.IsOverweight"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>In the past five years, have you taken medication for or been advised, consulted, tested, diagnosed, treated or hospitalized or recommended for treatment by a physician for any of the following: heart or circulatory system disorder, including heart attack or stroke; insulin-dependent diabetes; cancer or tumors; disorder of the blood, including hemophilia or leukemia; kidney or liver disorder; mental or nervous conditions or disorders; alcoholism or alcohol abuse; drug abuse, addiction or dependency; organ transplant; emphysema; Crohn’s disease, ulcerative colitis or hepatitis?</p><select required id="dependent-question-6" value="" class="purple-format question" name="Request.Dependents${depNum}.HasSeriousHealthCondition"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div><div class="question"> <p>Have you ever been diagnosed or treated by a physician for acquired immune deficiency syndrome (AIDS) or AIDS-related complex (ARC), or have you in the past five years tested positive for HIV virus or other immune disorders?</p><select required id="dependent-question-7" value="" class="purple-format question" name="Request.Dependents${depNum}.HasImmuneDisorder"> <option value="" disabled selected class="placeholder">Choose</option> <option value="yes">Yes</option> <option value="no">No</option> </select> <div class="clear"></div></div></div>`;
    // 			let codeSignatureBlock = `<div class="codeBlock"> <input type="text" placeholder="Signature of Dependent (ONLY if to be insured and 18 years or older)" required id="dependent-agreement-signature" name="Request.Dependents${depNum}.AgreementSignature" minlenght="2" maxlength="128"/> <input type="text" placeholder="Date of Sign" required id="dependent-agreement-signature-date" name="Request.Dependents${depNum}.AgreementSignatureDate" class="date" onfocus="(this.placeholder='MM-DD-YYYY')" onblur="(this.placeholder='Date of Sign')" minlength="8" maxlength="10"/> </div>`;
    // 			let codeSignatureBlock2 = `<div class="codeBlock2"> <input type="text" placeholder="Signature of Dependent" required id="dependent-authorization-signature" name="Request.Dependents${depNum}.AuthorizationSignature" minlength="2" maxlength="128"> <input type="text" placeholder="Date of Sign" required id="dependent-authorization-signature-date" name="Request.Dependents${depNum}.AuthorizationSignatureDate" class="date" onfocus="(this.placeholder='MM-DD-YYYY')" onblur="(this.placeholder='Date of Sign')" minlength="8" maxlength="10"> </div>`;
    // 			dependentBlock.insertAdjacentHTML('beforeend',codeBlock);
    // 			dependentSignatureBlock.insertAdjacentHTML('beforeend',codeSignatureBlock);
    // 			dependentSignatureBlock2.insertAdjacentHTML('beforeend',codeSignatureBlock2);
    // 			x++;
    // 		} while (x < amountArray.length);
    // 	} else {
    // 		let x = 0;
    // 		do {
    // 			x += 1;
    // 			dependentBlock.removeChild(dependentBlock.lastChild);
    // 			dependentSignatureBlock.removeChild(dependentSignatureBlock.lastChild);
    // 			dependentSignatureBlock2.removeChild(dependentSignatureBlock2.lastChild);
    // 			x++;
    // 		} while (x < difference)
    // 	}
    // }

  };

  if (amount.length < 1) {
    matchBox();
  } else if (amount.length > 0 && amount <= 10) {
    colorize();
    matchBox();
  }
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
  } else if (amount > 10 || amount === '0') {
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
};

var sendCoverage = function sendCoverage() {
  var networkDeductible = document.getElementById('network-deductible');
  var outNetworkDeductible = document.getElementById('out-network-deductible');
  var networkOOP = document.getElementById('network-OOP');
  var outNetworkOOP = document.getElementById('out-network-OOP');
  var coverageTable = document.getElementById('coverage-table').firstChild;
  var tableChoice = document.getElementById('coverage-table-select').value;

  if (coverageTable.classList.contains('single')) {
    if (tableChoice === 'A') {
      networkDeductible.value = 1000;
      outNetworkDeductible.value = 2000;
      networkOOP.value = 2000;
      outNetworkOOP.value = 4000;
    } else if (tableChoice === 'B') {
      networkDeductible.value = 2000;
      outNetworkDeductible.value = 4000;
      networkOOP.value = 4000;
      outNetworkOOP.value = 8000;
    } else if (tableChoice === 'C') {
      networkDeductible.value = 5000;
      outNetworkDeductible.value = 10000;
      networkOOP.value = 10000;
      outNetworkOOP.value = 20000;
    } else if (tableChoice === 'D') {
      networkDeductible.value = 7500;
      outNetworkDeductible.value = 15000;
      networkOOP.value = 15000;
      outNetworkOOP.value = 30000;
    }
  } else if (coverageTable.classList.contains('family')) {
    if (tableChoice === 'A') {
      networkDeductible.value = 2000;
      outNetworkDeductible.value = 4000;
      networkOOP.value = 4000;
      outNetworkOOP.value = 8000;
    } else if (tableChoice === 'B') {
      networkDeductible.value = 4000;
      outNetworkDeductible.value = 8000;
      networkOOP.value = 8000;
      outNetworkOOP.value = 16000;
    } else if (tableChoice === 'C') {
      networkDeductible.value = 10000;
      outNetworkDeductible.value = 20000;
      networkOOP.value = 20000;
      outNetworkOOP.value = 40000;
    } else if (tableChoice === 'D') {
      networkDeductible.value = 1500;
      outNetworkDeductible.value = 30000;
      networkOOP.value = 30000;
      outNetworkOOP.value = 60000;
    }
  }
}; //agent form progress function


var addAgent = function addAgent() {
  var codeBlock = '<div class="codeBlock"> <p class="header">I certify that:<\/p><p class="bullet">• All answers provided in this application were completed by or provided by the applicant.<\/p><p class="bullet">• I have reviewed this enrollment form to ensure that all required items have been completed.<\/p><p class="bullet">• I am not aware of any information not disclosed on this enrollment form relating to the health, habits or reputation of any person listed on this enrollment form, which might have a bearing on the risk.<\/p><p class="header">Agent / Broker Information<\/p><input type="text" placeholder="Full Name" required id="agent-name" name="agent-name" minlength="1" maxlength="128"/> <input type="text" placeholder="ID# / Code" required id="agent-ID" class="agent-ID" name="agent-ID" onfocus="(this.placeholder=\'000000\')" onblur="(this.placeholder=\'ID# / Code\')" onkeyup="automask();" minlength="1" maxlength="6"/> <input type="text" placeholder="Agency" required id="agent-agency" name="agent-agency" minlength="1" maxlength="256"/> <br><input type="text" placeholder="Home Phone" required id="agent-phone" name="agent-phone" class="phone" onkeyup="automask();"> <input type="email" placeholder="Email" required id="agent-email" name="agent-email" minlength="1" maxlength="256" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"> <input type="text" placeholder="Producer Signature" required id="producer-signature" name="producer-signature" minlength="2" maxlength="128"/> <input type="text" placeholder="Date of Sign" required id="producer-signature-date" name="producer-signature-date" class="date" onfocus="(this.placeholder=\'MM-DD-YYYY\')" onblur="(this.placeholder=\'Date of Sign\')" onkeyup="automask();" minlength="8" maxlength="10"/> <div class="agree"> <label><input type="checkbox" value="check" required id="producer-signature-valid" name="producer-signature-valid">I agree that the typed names above shall be treated as valid signatures for all purposes of this form.</label> <\/div></div>';
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