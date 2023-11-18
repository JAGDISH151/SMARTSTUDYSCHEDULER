var display = document.getElementById("screen");
var buttons = document.getElementsByClassName("button");
  
  Array.prototype.forEach.call(buttons, function(button) {
  button.addEventListener("click", function() {
    if (button.textContent != "=" && 
    button.textContent != "C" && 
    button.textContent != "x" && 
    button.textContent != "÷" && 
    button.textContent != "√" && 
    button.textContent != "x ²" && 
    button.textContent != "%" && 
    button.textContent != "<=" && 
    button.textContent != "±" && 
    button.textContent != "sin" && 
    button.textContent != "cos" && 
    button.textContent != "tan" && 
    button.textContent != "log" && 
    button.textContent != "ln" && 
    button.textContent != "x^" && 
    button.textContent != "x !" && 
    button.textContent != "π" && 
    button.textContent != "e" && 
    button.textContent != "rad" 
    && button.textContent != "∘") {
      display.value += button.textContent;
    } else if (button.textContent === "=") {
      equals();
    } else if (button.textContent === "C") {
      clear();
    } else if (button.textContent === "x") {
      multiply();
    } else if (button.textContent === "÷") {
      divide();
    } else if (button.textContent === "±") {
      plusMinus();
    } else if (button.textContent === "<=") {
      backspace();
    } else if (button.textContent === "%") {
      percent();
    } else if (button.textContent === "π") {
      pi();
    } else if (button.textContent === "x ²") {
      square();
    } else if (button.textContent === "√") {
      squareRoot();
    } else if (button.textContent === "sin") {
      sin();
    } else if (button.textContent === "cos") {
      cos();
    } else if (button.textContent === "tan") {
      tan();
    } else if (button.textContent === "log") {
      log();
    } else if (button.textContent === "ln") {
      ln();
    } else if (button.textContent === "x^") {
      exponent();
    } else if (button.textContent === "x !") {
      factorial();
    } else if (button.textContent === "e") {
      exp();
    } else if (button.textContent === "rad") {
      radians();
    } else if (button.textContent === "∘") {
      degrees();
    }
  });
});


function syntaxError() {
  if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
    display.value == "Syntax Error";
  }
}


function equals() {
  if ((display.value).indexOf("^") > -1) {
    var base = (display.value).slice(0, (display.value).indexOf("^"));
    var exponent = (display.value).slice((display.value).indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    display.value = eval(display.value)
    checkLength()
    syntaxError()
  }
}

function clear() {
  display.value = "";
}

function backspace() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function multiply() {
  display.value += "*";
}

function divide() {
  display.value +=  "/";
}

function plusMinus() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}

function factorial() {
  var number = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    var number = 1;
    for (var i = display.value; i > 0; i--) {
      number *=  i;
    }
    display.value = number;
  }
}

function pi() {
  display.value = (display.value * Math.PI);
}

function square() {
  display.value = eval(display.value * display.value);
}

function squareRoot() {
  display.value = Math.sqrt(display.value);
}

function percent() {
  display.value = display.value / 100;
}

function sin() {
  display.value = Math.sin(display.value);
}

function cos() {
  display.value = Math.cos(display.value);
}

function tan() {
  display.value = Math.tan(display.value);
}

function log() {
  display.value = Math.log10(display.value);
}

function ln() {
  display.value = Math.log(display.value);
}

function exponent() {
  display.value += "^";
}

function exp() {
  display.value = Math.exp(display.value);
}

function radians() {
  display.value = display.value * (Math.PI / 180);
}

function degrees() {
  display.value = display.value * (180 / Math.PI);
}





let timer1, timer2, timer3, timer4, timer5, timer6, timer7, timer8, timer9, timer10;
let startBtn1 = document.getElementById('start1'); 
let stopBtn1 = document.getElementById('stop1'); 
let resetBtn1 = document.getElementById('reset1'); 

let hour1 = 0o0;
let minute1 = 0o0; 
let second1 = 0o0; 
let count1 = 0o0; 

