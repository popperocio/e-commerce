import './App.css'
import { Filter } from './components/Filter'
import { Navbar } from './components/Navbar'
import { ResultInfoBar } from './components/ResultInfoBar'
import { ResultTable } from './components/ResultTable'
import { CartDetail } from './components/CartDetail'
import { SearchProvider } from './contexts/SearchContext'

function App() {

  return (
    <SearchProvider>
      <Navbar />
      <div className="appContainer">
          <div style={{ flex: 1 }}>
            <ResultInfoBar />
            <div className='content-ResultandFilter'>
              <Filter/>
              <ResultTable />
            </div>
          </div>
          <div>
            <CartDetail/>
          </div>
      </div>
    </SearchProvider>
  )
}

export default App
