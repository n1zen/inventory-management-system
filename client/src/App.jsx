// import react router
import { Routes, Route } from 'react-router'

// import pages
import HomePage from './pages/HomePage.jsx'
import CreateProductPage from './pages/CreateProductPage.jsx'

// import components
import NavBar from './components/NavBar.jsx'

function App() {

  return (
    <div className="app-container">
      <NavBar />
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/create-product" element={ <CreateProductPage />} />
      </Routes>
    </div>
  )
}

export default App
