function inputNumArray(input) {
  const inputNum = [];
  for (let i=0; i <= input; i++) {
    inputNum.push(i);
  }
  const newNumArray = inputNum.toString().split(",");
  return newNumArray;

}

//first test works! now function for creating bot "

function whatBotSees(input) {
  const newNumArray = inputNumArray(input);
  let whatBotSays = [];
  newNumArray.forEach(function(num) {
    if (num.includes(3)) {
      whatBotSays.push("Deeeee")
    } else if (num.includes(2)) {
      whatBotSays.push("Boop!")
    } else if (num.includes(1)){
      whatBotSays.push("Beep!")
    } else {
      whatBotSays.push("Skirrr")
    }
  })
  return whatBotSays.join(" ... ");
  ;
}

//Loop works in jsFiddle console!//


//UI LOGIC/// 

$(document).ready(function() {
  $("form#robot").submit(function(event) {
    event.preventDefault();
    const input = $("#input").val();
    const output = whatBotSees(input);
    $("#saysBack").html(output);
    $("#numberEnt").text(input);
    $("#robotPage").hide();
    $("#submitResult").show();
  });
});
