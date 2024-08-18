import { Button } from "@/ui/button"
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App p-10">
      <h1 className="type-h1 text-slate-800 mb-10">How business banking <br/> used to be, just better.</h1>
      <Button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </Button>
    </div>
  )
}

export default App
