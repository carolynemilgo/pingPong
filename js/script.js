    var num;
    for (var i = 1; i <= num; i++) {
      if (i % 15 === 0) {
        console.log("Ping Pong");
      }
      else if (i % 3 === 0) {
        console.log("Ping");
      }
      else if (i % 5 === 0) {
        console.log("Pong");
      }
      else{
        console.log(num);
      };
