
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const sendMessage = () => {
    window.parent.postMessage(
      { name: 'conclude', data: 'Custom data passed to the typebot variable' },
      '*'
    )
  }
  return (
    <>
      <button onClick={sendMessage}> teste </button>
    </>
  )
}

export default App
