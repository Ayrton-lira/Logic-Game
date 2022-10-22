'use strict'

let secretNumber = Math.trunc(Math.random() * 20 + 1)

document.querySelector('.buttonCheck').addEventListener('click', function () {
  // let message = document.querySelector('.motivation').textContent
  let score = Number(document.querySelector('.score').textContent)
  let highscore = Number(document.querySelector('.highscore').textContent)
  let check = Number(document.querySelector('.check').value)

  if (check >= 1 && check <= 20) {
    if (check === secretNumber) {
      document.querySelector('.motivation').textContent = 'Correct Answer !!!! '
      document.querySelector('.SecretNumber').textContent = secretNumber
      document.querySelector('body').style.backgroundColor = '#adff2f'
      if (score > highscore) {
        highscore = score
        document.querySelector('.highscore').textContent = highscore
      }
    } else if (check < secretNumber) {
      document.querySelector('.motivation').textContent = 'Try a bigger one !! '
      score--
      document.querySelector('.score').textContent = score
    } else if (check > secretNumber) {
      document.querySelector('.motivation').textContent = 'Try a small one !! '
      score--
      document.querySelector('.score').textContent = score
    }
  } else {
    document.querySelector('.motivation').textContent = 'Try between 1 and 20 '
    score--
    document.querySelector('.score').textContent = score
  }
  // console.log(check)
  // console.log(message)
  // console.log(score)
  // console.log(highscore)
  // console.log(secretNumber)
})

document.querySelector('.buttonAgain').addEventListener('click', function () {
  let score = Number(document.querySelector('.score').textContent)
  let highscore = Number(document.querySelector('.highscore').textContent)
  document.querySelector('body').style.backgroundColor = '#000000ec'
  document.querySelector('.score').textContent = 20
  document.querySelector('.motivation').textContent = 'Start guessing'
  document.querySelector('.check').value = ''
  document.querySelector('.SecretNumber').textContent = '?'
  secretNumber = Math.trunc(Math.random() * 20 + 1)
})
