import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import RecommededVideos from './Components/RecommededVideos';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './Components/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path='/search/:searchTerm'>
            <div className='app__page'>
              <Sidebar />
              <SearchPage />
            </div>
          </Route>

          <Route path="/">
            <div className='app__page'>
              <Sidebar />
              <RecommededVideos />
            </div>
          </Route>
        </Switch>
      </Router>
      
      {/* <Header />

      <div className='app__page'>
        <Sidebar />
        <RecommededVideos />
      </div> */}
    </div>
  );
}

export default App;
