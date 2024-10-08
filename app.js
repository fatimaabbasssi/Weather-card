var userinput = prompt(`Let's know about weather
                        Sunny -x- Cloudy -x- Windy
                        Fog -x- Cold -x- Rainy

                        ~Choose any one option from below~
    `)

    if(userinput.toLowerCase() === 'sunny'){
        document.write(`<div class="card card-s animate__animated animate__backInDown" style="width: 18rem;">
  <img src="https://i.gifer.com/Iqp.gif" class="card-img-top" alt="...">
  <div class="card-body">
  <h2>Sunny Weather</h2> <i class="fa-solid fa-sun suny"></i>
  
    <p class="card-text text-center">Sunny weather days are days when there are very little or no clouds in the sky. 
    <i class="fa-regular fa-face-smile"></i></p>
  </div>
</div>`)
    }

    else if(userinput.toLowerCase() === 'cloudy'){
        document.write(`<div class="card card-c animate__animated animate__backInDown" style="width: 18rem;">
            <img src="https://media0.giphy.com/media/yLrLQPkyz7dLYshVhO/giphy.gif?cid=6c09b952e2fa72xc3g2ph9nk46n5rhl7st6t76nga90ydpbu&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" class="card-img-top" alt="...">
            <div class="card-body">
            <i class="fa-solid fa-cloud-sun cloudy"></i>
            <h2>Cloudy Weather</h2>
              <p class="card-text text-center">It's so full of clouds that you can't see the sun.
              <i class="fa-regular fa-face-smile"></i></p>
            </div>
          </div>`)
    }
    
    else if(userinput.toLowerCase() === 'windy'){
        document.write(`<div class="card card-w animate__animated animate__backInDown" style="width: 18rem;">
            <img src="https://clipart-library.com/image_gallery/n807194.gif" class="card-img-top" alt="...">
            <div class="card-body">
            <i class="fa-solid fa-wind windy"></i>
            <h2>Windy Weather</h2>
              <p class="card-text text-center"> The presence of strong winds, which are moving air masses, often accompanied by gusts.
              <i class="fa-regular fa-face-smile"></i></p>
            </div>
          </div>`)
    }
 
    else if(userinput.toLowerCase() === 'fog'){
        document.write(`<div class="card card-f animate__animated animate__backInDown" style="width: 18rem;">
            <img src="https://media3.giphy.com/media/QiLKY0lTDJZ6M/200_d.gif" class="card-img-top" alt="...">
            <div class="card-body">
            <h2>Fog Weather</h2>
            <i class="fa-solid fa-smog fog"></i>
              <p class="card-text text-center">Embrace the misty vibes. Wandering through a foggy dream. Into the haze we go. Foggy days, cozy nights.
              <i class="fa-regular fa-face-smile"></i></p>
            </div>
          </div>`)
    }


    else if(userinput.toLowerCase() === 'cold'){
        document.write(`<div class="card card-cd animate__animated animate__backInDown" style="width: 18rem;">
            <img src="https://www.icegif.com/wp-content/uploads/2022/12/icegif-1330.gif" class="card-img-top" alt="...">
            <div class="card-body">
            <i class="fa-regular fa-snowflake flake"></i>
            <h2>Cold Weather</h2>
              <p class="card-text text-center"> "Let us love winter, for it is the spring of genius."
               <i class="fa-regular fa-face-smile"></i> </p> 
              
            </div>
          </div>`)
    }


    else if(userinput.toLowerCase() === 'rainy'){
        document.write(`<div class="card card-r animate__animated animate__backInDown" style="width: 18rem;">
            <img src="https://i.pinimg.com/originals/0e/1f/83/0e1f8367d81e6f161d198a0b5011a62f.gif" class="card-img-top" alt="...">
            <div class="card-body">
            <i class="fa-solid fa-umbrella rain"></i>
            <h2>Rainy Weather</h2>
              <p class="card-text text-center">Rain is grace; rain is the sky descending to the earth; without rain, there would be no life.
              <i class="fa-regular fa-face-smile"></i></p>
            </div>
          </div>`)
    }

    else{
        document.write(`<h1 class="elseh">Invalid input try again</h1>
           
            <div><img class="totoro"
             src="https://imgcdn.sigstick.com/cAQC9MXGvOS922ESium5/4-1.png"
             alt=""></div>
            `)
    }

    // <div class="line"></div>