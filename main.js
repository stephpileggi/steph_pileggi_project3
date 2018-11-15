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
            bottom: 'rocks'
        }
    ],

};

$(function() {
//user will submit the choices
    $('form').on('submit', function(event) {
        event.preventDefault();
//capture values of clicked radio buttons
    const weatherChoice = $('input[type=radio][name=weather]:checked').val();
    const fishChoice = $('input[type=radio][name=fish]:checked').val();
    const floorChoice = $('input[type=radio][name=floor]:checked').val();


//for each key in the lure object 
// for(lure in lures){
//     // console.log('lure in lures', lures[lure]);
//     //loop over all options in array
//     for(let i=0; i < lures[lure].length; i++) {
//         // console.log(i);
//         const possibilities = lures[lure][i];
//         //check if weather === userChoices.weather
//         const lureWeather = lures[lure][i].weather;
//         const lureFish = lures[lure][i].fish;
//         const lureFloor = lures[lure][i].bottom;

//         // console.log('info from object',lureWeather);
//         // console.log('user choice',weatherChoice);
//         if(lureWeather === weatherChoice) {
//             if (lureFish === fishChoice) {
//                 if(lureFloor === floorChoice) {
//                     // console.log('yes');      
//                 }
//             }   
//         } 
//     }
// }

    for(lure in lures.spinner) {
        console.log(lures.spinner[lure]);
        for(let i = 0; i < lure.spinner[lure])
    }
  


    })

});//end code