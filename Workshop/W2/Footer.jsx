import { Component } from "react";

class Footer extends Component {

  render() {

    let r = 100;
    let g = 150;
    let b = 200;

    let css = {backgroundColor : 'rgb(' + r + ',' + g + ',' + b + ')'};

    return( 
        <>
            <footer style={css}>Footer</footer>
        </>
    );


  }

}

export default Footer;