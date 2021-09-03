import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Home from 'screens/Home';
import Movies from 'screens/Movies';
import TV from 'screens/TV';
import Search from 'screens/Search';
import styled from 'styled-components';
import Scrollbars from 'react-custom-scrollbars';

const Main = styled(Scrollbars)`
  padding-top: 10px;
`;

function App() {
  return (
    <>
      <Router>
        <Header />
        <Main autoHide={false}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/tv" component={TV} />
            <Route path="/search" component={Search} />
          </Switch>
        </Main>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
