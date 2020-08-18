const getBeers = async (beer) => {
  const url = `https://api.punkapi.com/v2/beers?beer_name=${beer}`
  try {
  const res = await axios.get(url)
    console.log(res)
    console.log(res.data)
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
  
  //getBeers()

  const showBeerData = (data) => {
    data.forEach(beers => {
      let BeerInfo = `
      <img id='poster' src="${beers.image_url}" alt='${beers.name}' style="width: 400px; height: auto;">
      <h2 id='title'>${beers.name}</h2>
      <h4 id='abv'>${beers.abv}<h4>
      <h5 id='food-pairing'>${beers.food_pairing}<h5>
      `
      document.querySelector('.beer-list').insertAdjacentHTML('beforeend', BeerInfo)
    })
  }

  const submit = document.querySelector('#search')

submit.addEventListener('click', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('input').value

  getBeers(inputValue)
})

const removeBeer = () => {
  const oldPic = document.querySelector('.beer-list')
  while (oldPic.lastChild) {
    oldPic.removeChild(oldPic.lastChild)
  }
}