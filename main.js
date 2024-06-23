import './style.css'

const timer=()=>{
  let min=5;
  let count=min*60;
  setInterval(()=>{
    let minutes=Math.floor(count/60);
    let secs=count%60;
    console.log(`${minutes}:${secs}`);
    count--
  },1000)
}
// timer();