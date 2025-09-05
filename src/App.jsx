import { useState } from "react"

function App() {

  const [count, setCount] = useState(0)


  function Aumentar() {
    setCount(count + 1)
  }

  function Diminuir() {
    setCount(count - 1)
  }

  function Zerar() {
    setCount(0)
  }

  return(
    <div className="contador">

      <h1>Contador</h1>
      <h2>{count}</h2>


      <button onClick={Aumentar} className="Aumentar">+</button>
      <button onClick={Diminuir} className="Diminuir">-</button>
      <button onClick={Zerar} className="Zerar">Zero</button>

    </div>
  )
}

export default App