startBtn1.addEventListener('click', function () { 
	timer1 = true; 
	stopWatch1(); 
}); 

stopBtn1.addEventListener('click', function () { 
	timer1 = false; 
}); 

resetBtn1.addEventListener('click', function () { 
	timer1 = false; 
	hour1 = 0; 
	minute1 = 0; 
	second1 = 0; 
	count1 = 0; 
	document.getElementById('hr1').innerHTML = "00"; 
	document.getElementById('min1').innerHTML = "00"; 
	document.getElementById('sec1').innerHTML = "00"; 
	document.getElementById('count1').innerHTML = "00"; 
}); 

function stopWatch1() { 
	if (timer1) { 
		count1++; 

		if (count1 == 100) { 
			second1++; 
			count1 = 0; 
		} 

		if (second1 == 60) { 
			minute1++; 
			second1 = 0; 
		} 

		if (minute1 == 60) { 
			hour1++; 
			minute1 = 0; 
			second1 = 0; 
		} 

		let hrString1 = hour1; 
		let minString1 = minute1; 
		let secString1 = second1; 
		let countString1 = count1; 

		if (hour1 < 10) { 
			hrString1 = "0" + hrString1; 
		} 

		if (minute1 < 10) { 
			minString1 = "0" + minString1; 
		} 

		if (second1 < 10) { 
			secString1 = "0" + secString1; 
		} 

		if (count1 < 10) { 
			countString1 = "0" + countString1; 
		} 

		document.getElementById('hr1').innerHTML = hrString1; 
		document.getElementById('min1').innerHTML = minString1; 
		document.getElementById('sec1').innerHTML = secString1; 
		document.getElementById('count1').innerHTML = countString1; 
		setTimeout(stopWatch1, 10); 
	} 
}

let startBtn2 = document.getElementById('start2'); 
let stopBtn2 = document.getElementById('stop2'); 
let resetBtn2 = document.getElementById('reset2'); 

let hour2 = 0o0;
let minute2 = 0o0; 
let second2 = 0o0; 
let count2 = 0o0; 

startBtn2.addEventListener('click', function () { 
	timer2 = true; 
	stopWatch2(); 
}); 

stopBtn2.addEventListener('click', function () { 
	timer2 = false; 
}); 

resetBtn2.addEventListener('click', function () { 
	timer2 = false; 
	hour2 = 0; 
	minute2 = 0; 
	second2 = 0; 
	count2 = 0; 
	document.getElementById('hr2').innerHTML = "00"; 
	document.getElementById('min2').innerHTML = "00"; 
	document.getElementById('sec2').innerHTML = "00"; 
	document.getElementById('count2').innerHTML = "00"; 
}); 

function stopWatch2() { 
	if (timer2) { 
		count2++; 

		if (count2 == 100) { 
			second2++; 
			count2 = 0; 
		} 

		if (second2 == 60) { 
			minute2++; 
			second2 = 0; 
		} 

		if (minute2 == 60) { 
			hour2++; 
			minute2 = 0; 
			second2 = 0; 
		} 

		let hrString2 = hour2; 
		let minString2 = minute2; 
		let secString2 = second2; 
		let countString2 = count2; 

		if (hour2 < 10) { 
			hrString2 = "0" + hrString2; 
		} 

		if (minute2 < 10) { 
			minString2 = "0" + minString2; 
		} 

		if (second2 < 10) { 
			secString2 = "0" + secString2; 
		} 

		if (count2 < 10) { 
			countString2 = "0" + countString2; 
		} 

		document.getElementById('hr2').innerHTML = hrString2; 
		document.getElementById('min2').innerHTML = minString2; 
		document.getElementById('sec2').innerHTML = secString2; 
		document.getElementById('count2').innerHTML = countString2; 
		setTimeout(stopWatch2, 10); 
	} 
}

let startBtn3 = document.getElementById('start3'); 
let stopBtn3 = document.getElementById('stop3'); 
let resetBtn3 = document.getElementById('reset3'); 

let hour3 = 0o0;
let minute3 = 0o0; 
let second3 = 0o0; 
let count3 = 0o0; 

