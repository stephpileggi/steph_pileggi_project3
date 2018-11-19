//lure choices
const lures = {
    spinner: [
        {
            weather: 'hot',
            fish: 'bass',
            bottom: 'rocky'  
        },
        {
            weather: 'hot',
            fish: 'trout',
            bottom: 'gravel'
        }  
    ],
    jig: [
        {
            weather: 'hot',
            fish: 'pike',
            bottom: 'sandy'
        },
        {
            weather: 'hot',
            fish: 'pickeral',
            bottom: 'rocky'
        }
    ],
    hardbait: [
        {
            weather: 'cold',
            fish: 'bass',
            bottom: 'rocky'
        },
        {
            weather: 'overcast',
            fish: 'bass',
            bottom: 'rocky'  
        }
    ]
};

$(function() {
//user will submit the choices
    $('form').on('submit', function(event) {
        event.preventDefault();
    //capture values of clicked radio buttons
        const weatherChoice = $('input[type=radio][name=weather]:checked').val();
        const fishChoice = $('input[type=radio][name=fish]:checked').val();
        const floorChoice = $('input[type=radio][name=floor]:checked').val();


        // for each key in the lure object 
        for(lure in lures) {
            //loop over all options in array
            for(let i=0; i < lures[lure].length; i++) {
        //check if weather === userChoices.weather
                const lureWeather = lures[lure][i].weather;
                const lureFish = lures[lure][i].fish;
                const lureFloor = lures[lure][i].bottom;
                


                if(lureWeather === weatherChoice && lureFish === fishChoice && lureFloor === floorChoice) {
                    const matchingLure = lure;
   
                    $('.results').html(`<p>You should use a ${matchingLure}</p>, <img src="images/${matchingLure}.png" alt="${matchingLure} lure" />`);
                    return; 
                } else {
                    $('.results').html(`<p>You should use a worm</p>, <img src="images/worm.png" alt="worm" />`);
                }                    
            }//ends for loop (array)
        }//ends for in loop (object)
    })//ends event listener

});//end code
