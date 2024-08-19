import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AppHeader } from './cmps/AppHeader.jsx'
import '../src/assets/main.scss'
import { Home } from './pages/Home.jsx'
import { store } from './store/store.js'


export function App() {

  return (

    <Provider store={store}>
      <Router>
        <section className="main-layout grid">
          <AppHeader />
          {/* <AppNavAside /> */}
          <main className="app-layout">
            <Routes>
              <Route element={<Home />} path='/'></Route>
            </Routes>
          </main>
          {/* <AppFooter /> */}
        </section>
      </Router>
    </Provider>

  )
}


