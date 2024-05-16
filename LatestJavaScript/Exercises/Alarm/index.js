let addAlarm = document.getElementById('addAlarm');
let setAlarm = document.getElementById('setAlarm');
let val;
addAlarm.addEventListener('change', (e) => {
    val = e.target.value;
})
const PlaySound = () => {
    var audio = new Audio('song.mp3');
    audio.loop = false;
    audio.play();
}
setAlarm.addEventListener('click', () => {
    console.log(val);
    addAlarm.setAttribute('disabled', 'true');
    setTimeout(() => {
        addAlarm.removeAttribute('disabled');
        PlaySound();
    }, 2000 * val)
})