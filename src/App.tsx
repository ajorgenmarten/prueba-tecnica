import { Boocking } from './components/booking/booking'
import { DataProvider } from './components/booking/context'

function App() {

  return (
    <DataProvider>
      <Boocking />
    </DataProvider>
  )
}

export default App