startBtn3.addEventListener('click', function () { 
	timer3 = true; 
	stopWatch3(); 
}); 

stopBtn3.addEventListener('click', function () { 
	timer3 = false; 
}); 

resetBtn3.addEventListener('click', function () { 
	timer3 = false; 
	hour3 = 0; 
	minute3 = 0; 
	second3 = 0; 
	count3 = 0; 
	document.getElementById('hr3').innerHTML = "00"; 
	document.getElementById('min3').innerHTML = "00"; 
	document.getElementById('sec3').innerHTML = "00"; 
	document.getElementById('count3').innerHTML = "00"; 
}); 

function stopWatch3() { 
	if (timer3) { 
		count3++; 

		if (count3 == 100) { 
			second3++; 
			count3 = 0; 
		} 

		if (second3 == 60) { 
			minute3++; 
			second3 = 0; 
		} 

		if (minute3 == 60) { 
			hour3++; 
			minute3 = 0; 
			second3 = 0; 
		} 

		let hrString3 = hour3; 
		let minString3 = minute3; 
		let secString3 = second3; 
		let countString3 = count3; 

		if (hour3 < 10) { 
			hrString3 = "0" + hrString3; 
		} 

		if (minute3 < 10) { 
			minString3 = "0" + minString3; 
		} 

		if (second3 < 10) { 
			secString3 = "0" + secString3; 
		} 

		if (count3 < 10) { 
			countString3 = "0" + countString3; 
		} 

		document.getElementById('hr3').innerHTML = hrString3; 
		document.getElementById('min3').innerHTML = minString3; 
		document.getElementById('sec3').innerHTML = secString3; 
		document.getElementById('count3').innerHTML = countString3; 
		setTimeout(stopWatch3, 10); 
	} 
}

let startBtn4 = document.getElementById('start4'); 
let stopBtn4 = document.getElementById('stop4'); 
let resetBtn4 = document.getElementById('reset4'); 

let hour4 = 0o0;
let minute4 = 0o0; 
let second4 = 0o0; 
let count4 = 0o0; 

startBtn4.addEventListener('click', function () { 
	timer4 = true; 
	stopWatch4(); 
}); 

stopBtn4.addEventListener('click', function () { 
	timer4 = false; 
}); 

resetBtn4.addEventListener('click', function () { 
	timer4 = false; 
	hour4 = 0; 
	minute4 = 0; 
	second4 = 0; 
	count4 = 0; 
	document.getElementById('hr4').innerHTML = "00"; 
	document.getElementById('min4').innerHTML = "00"; 
	document.getElementById('sec4').innerHTML = "00"; 
	document.getElementById('count4').innerHTML = "00"; 
}); 

function stopWatch4() { 
	if (timer4) { 
		count4++; 

		if (count4 == 100) { 
			second4++; 
			count4 = 0; 
		} 

		if (second4 == 60) { 
			minute4++; 
			second4 = 0; 
		} 

		if (minute4 == 60) { 
			hour4++; 
			minute4 = 0; 
			second4 = 0; 
		} 

		let hrString4 = hour4; 
		let minString4 = minute4; 
		let secString4 = second4; 
		let countString4 = count4; 

		if (hour4 < 10) { 
			hrString4 = "0" + hrString4; 
		} 

		if (minute4 < 10) { 
			minString4 = "0" + minString4; 
		} 

		if (second4 < 10) { 
			secString4 = "0" + secString4; 
		} 

		if (count4 < 10) { 
			countString4 = "0" + countString4; 
		} 

		document.getElementById('hr4').innerHTML = hrString4; 
		document.getElementById('min4').innerHTML = minString4; 
		document.getElementById('sec4').innerHTML = secString4; 
		document.getElementById('count4').innerHTML = countString4; 
		setTimeout(stopWatch4, 10); 
	} 
}

let startBtn5 = document.getElementById('start5'); 
let stopBtn5 = document.getElementById('stop5'); 
let resetBtn5 = document.getElementById('reset5'); 

