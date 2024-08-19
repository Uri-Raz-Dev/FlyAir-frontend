import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AppHeader } from './cmps/AppHeader.jsx'
import '../src/assets/main.scss'
import { store } from './store/store.js'
import { StayIndex } from './pages/StayIndex.jsx'


export function App() {

  return (

    <Provider store={store}>
      <Router>
        <section className="main-layout grid">
          <AppHeader />
          {/* <AppNavAside /> */}
          <main className="app-layout">
            <Routes>
              <Route element={<StayIndex />} path='/'></Route>
            </Routes>
          </main>
          {/* <AppFooter /> */}
          <h1>hi its idan</h1>
        </section>
      </Router>
    </Provider>

  )
}


