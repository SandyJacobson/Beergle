const getBeers = async () => {
  const url = `https://api.punkapi.com/v2/beers`
  try {
  const res = await axios.get(url)
    console.log(res)
    console.log(res.data)
  } catch (error) {
  console.log(`Error: ${error}`)
  } finally {
  console.log('Enjoy your Beer!')
  }
  }
  
  getBeers()