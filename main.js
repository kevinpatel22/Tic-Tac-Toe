document.addEventListener('DOMContentLoaded', function () {
  const squares = document.querySelectorAll('.square');
  const goModal = document.querySelector('.game-over-modal');
  const winnerModal = document.querySelector('.winner-modal');
  const winnerText = document.querySelector('.winnerText');
  const resetBtns = document.querySelectorAll('.resetBtn');
  var mark = 'X';
  var winner = false;

  function isWinner() {
    let r1 = [squares[0], squares[1], squares[2]];
    let r2 = [squares[3], squares[4], squares[5]];
    let r3 = [squares[6], squares[7], squares[8]];
    let c1 = [squares[0], squares[3], squares[6]];
    let c2 = [squares[1], squares[4], squares[7]];
    let c3 = [squares[2], squares[5], squares[8]];
    let d1 = [squares[0], squares[4], squares[8]];
    let d2 = [squares[2], squares[4], squares[6]];
    let winningCombos = [r1, r2, r3, c1, c2, c3, d1, d2];

    winningCombos.forEach(combo => {
      let tally = 0;
      combo.forEach(square => {
        if (square.innerText === 'X') {
          tally += 1;
        } else if (square.innerText === 'O') {
          tally -= 1;
        }
      })

      if (tally === 3) {
        winner = 'X';
        winnerDeclared = true;
      } else if (tally === -3) {
        winner = 'O';
        winnerDeclared = true;
      }
    })
  }


  function isGameOver() {
    let x = document.querySelectorAll('.mark-x').length;
    let o = document.querySelectorAll('.mark-o').length;

    console.log
    isWinner();
    if (winner === 'X' || winner === 'O') {
      winnerText.innerText = `${winner} has won the game!`
      winnerModal.style.display = 'flex';
    } else if (x + o >= 9) {
      goModal.style.display = 'flex';
    }

  }

  function squareTaken(sq) {
    return sq.classList.contains('mark-x') || sq.classList.contains('mark-o')
  }

  squares.forEach(square => {
    square.addEventListener('click', () => {
      if (squareTaken(square)) {
        alert("That square is taken, choose another square!");
      } else {
        if (mark === 'X') {
          console.log(mark);
          square.classList.add('mark-x');
          square.firstElementChild.innerText = mark;
          mark = 'O';
        } else {
          console.log(mark);
          square.classList.add('mark-o');
          square.firstElementChild.innerText = mark;
          mark = 'X';
        }
        isGameOver();
      };
    })
  })

  resetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      squares.forEach(square => {
        square.firstElementChild.innerText = "";
        square.classList.remove('mark-x');
        square.classList.remove('mark-o');
        goModal.style.display = "none";
        winnerModal.style.display = "none";
        winner = false;
      })
    })
  })

});