/* Add your JavaScript to this file */
window.onload = (event) => { 
    let re = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/); 
    let HeroImage = document.querySelector(".overview-hero-image > img");
    let Status = document.querySelector(".message");
    
    HeroImage.setAttribute("src","./Meditation.svg"); 

    let Cards = document.querySelectorAll(".card > img");
    Cards[0].setAttribute("src","./ai.svg");
    Cards[1].setAttribute("src","./fitness.svg");
    Cards[2].setAttribute("src","./lifestyle.svg");

    StoriesImages = document.querySelectorAll("section.stories > div > article > img");
    StoriesImages[0].setAttribute("src","./tamarcus-brown-29pFbI_D1Sc-unsplash.jpg");
    StoriesImages[1].setAttribute("src","./national-cancer-institute-PP5nO5gcLdA-unsplash.jpg");

    let Footer = document.querySelector("footer > div > p");
    Footer.innerHTML = "Copyright 2020, Tajay Edwards";

    let Button = document.querySelector("button");
    Button.addEventListener("click", function(event){ event.preventDefault();  });
    Button.addEventListener("click", ()=> { 
        
         let Input = document.getElementById("email").value; 
         
         let state = re.test(Input); 
         if(state ){
             Status.innerHTML = `Thank you! Your email address ${Input}`;

         }else{
            Status.innerHTML = `Please enter a valid email address `;

         }});
        
}


 