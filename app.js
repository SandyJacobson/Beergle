const getBeers = async (beer_name) => {
  const url = `https://api.punkapi.com/v2/beers/${beer_name}`
  try {
  const res = await axios.get(url)
    console.log(res)
    console.log(res.data)
    let data = res.data
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
      <img id="poster" src="${beers.image_url}" alt='${beers.name}' style="width: 400px; height: auto;">
      <h2 id='title'>${beers.name}</h2>
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