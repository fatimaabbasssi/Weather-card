var userinput = prompt(`Let's know about your weather
                        Sunny -x- Cloudy -x- Windy
                        Fog -x- Cold -x- Rainy

                        ~Chose any one from below~
    `)

    if(userinput === 'sunny' || userinput === 'Sunny' ){
        document.write(`<div class="card card-s" style="width: 18rem;">
  <img src="https://static.vecteezy.com/system/resources/thumbnails/033/352/730/small/sunny-sky-background-sunny-day-background-sun-wallpaper-sunny-sky-landscape-blue-sky-background-summer-sky-background-ai-generative-photo.jpg" class="card-img-top" alt="...">
  <div class="card-body">
  <h2>Sunny Weather</h2> <i class="fa-solid fa-sun suny"></i>
  
    <p class="card-text text-center">Sunny weather days are days when there are very little or no clouds in the sky. 
    <i class="fa-regular fa-face-smile"></i></p>
  </div>
</div>`)
    }

    else if(userinput === 'cloudy' || userinput === 'Cloudy'){
        document.write(`<div class="card card-c " style="width: 18rem;">
            <img src="https://www.app.com.pk/wp-content/uploads/2023/08/kp-weather.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <i class="fa-solid fa-cloud-sun cloudy"></i>
            <h2>Cloudy Weather</h2>
              <p class="card-text text-center">It's so full of clouds that you can't see the sun.
              <i class="fa-regular fa-face-smile"></i></p>
            </div>
          </div>`)
    }
    
    else if(userinput === 'windy' || userinput === 'Windy'){
        document.write(`<div class="card card-w" style="width: 18rem;">
            <img src="https://t3.ftcdn.net/jpg/04/99/96/18/360_F_499961849_RTPjXHECUHBi4X9ZrpVTxb30Esx0bvIq.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <i class="fa-solid fa-wind windy"></i>
            <h2>Windy Weather</h2>
              <p class="card-text text-center"> The presence of strong winds, which are moving air masses, often accompanied by gusts.
              <i class="fa-regular fa-face-smile"></i></p>
            </div>
          </div>`)
    }
 
    else if(userinput === 'fog' || userinput === 'Fog'){
        document.write(`<div class="card card-f" style="width: 18rem;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtU-ASavp6-HoYzOdtITrCjP5TBG1pqdAmfUPr-PNxEpWfFo7mxSiv7NEBq9WLQ3caMkI&usqp=CAU" class="card-img-top" alt="...">
            <div class="card-body">
            <h2>Fog Weather</h2>
            <i class="fa-solid fa-smog fog"></i>
              <p class="card-text text-center">Embrace the misty vibes. Wandering through a foggy dream. Into the haze we go. Foggy days, cozy nights.
              <i class="fa-regular fa-face-smile"></i></p>
            </div>
          </div>`)
    }


    else if(userinput === 'cold' || userinput === 'Cold'){
        document.write(`<div class="card card-cd" style="width: 18rem;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnRGdLrI_kPO4d_j7JfRJE2p1YTz8Ln0rVrg&s" class="card-img-top" alt="...">
            <div class="card-body">
            <i class="fa-regular fa-snowflake flake"></i>
            <h2>Cold Weather</h2>
              <p class="card-text text-center"> "Let us love winter, for it is the spring of genius."
               <i class="fa-regular fa-face-smile"></i> </p> 
              
            </div>
          </div>`)
    }


    else if(userinput === 'rainy' || userinput === 'Rainy'){
        document.write(`<div class="card card-r" style="width: 18rem;">
            <img src="https://static.vecteezy.com/system/resources/previews/042/146/565/non_2x/ai-generated-beautiful-rain-day-view-photo.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <i class="fa-solid fa-umbrella rain"></i>
            <h2>Rainy Weather</h2>
              <p class="card-text text-center">Rain is grace; rain is the sky descending to the earth; without rain, there would be no life.
              <i class="fa-regular fa-face-smile"></i></p>
            </div>
          </div>`)
    }








    else{
        document.write(`<h1 class="elseh">Please try one more</h1><i class="fa-regular fa-face-smile smiley"></i>
            <div class="line"></div>
            `)
    }