let hour5 = 0o0;
let minute5 = 0o0; 
let second5 = 0o0; 
let count5 = 0o0; 

startBtn5.addEventListener('click', function () { 
	timer5 = true; 
	stopWatch5(); 
}); 

stopBtn5.addEventListener('click', function () { 
	timer5 = false; 
}); 

resetBtn5.addEventListener('click', function () { 
	timer5 = false; 
	hour5 = 0; 
	minute5 = 0; 
	second5 = 0; 
	count5 = 0; 
	document.getElementById('hr5').innerHTML = "00"; 
	document.getElementById('min5').innerHTML = "00"; 
	document.getElementById('sec5').innerHTML = "00"; 
	document.getElementById('count5').innerHTML = "00"; 
}); 

function stopWatch5() { 
	if (timer5) { 
		count5++; 

		if (count5 == 100) { 
			second5++; 
			count5 = 0; 
		} 

		if (second5 == 60) { 
			minute5++; 
			second5 = 0; 
		} 

		if (minute5 == 60) { 
			hour5++; 
			minute5 = 0; 
			second5 = 0; 
		} 

		let hrString5 = hour5; 
		let minString5 = minute5; 
		let secString5 = second5; 
		let countString5 = count5; 

		if (hour5 < 10) { 
			hrString5 = "0" + hrString5; 
		} 

		if (minute5 < 10) { 
			minString5 = "0" + minString5; 
		} 

		if (second5 < 10) { 
			secString5 = "0" + secString5; 
		} 

		if (count5 < 10) { 
			countString5 = "0" + countString5; 
		} 

		document.getElementById('hr5').innerHTML = hrString5; 
		document.getElementById('min5').innerHTML = minString5; 
		document.getElementById('sec5').innerHTML = secString5; 
		document.getElementById('count5').innerHTML = countString5; 
		setTimeout(stopWatch5, 10); 
	} 
}

let startBtn6 = document.getElementById('start6'); 
let stopBtn6 = document.getElementById('stop6'); 
let resetBtn6 = document.getElementById('reset6'); 

let hour6 = 0o0;
let minute6 = 0o0; 
let second6 = 0o0; 
let count6 = 0o0; 

startBtn6.addEventListener('click', function () { 
	timer6 = true; 
	stopWatch6(); 
}); 

stopBtn6.addEventListener('click', function () { 
	timer6 = false; 
}); 

resetBtn6.addEventListener('click', function () { 
	timer6 = false; 
	hour6 = 0; 
	minute6 = 0; 
	second6 = 0; 
	count6 = 0; 
	document.getElementById('hr6').innerHTML = "00"; 
	document.getElementById('min6').innerHTML = "00"; 
	document.getElementById('sec6').innerHTML = "00"; 
	document.getElementById('count6').innerHTML = "00"; 
}); 

function stopWatch6() { 
	if (timer6) { 
		count6++; 

		if (count6 == 100) { 
			second6++; 
			count6 = 0; 
		} 

		if (second6 == 60) { 
			minute6++; 
			second6 = 0; 
		} 

		if (minute6 == 60) { 
			hour6++; 
			minute6 = 0; 
			second6 = 0; 
		} 

		let hrString6 = hour6; 
		let minString6 = minute6; 
		let secString6 = second6; 
		let countString6 = count6; 

		if (hour6 < 10) { 
			hrString6 = "0" + hrString6; 
		} 

		if (minute6 < 10) { 
			minString6 = "0" + minString6; 
		} 

		if (second6 < 10) { 
			secString6 = "0" + secString6; 
		} 

		if (count6 < 10) { 
			countString6 = "0" + countString6; 
		} 

		document.getElementById('hr6').innerHTML = hrString6; 
		document.getElementById('min6').innerHTML = minString6; 
		document.getElementById('sec6').innerHTML = secString6; 
		document.getElementById('count6').innerHTML = countString6; 
		setTimeout(stopWatch6, 10); 
	} 
}


let startBtn7 = document.getElementById('start7'); 
let stopBtn7 = document.getElementById('stop7'); 
let resetBtn7 = document.getElementById('reset7'); 

