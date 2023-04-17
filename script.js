(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 3: Create an object called 'helloSpeaker'
  var helloSpeaker = {};

  // STEP 4: Attach the 'speak' function to the helloSpeaker object
  helloSpeaker.speak = function (name) {
    console.log("Hello " + name);
  }

  // STEP 5: Expose the 'helloSpeaker' object to the global scope
  window.helloSpeaker = helloSpeaker;

  // STEP 7: Create an object called 'byeSpeaker'
  var byeSpeaker = {};

  // STEP 8: Attach the 'speak' function to the byeSpeaker object
  byeSpeaker.speak = function (name) {
    console.log("Good Bye " + name);
  }

  // STEP 9: Expose the 'byeSpeaker' object to the global scope
  window.byeSpeaker = byeSpeaker;

  // STEP 10: Loop over the names array and say either 'Hello' or "Good Bye"
  for (var i = 0; i < names.length; i++) {

    // STEP 11: Retrieve the first letter of the current name in the loop
    var firstLetter = names[i].charAt(0).toLowerCase();

    // STEP 12: Compare the 'firstLetter' to lower case 'j'
    if (firstLetter === 'j') {
      // If the same, call byeSpeaker's 'speak' method
      byeSpeaker.speak(names[i]);
    } else {
      // Otherwise, call helloSpeaker's 'speak' method
      helloSpeaker.speak(names[i]);
    }
  }
})();
