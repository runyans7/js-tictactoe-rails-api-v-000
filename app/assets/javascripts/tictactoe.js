$(document).ready(function() {
  console.log("DOM READY!");
  attachLIsteners();
})

var currentGame,
  turn = 0,
  win_combinations = [
    [[0,0], [1,0], [2,0]],
    [[0,1], [1,1], [2,1]],
    [[0,2], [1,2], [2,2]],
    [[0,0], [0,1], [0,2]],
    [[1,0], [1,1], [1,2]],
    [[2,0], [2,1], [2,2]],
    [[0,0], [1,1], [2,2]],
    [[0,2], [1,1], [2,0]] 
  ];

function attachLIsteners() {

  // On cell click doTurn method called
  $("td").on("click", function() {
    doTurn(this, event);
  });

}

function doTurn(cell, event) {
  turn ++;
  $(cell).html(playerToken());
}

function playerToken() {
  if (turn % 2 === 0) {
    return "X";
  } else { 
    return "O";
  };
}
