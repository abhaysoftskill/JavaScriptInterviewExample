Why JS is Dynamic Language?
-- It mean that data types of the variable can be change during runtime.
	var x = 0; // number
		x++; // incremental number
		x = "Text"; //string
		x = true; // boolean

Different Datatypes in JS
	-Premative & Object
	Premative
		-string
		-number
		-boolean
		-null
		-undefined
	
	Object
		Object //object
		Array

What is Undefined Datatype?
	Undefined mean the variable has be declared but no value is assigned to it
	ex= var y = 10;
		var z = 20;
		var x; // x is declared not assign

What is null?
--	Null indicates intentional absence of data. Null indicates its not Zero, its not Empty, it just absense of data
		var n = null;

What is Hosting?
-- 	It's mechanism where variable and function declaration are moved to top of the scope.
	ex	console.log(y); // undefined
		var y = 10;

Explain global variable?
-- Global variable are those variables which are accessible through out the web page or throught the documents
	ex 	var x = 10;
		function fun1(){
			console.log(x); // 10
		}
		fun();

What are issues with global variable?
-- It can make application very hard to debugg and buggy;

What happen if declare a variable with out var keyboard,
	- It become Global.
	ex	var x = 10;
		function fun1(){
			y = 100; // y is a hoisted to global variable
			console.log(x); // 10
		}
		fun();
		console.log(y); // 100

What us "Use Strict" ?
--	Use Strict is a directive which says stricly check if variable are defined using the var keyword or not
	If it is not define var keyword it will through and exception Reference error
	"use strict"
		var x = 10;
		function fun1(){
			y = 100; // through an exception Reference error, y is not defined
			console.log(x); // 10
		}
		fun();
		console.log(y); 

How can we handle/avoid global variable.
-- Global variable are needed in project but we can avoid global variables.
We can put global variable in proper namespace
	var global = {};
	global.connectionstring = "Test"
or
	closure and module pattern
	ex var myGlobal = (function(){
		var connectionstring = "Test"
		function GetConnection(){
			return connectionstring;
		}
		return{
			GetConnection
		}
	})();