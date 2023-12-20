import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App =()=> {
  const pageSize = 6;
  const apiKey =process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />

          <Routes>
            <Route path="/home" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
            <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
            <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />}></Route>
            <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />}></Route>
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}></Route>
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />}></Route>
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />}></Route>
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />}></Route>
            <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
            <Route path="/about" element={<p style={{boxSizing:'border-box', height: "125px", width: "1275px", /*border:'1px solid blue',*/ marginLeft: "150px", marginTop: "150px" }}>Welcome to NewsTimes, your trusted source for timely and reliable news. Our mission is to deliver high-quality news content to inform and empower our diverse audience. We cater to a wide range of interests and demographics, ensuring that everyone can find the news that matters most to them. Our app features a user-friendly interface with personalized news recommendations, real-time updates, a wide variety of categories, and a powerful search function. At NewsTimes, we are committed to upholding the highest standards of journalism, ensuring accuracy, objectivity, and fairness in our reporting. Our experienced team of journalists and developers work diligently to bring you the latest stories. We value your trust and privacy, and you can explore our data usage and privacy policies for further details. Thank you for choosing NewsTimes as your go-to source for news.</p>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }

  export default App;


