import React from 'react'
import { useState } from 'react'
import './app.scss'
import TapSound from "./assets/audio/TapSound.wav"
import LimitSound from "./assets/audio/LimitSound.wav"



function App() {
  const amount = document.querySelector('.amount')
  const dhikr = document.querySelector(".dhikr")

  // const []

  const [count, doCount] = useState(0)


  const playTapAudio = () => {
    const audio = new Audio(TapSound)
    audio.play()
  }

  const playLimitAudio = () => {
    const audio = new Audio(LimitSound)
    audio.play()
  }




  const addUp = () => {
    doCount(0)
    if(count < 99){
      doCount(count + 1)
      amount.innerHTML = count
      console.log(count);
      playTapAudio()
    }
    else{
      doCount(0)
      amount.innerHTML = count
    }


    if(count === 33){
      dhikr.textContent = "ٱلْحَمْدُ لِلَّٰهِِ"
      playLimitAudio()
    }
    if(count === 66){
      dhikr.textContent = "الله أكبر"
      playLimitAudio()
    }
    
  }

  


    
  
  
  
  
  
  function reset(){
      window.location.reload();
    }
  

  return (
    <>
      <div className="hero">
        <div className="wrapper">
          <div className="top">
            <div className="dhikr">سُبْحَانَ اللَّه</div>
            <button className="reset" onClick={reset}>Reset
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
            </svg> */}
            </button>
          </div>
          <div className="counter">
            <div className="amount">{count}</div>
            <button className="countBtn" onClick={addUp}>Zikr Me</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
