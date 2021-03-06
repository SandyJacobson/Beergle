# Beergle

Project Name

Beergle

https://sandyjacobson.github.io/Beergle/

Project Description

My app is the internets newest Search Engine for finding you the right beer! Many people enjoy beer, but don't know enough to branch out into the vast world of Beer. They stick to what they know. With Beergle, you can expand your horizons to tastes you've never experienced. Just enter in your search paramters and we'll do the rest. If you like Ipas, we can find some for you. If you like lagers, we can find that too. If you have a new brewery in mind and want to learn more, just pop it into the search bar and you'll have it in no time!

API and Data Sample

Punk API - https://punkapi.com/documentation/v2

```json
{
        "id": 1,
        "name": "Buzz",
        "tagline": "A Real Bitter Experience.",
        "first_brewed": "09/2007",
        "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 4.5,
        "ibu": 60,
        "target_fg": 1010,
        "target_og": 1044,
        "ebc": 20,
        "srm": 10,
        "ph": 4.4,
        "attenuation_level": 75,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 64,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Maris Otter Extra Pale",
                    "amount": {
                        "value": 3.3,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.2,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.4,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Fuggles",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Fuggles",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Spicy chicken tikka masala",
            "Grilled chicken quesadilla",
            "Caramel toffee cake"
        ],
        "brewers_tips": "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
        "contributed_by": "Sam Mason <samjbmason>"
    }
```

Wireframes

https://wireframe.cc/Gyiwc4

MVP


- My main MVP is to have a functioning website. 


- Aside from the flexbox/mediaquery requirements. I want to incorporate a CSS structure that is simple and pretty.


- I want people to be able to search for their favorite beverages and have easy and digestible data populate for them.


PostMVP


- Add a compare feature


- Incorporate a second API to make the website search library include cocktails and spirits, as well as beer.


Project Schedule

| Day | Deliverable | Status | 
| --- | :---: |  :---: |
|August 17| Project Approval/Build HTML Boilerplate/Begin building core javscript structure | Complete |
|August 18| Continue building out core app functionality/Start on CSS | Complete |
|August 19| Finish up CSS/Media queries/Begin Post MVP features | Complete |
|August 20| Continue Post MVP features/Compare feature/Incorporate second API | Complete |
|August 21| Presentations | Incomplete |

Priority Matrix

https://app.lucidchart.com/invitations/accept/b2815a7f-b1e5-495e-8f99-a7a3eeeb66f3

Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML BP | H | 2hrs| 1hr | 1hr  |
| Core JS Code | H | 3hrs| 2hrs | 2hrs |
| Core JS Code | H | 3hrs| 2hrs | 2hrs |
| Debugging JS | H | 3hrs| 3hrs | 3hrs |
| Debugging JS | H | 3hrs| 3hrs| 3hrs |
| Basic CSS | H | 3hrs| 3hrs | 3hrs |
| Basic CSS | H | 3hrs| 4hrs | 4hrs |
| Mediaqueries | H | 3hrs| 3hrs | 3hrs |
| Mediaqueries | H | 3hrs| 3hrs | 3hrs |
| High level CSS | M | 3hrs| 1.5hrs | 1.5hrs |
| High level CSS | M | 3hrs| 1.5hrs | 1.5hrs |
| Compare Function | L | 3hrs| 0 | 0 |
| Compare Function | L | 3hrs| 0 | 0 |
| 2nd API | L | 3hrs| 3hrs | 3hrs |
| 2nd API | L | 3hrs| 3hrs | 3hrs |
| Total | H | 3hrs| 33hrs | 33hrs |



Code Snippet

<!-- const clearInput = document.querySelector('input')
  clearInput.value = "" -->

--- App was working well and I hit MVP but my input bar wouldn't clear when you searched. I spent a lot of time googling and on stackoverflow, trying different options. With some help from Raul I was able to get it working, and the most important part is how close I was to getting it on my own. If I had unlimited time and tried it own my own for a bit longer, I probably would have come to the answer without help. But it is good to know how close I was. 

Change Log

I actually had no changes in my project. Everything thankfully went according to how I planned it. I did not have time to get to a compare feature and spent a very long time searching for a second API, but the were Post MVPs and I don't consider them changes. 
