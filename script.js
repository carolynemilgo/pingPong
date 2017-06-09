$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();
    var number = $("input#inputNumber").val();
    for (var i = 1; i <= number; i++) {
      if (i % 15 === 0) {
          $("#results").append('<li>'+"Ping-Pong"+'</li>');
        }
        else if (i % 3 === 0) {
          $("#results").append('<li>'+"Ping"+'</li>');
        }
        else if (i % 5 === 0) {
          $("#results").append('<li>'+"Pong"+'</li>');
        }
        else {
          $("#results").append('<li>'+i+ '</li>');
        }
      }

  });
});

//
//
// var number;
// for (var i = 0; i <= number; i++) {
//   if (i % 15 === 0) {
//       console.log("Ping-Pong")
//     }
//     else if (i % 3 === 0) {
//         console.log("Ping")
//     }
//     else if (i % 5 === 0) {
//       console.log("Pong")
//     }
//     else {
//       console.log(i)
//     }
//   }
