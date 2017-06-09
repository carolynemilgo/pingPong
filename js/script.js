//Business logic
function pingpong(num) {
  var empty = []

  for (var i = 1; i < num; i++) {
    if (i % 15 === 0) {
      empty.push('pingpong')
    } else if
      (i % 3 === 0) {
        empty.push('Ping')
      } else if (i % 5 === 0) {
        empty.push('Pong')
      } else {
        empty.push(i)
      }
    }
    console.log(empty);
    return empty;
  }

//User interface

  $(document).ready(function() {
    $("form#game").submit(function(event) {
      event.preventDefault();
          var num=$("input#inputNumber").val();

      $("#results").text(" ");
      var anotherNum = pingpong(num)

       $("#results").append('<ul>')

       anotherNum.forEach(function(newNum){
          $('#results').append('<li>' + newNum + '</li>')
       })
       $("#results").append('<ul>')

    });
  });
