/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

/*********************************************************************
* WEB222 SSA ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ Assignment 01
* I declare that this assignment is my own work in accordance with
* Seneca Academic Policy. No part of this assignment has been
* copied manually or electronically from any other source 
* (including web sites) or distributed to other students.
*
* Name: Huy Lam Student ID: 114705162 Date: 18/09/2018
*
*********************************************************************/ 

// Task 1 - Format and Display Student Info

function displayStudentInfo(name, program, courses, hasJob) {
  
  var course2;
  
  if (hasJob ===  false|| hasJob === undefined) {
    hasJob =" I don't have a part-time job" ;
  } else { 
    hasJob =" I do have a part-time job" ;
  }
  if (courses > 1) {
    course2 = "courses ";
  }
  else {
    course2 = "course ";
  }
  return "My name is "+name+" and I'm in the "+program+" program. I'm taking "+courses+" "+course2+"this semester, and "+hasJob+ ".";
}



// Task 2 - Calculate Age Statistics

function calculateAgeStats (birthDate) {
  var date1 = new Date('September 15, 2018');
  var milli = date1 - birthDate;
  var hour = (milli / (1000 * 60 * 60));
  
  return "You were born on "+birthDate+"and have been alive for approximately "+hour+" hours.";
}



// Task 3 - Convert Temperatures From/To Celsius & Fahrenheit

function convertTempFrom(value, scale) {
  if (scale === "c" || scale === "C" || scale === undefined) {
     var celsius = value * 1.8 + 32;
     celsius = Math.round(celsius);
     return ""+celsius+" F";
  }

  if (scale === "f" || scale === "F") {
      var fahren = (value-32)*5/9;
      fahren = Math.round(fahren);
      return ""+fahren+" C";
  }

  if (scale !== "c" || scale !== "C" || scale !== "f" || scale !== "F") {
    	return "ERROR: Unknown Scale - "+scale+"";
  }
}



// Task 4 - Display Odd/Even for all numbers in range

function displayOddEven(rangeStart, rangeEnd) {
  for (rangeStart; rangeStart <= rangeEnd; rangeStart++) {
    if (rangeStart % 2 === 0) {
      console.log(rangeStart+" is even");
    }
    else {
      console.log(rangeStart+" is odd");
    }
  }
}



// Task 5 - Find Largest Number

var findLargest = function() {
  var largest = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] > largest) {
      largest = arguments[i];
    }
  }
  return largest;
};



// Task 6 - Average Evaluator

function calculateAverage () {
  var sum = 0;
  var count = 0;
  var average;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    count++;;
  }
  average = sum / count;
  return average;
}



// Task 7 - Class Grades

function formatGrades() {
  var letterFromScore = function(Number) {
    if (Number >= 50 && Number < 60) {
      return "D";
    }
    if (Number >= 60 && Number < 70) {
      return "C";
    }
    if (Number >= 70 && Number < 80) {
      return "B";
    }
    if (Number >= 80 && Number < 90) {
      return "A";
    }
    if (Number >= 90) {
      return "A+";
    }
  };
  
  var grade = [];
  for (var i = 0; i < arguments.length; i++) {
    grade[i] = letterFromScore(arguments[i]);
  }
  console.log(grade);
}