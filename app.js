// Async function to call API and assign data
const getBeers = async (beer) => {
  const url = `https://api.punkapi.com/v2/beers?beer_name=${beer}`
  try {
  const res = await axios.get(url)
    let data = res.data
    removeBeer()
    showBeerData(data)
    return res
    } catch (error) {
  console.log(`Error: ${error}`)
    } finally {
  console.log('Enjoy your Beer!')
    }
  }

  //DOM Manipulation function - creating new elements and appending API data to the DOM
  const showBeerData = (data) => {
    data.forEach(beers => {
      let BeerInfo = `
      <div class='beer'>
        <h2 id='title'>${beers.name}</h2>
        <h4 id='abv'>${beers.abv}% abv</h4>
        <h5 id='food-pairing'>Food pairing: ${beers.food_pairing}</h5>
        <img id='beer-image' src="${beers.image_url}" alt='${beers.name}'>
      </div>
      `
      document.querySelector('.beer-list').insertAdjacentHTML('beforeend', BeerInfo)
    })
  }

// Adding my event listener on the click to display search results
  const submit = document.querySelector('#search')

submit.addEventListener('click', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('input').value
  
  getBeers(inputValue)
  const clearInput = document.querySelector('input')
  clearInput.value = ""
})


// Function to clear previous results, once a new search is triggered
const removeBeer = () => {
  const oldPic = document.querySelector('.beer-list')
  while (oldPic.lastChild) {
    oldPic.removeChild(oldPic.lastChild)
  }
}


