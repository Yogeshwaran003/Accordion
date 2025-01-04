import './App.css'
import Faq from './faq.jsx'
const data=[
  {Questons:"I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",Answer:" an echo. 😊"},
  {Questons:"The more you take, the more you leave behind. What am I?",Answer:"is footsteps! 😊"},
  {Questons:"What has to be broken before you can use it?",Answer:"an egg! 🥚"},
  {Questons:"I’m tall when I’m young, and I’m short when I’m old. What am I?",Answer:"a candle! 🕯️"},
]
function App() {

  return (
    <>
      <Faq data={data} />
    </>
  )
}

export default App
