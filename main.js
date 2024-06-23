import './style.css'

const longBreakBtn=document.querySelector("#long-break-btn")
const shortBreakBtn=document.querySelector("#short-break-btn")
const focusTimeBtn=document.querySelector("#focus-time-btn")

const timerDisplay=document.querySelector("#timer-display")

const settings=document.querySelector("#settings")
const start=document.querySelector("#start")
const restart=document.querySelector("#restart")

const settingsPopup=document.querySelector("#settings-popup")
const cross=document.querySelector("#cross")

const longBreak=document.querySelector("#long-break")
const shortBreak=document.querySelector("#short-break")
const focusTime=document.querySelector("#focus-time")

focusTime.value=25;
shortBreak.value=5;
longBreak.value=15;

let input=focusTime.value;

const whiteNoise=new Audio('./public/whitenoise.mp3')

const timesUp=new Audio('./public/notification.mp3')

focusTimeBtn.addEventListener('click',(e)=>{
  input=focusTime.value;
  timerDisplay.innerHTML=`${input}:00`
});
longBreakBtn.addEventListener('click',()=>{
  input=longBreak.value;
  timerDisplay.innerHTML=`${input}:00`
});
shortBreakBtn.addEventListener('click',()=>{
  input=shortBreak.value;
  timerDisplay.innerHTML=`${input}:00`
});

let timer
timerDisplay.innerHTML=`${input}:00`

// Timer Function
const startCount=(input)=>{
  let min=input;
  let count=min*60;
  whiteNoise.loop=true;
  whiteNoise.play();
  timer=setInterval(()=>{
    let minutes=Math.floor(count/60);
    let secs=count%60;
    secs=secs<10?`0${secs}`:secs;
    timerDisplay.innerHTML=`${minutes}:${secs}`;
    count--
    if(count<0){
      whiteNoise.pause()
      timesUp.play()
      clearInterval(timer)
    };
  },1000)

}

// Popup toggle

settings.addEventListener('click',()=>{
  clearInterval(timer)
  start.innerHTML="Start"
  whiteNoise.pause();
  settingsPopup.style.display="flex"
})
cross.addEventListener('click',()=>{
  settingsPopup.style.display="none"
})

// Settings
focusTime.addEventListener('change',(e)=>{
  timerDisplay.innerHTML=`${focusTime.value}:00`
  input=focusTime.value;
})
shortBreak.addEventListener('change',(e)=>{
  timerDisplay.innerHTML=`${focusTime.value}:00`
})
longBreak.addEventListener('change',(e)=>{
  timerDisplay.innerHTML=`${focusTime.value}:00`
})


//Start and Stop
start.addEventListener('click',(e)=>{
  if(start.innerHTML==='Start'){
    startCount(input)
    start.innerHTML="Stop"
  }    
  
  else{
    start.innerHTML="Start"
    clearInterval(timer)
    whiteNoise.pause()
    timerDisplay.innerHTML=`${input}:00`
  }
  }
)

//Reset
restart.addEventListener('click',(e)=>{
  clearInterval(timer)
  whiteNoise.pause()
  start.innerHTML="Start" 
  timerDisplay.innerHTML=`${focusTime.value}:00`
})


