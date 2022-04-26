import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StellarRabbit from './screens/StellarRabbit'
import './designs/css/styles.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/sample-com-templates'
            exact
            element={<StellarRabbit />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