let hour7 = 0o0;
let minute7 = 0o0; 
let second7 = 0o0; 
let count7 = 0o0; 

startBtn7.addEventListener('click', function () { 
	timer7 = true; 
	stopWatch7(); 
}); 

stopBtn7.addEventListener('click', function () { 
	timer7 = false; 
}); 

resetBtn7.addEventListener('click', function () { 
	timer7 = false; 
	hour7 = 0; 
	minute7 = 0; 
	second7 = 0; 
	count7 = 0; 
	document.getElementById('hr7').innerHTML = "00"; 
	document.getElementById('min7').innerHTML = "00"; 
	document.getElementById('sec7').innerHTML = "00"; 
	document.getElementById('count7').innerHTML = "00"; 
}); 

function stopWatch7() { 
	if (timer7) { 
		count7++; 

		if (count7 == 100) { 
			second7++; 
			count7 = 0; 
		} 

		if (second7 == 60) { 
			minute7++; 
			second7 = 0; 
		} 

		if (minute7 == 60) { 
			hour7++; 
			minute7 = 0; 
			second7 = 0; 
		} 

		let hrString7 = hour7; 
		let minString7 = minute7; 
		let secString7 = second7; 
		let countString7 = count7; 

		if (hour7 < 10) { 
			hrString7 = "0" + hrString7; 
		} 

		if (minute7 < 10) { 
			minString7 = "0" + minString7; 
		} 

		if (second7 < 10) { 
			secString7 = "0" + secString7; 
		} 

		if (count7 < 10) { 
			countString7 = "0" + countString7; 
		} 

		document.getElementById('hr7').innerHTML = hrString7; 
		document.getElementById('min7').innerHTML = minString7; 
		document.getElementById('sec7').innerHTML = secString7; 
		document.getElementById('count7').innerHTML = countString7; 
		setTimeout(stopWatch7, 10); 
	} 
}


let startBtn8 = document.getElementById('start8'); 
let stopBtn8 = document.getElementById('stop8'); 
let resetBtn8 = document.getElementById('reset8'); 

let hour8 = 0o0;
let minute8 = 0o0; 
let second8 = 0o0; 
let count8 = 0o0; 

startBtn8.addEventListener('click', function () { 
	timer8 = true; 
	stopWatch8(); 
}); 

stopBtn8.addEventListener('click', function () { 
	timer8 = false; 
}); 

resetBtn8.addEventListener('click', function () { 
	timer8 = false; 
	hour8 = 0; 
	minute8 = 0; 
	second8 = 0; 
	count8 = 0; 
	document.getElementById('hr8').innerHTML = "00"; 
	document.getElementById('min8').innerHTML = "00"; 
	document.getElementById('sec8').innerHTML = "00"; 
	document.getElementById('count8').innerHTML = "00"; 
}); 

function stopWatch8() { 
	if (timer8) { 
		count8++; 

		if (count8 == 100) { 
			second8++; 
			count8 = 0; 
		} 

		if (second8 == 60) { 
			minute8++; 
			second8 = 0; 
		} 

		if (minute8 == 60) { 
			hour8++; 
			minute8 = 0; 
			second8 = 0; 
		} 

		let hrString8 = hour8; 
		let minString8 = minute8; 
		let secString8 = second8; 
		let countString8 = count8; 

		if (hour8 < 10) { 
			hrString8 = "0" + hrString8; 
		} 

		if (minute8 < 10) { 
			minString8 = "0" + minString8; 
		} 

		if (second8 < 10) { 
			secString8 = "0" + secString8; 
		} 

		if (count8 < 10) { 
			countString8 = "0" + countString8; 
		} 

		document.getElementById('hr8').innerHTML = hrString8; 
		document.getElementById('min8').innerHTML = minString8; 
		document.getElementById('sec8').innerHTML = secString8; 
		document.getElementById('count8').innerHTML = countString8; 
		setTimeout(stopWatch8, 10); 
	} 
}


