let mainData = document.querySelector('.main-data')



const pendingTripData = () => {
  mainData.innerHTML += `
  <div class="pending">
  <p>pending trips:</p>
  // <p>${method that shows all pending trips}</p>
  </div>
  `
}

const annualCostData = () => {
  mainData.innerHTML += `
  <div class="annual-cost">
  <p>annual cost:</p>
  // <p>${method that shows total spent on trips}</p>
  </div>
  `
}

export {pendingTripData, annualCostData}
