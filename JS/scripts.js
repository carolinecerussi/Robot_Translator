function inputNumArray(input) {
  const inputNum = [];
  for (let i=1; i <= input; i++) {
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
      whatBotSays.push("Blooop")
    } else if (num.includes(1)){
      whatBotSays.push("Beeep")
    } else if (num.includes(4)){
      whatBotSays.push("Skurrr")
    } else if (num.includes(5)){
      whatBotSays.push("Dzooo")
    } else {
      whatBotSays.push("Shooop")
    }
  })
  return whatBotSays.join(" ... ");
  ;
}

//UI LOGIC/// 

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const input = $("input").val();
    const output = whatBotSees(input);
    $("#saysBack").html(output);
    $("#numberEnt").text(input);
    $(".welcomeRobot").hide();
    $("form").hide();
    $(".result").show();
  });
});
