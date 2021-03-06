design pattern

Soild principle in js

code review process
prime / 

react & redux


S.O.L.I.D. STANDS FOR:
S — Single responsibility principle
O — Open closed principle
L — Liskov substitution principle
I — Interface segregation principle
D — Dependency Inversion principle

ref https://addyosmani.com/resources/essentialjsdesignpatterns/book/
JavaScript Design Patterns
    Constructor Pattern
    Module Pattern ***
    Revealing Module Pattern
    Singleton Pattern ***  // private & Public
    Observer Pattern
    Mediator Pattern
    Prototype Pattern ***
    Command Pattern
    Facade Pattern
    Factory Pattern
    Mixin Pattern
    Decorator Pattern
    Flyweight Pattern

-----------------------------------------------------------
    Module Pattern *******
    var testModule = (function () {
 
    var counter = 0;
    
    return {
    
        incrementCounter: function () {
        return counter++;
        },
    
        resetCounter: function () {
        console.log( "counter value prior to reset: " + counter );
        counter = 0;
        }
    };
    
    })();
    
    // Usage:
    
    // Increment our counter
    testModule.incrementCounter();
    
    // Check the counter value and reset
    // Outputs: counter value prior to reset: 1
    testModule.resetCounter();