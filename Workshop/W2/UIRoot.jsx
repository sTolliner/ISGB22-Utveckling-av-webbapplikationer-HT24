import { Component } from "react";

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class UIRoot extends Component {

  render() {

    return( 
        <>
            <Header />
            <Main a='100' b='50'/>
            <Footer />
        </>
    );


  }

}

export default UIRoot;