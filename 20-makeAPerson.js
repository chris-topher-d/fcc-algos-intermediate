var Person = function(firstAndLast) {
  let firstName = firstAndLast.split(' ')[0];
  let lastName = firstAndLast.split(' ')[1];

  this.getFullName = function() {
    return firstName + ' ' + lastName;
  };

  this.getFirstName = function() {
    return firstName;
  }

  this.getLastName = function() {
    return lastName;
  }

  this.setFirstName = function(first) {
    firstName = first;
  }

  this.setLastName = function(last) {
    lastName = last;
  }

  this.setFullName = function(firstAndLast) {
    firstName = firstAndLast.split(' ')[0];
    lastName = firstAndLast.split(' ')[1];
  }
};

var bob = new Person('Bob Ross');
let output = bob.getFullName(); // "Bob Ross"

console.log(output);
