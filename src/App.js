import React from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NewsPractice from './components/NewsPractice';

export default function App(){
  const pageSize=5;

  const apikey=process.env.REACT_APP_NEWS_API;

    return(
      <>
        <Router>
          <NavBar />
            <Routes>
              <Route exact path='/' element={<News key="general" apikey={apikey} pageSize={pageSize} country='in' category="general" /> } />
              <Route exact path='/business' element={<News key="business" apikey={apikey} pageSize={pageSize} country='in' category="business" /> } />
              <Route exact path='/entertainment' element={<News key="entertainment" apikey={apikey} pageSize={pageSize} country='in' category="entertainment" /> } />
              <Route exact path='/general' element={<News key="general" apikey={apikey} pageSize={pageSize} country='in' category="general" /> } />
              <Route exact path='/health' element={<News key="health" apikey={apikey} pageSize={pageSize} country='in' category="health" /> } />
              <Route exact path='/science' element={<News key="science" apikey={apikey} pageSize={pageSize} country='in' category="science" /> } />
              <Route exact path='/sports' element={<News key="sports" apikey={apikey} pageSize={pageSize} country='in' category="sports" /> } />
              <Route exact path='/technology' element={<News key="technology" apikey={apikey} pageSize={pageSize} country='in' category="technology" /> } />
            </Routes>
        </Router>
        
        <div className="container my-3">
                
          {/* <NewsPractice /> */}
         
        </div>
        
      </>
    )

}