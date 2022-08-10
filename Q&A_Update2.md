What is Closure?
-- Closure are stateful functions,
-- Closure are function inside function and it makes a normal function stateful.
Ex
	function 	(){
		var x = 0;
		x++;
	}
	function ClouserFuction(){
		var x = 0
		function Increment(){
			x++;
		}
		return {
			Increment
		}
	}
	Simplefunction()
	Simplefunction()
	var ref = ClouserFuction();
		ref.Increment() // x is 1
		ref.Increment() // x is 2

What is the need of clousre?
--	To create self contained functions, self contained code, to create self contained module.
-- Solve global variable 
	function ClouserFuction(){
		var x;
		function Increment(){
			x++;
		}
		function GetXValue(){
			return x;
		}
		function Init(){
			x = 0;
		}
		Init(); // private to the closure
		return {
			Increment
		}
	}
self contained module. ===> self contained State ==>  Solve global variable 
It also help us to expose what you want.