let selectRank = document.querySelectorAll('.rank-btn')
let btnSubmit = document.querySelector('.submit-btn')

const userSubmit = () => {
  userSelectedRank()
  switchModals()
}
const switchModals = () => {
  let rateModal = document.querySelector('.card')
  let thanksModal = document.querySelector('.thank-you-content')
  rateModal.classList.add('hide-modal')
  thanksModal.classList.add('show-modal')
}

const userSelectedRank = () => {
  let selectRankToDisplay = document.querySelectorAll('.rank-btn')

  for (let i = 0; i < selectRankToDisplay.length; i++) {
    if (selectRankToDisplay[i].classList.contains('rank-btn-selected')) {
      let rankSelected = selectRankToDisplay[i].innerHTML
      document.querySelector('#submitted-rank').innerHTML = rankSelected
    }
  }
}

const removeActiveClass = () => {
  for (const selectRankItem of selectRank) {
    selectRankItem.classList.remove('rank-btn-selected')
  }
}

const handleRankClass = () => {
  for (let i = 0; i < selectRank.length; i++) {
    selectRank[i].addEventListener('click', function () {
      removeActiveClass()
      selectRank[i].classList.add('rank-btn-selected')
    })
  }
}

handleRankClass()

btnSubmit.addEventListener('click', function () {
  let containsRank = document.querySelector('.rank-btn-selected') != null
  if (containsRank) {
    userSubmit()
  }
})