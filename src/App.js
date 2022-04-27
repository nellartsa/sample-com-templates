import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StellarRabbit from './screens/StellarRabbit'
import Gaslur from './screens/Gaslur'
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
          <Route
            path='/sample-com-templates/Gaslur'
            exact
            element={<Gaslur />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
