PlaySound = function () {
    var audio = new Audio('song.mp3');
    audio.loop = false;
    audio.play(); 
}

const alarmSubmit = document.getElementById("setAlarm");
alarmSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log("This is Working");
    const alarm = document.getElementById("alarm");
    // alarm.value= "<h1>This is Prajwal</h1>"
    let alarmDetail = new Date(alarm.value);
    console.log(`setting alarm of ${alarmDetail}`);
    let currentDate = new Date();
    let timeout = alarmDetail - currentDate;
    if(timeout >= 0){
        console.log(alarmDetail - currentDate);
        setTimeout(()=>{
            console.log("Ringing");
            PlaySound();
        }, timeout)
    }
})