let startBtn9 = document.getElementById('start9'); 
let stopBtn9 = document.getElementById('stop9'); 
let resetBtn9 = document.getElementById('reset9'); 

let hour9 = 0o0;
let minute9 = 0o0; 
let second9 = 0o0; 
let count9 = 0o0; 

startBtn9.addEventListener('click', function () { 
	timer9 = true; 
	stopWatch9(); 
}); 

stopBtn9.addEventListener('click', function () { 
	timer9 = false; 
}); 

resetBtn9.addEventListener('click', function () { 
	timer9 = false; 
	hour9 = 0; 
	minute9 = 0; 
	second9 = 0; 
	count9 = 0; 
	document.getElementById('hr9').innerHTML = "00"; 
	document.getElementById('min9').innerHTML = "00"; 
	document.getElementById('sec9').innerHTML = "00"; 
	document.getElementById('count9').innerHTML = "00"; 
}); 

function stopWatch9() { 
	if (timer9) { 
		count9++; 

		if (count9 == 100) { 
			second9++; 
			count9 = 0; 
		} 

		if (second9 == 60) { 
			minute9++; 
			second9 = 0; 
		} 

		if (minute9 == 60) { 
			hour9++; 
			minute9 = 0; 
			second9 = 0; 
		} 

		let hrString9 = hour9; 
		let minString9 = minute9; 
		let secString9 = second9; 
		let countString9 = count9; 

		if (hour9 < 10) { 
			hrString9 = "0" + hrString9; 
		} 

		if (minute9 < 10) { 
			minString9 = "0" + minString9; 
		} 

		if (second9 < 10) { 
			secString9 = "0" + secString9; 
		} 

		if (count9 < 10) { 
			countString9 = "0" + countString9; 
		} 

		document.getElementById('hr9').innerHTML = hrString9; 
		document.getElementById('min9').innerHTML = minString9; 
		document.getElementById('sec9').innerHTML = secString9; 
		document.getElementById('count9').innerHTML = countString9; 
		setTimeout(stopWatch9, 10); 
	} 
}


let startBtn10 = document.getElementById('start10'); 
let stopBtn10 = document.getElementById('stop10'); 
let resetBtn10 = document.getElementById('reset10'); 

let hour10 = 0o0;
let minute10 = 0o0; 
let second10 = 0o0; 
let count10 = 0o0; 

startBtn10.addEventListener('click', function () { 
	timer10 = true; 
	stopWatch10(); 
}); 

stopBtn10.addEventListener('click', function () { 
	timer10 = false; 
}); 

resetBtn10.addEventListener('click', function () { 
	timer10 = false; 
	hour10 = 0; 
	minute10 = 0; 
	second10 = 0; 
	count10 = 0; 
	document.getElementById('hr10').innerHTML = "00"; 
	document.getElementById('min10').innerHTML = "00"; 
	document.getElementById('sec10').innerHTML = "00"; 
	document.getElementById('count10').innerHTML = "00"; 
}); 

function stopWatch10() { 
	if (timer10) { 
		count10++; 

		if (count10 == 100) { 
			second10++; 
			count10 = 0; 
		} 

		if (second10 == 60) { 
			minute10++; 
			second10 = 0; 
		} 

		if (minute10 == 60) { 
			hour10++; 
			minute10 = 0; 
			second10 = 0; 
		} 

		let hrString10 = hour10; 
		let minString10 = minute10; 
		let secString10 = second10; 
		let countString10 = count10; 

		if (hour10 < 10) { 
			hrString10 = "0" + hrString10; 
		} 

		if (minute10 < 10) { 
			minString10 = "0" + minString10; 
		} 

		if (second10 < 10) { 
			secString10 = "0" + secString10; 
		} 

		if (count10 < 10) { 
			countString10 = "0" + countString10; 
		} 

		document.getElementById('hr10').innerHTML = hrString10; 
		document.getElementById('min10').innerHTML = minString10; 
		document.getElementById('sec10').innerHTML = secString10; 
		document.getElementById('count10').innerHTML = countString10; 
		setTimeout(stopWatch10, 10); 
	} 
}

