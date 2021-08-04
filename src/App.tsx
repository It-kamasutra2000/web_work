import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import 'antd/dist/antd.css';
import { HashRouter } from 'react-router-dom';
import Content from './components/Content/Content';
import { Provider } from 'react-redux';
import store from './redux/store';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Provider store={store}>
          <Header />
          <Content />
          <Footer />
        </Provider>
      </HashRouter>
    </div>
  );
}

export default App;
