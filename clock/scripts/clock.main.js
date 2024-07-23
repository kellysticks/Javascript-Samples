 const secondHand = document.querySelector('.second-hand');
 const minuteHand = document.querySelector('.minute-hand');
 const hourHand = document.querySelector('.hour-hand')
 const hand = document.querySelector('.hand')

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hour = now.getHours();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const hourDegrees = ((hour / 24) * 360) + 90;
    console.log(seconds)
    if(seconds === 0){
        secondHand.style.transition = 'none';
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    } else{
        secondHand.style.transition = 'all 0.05s';
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    }
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setInterval(setDate, 60 * 1000);