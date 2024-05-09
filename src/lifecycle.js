import React from 'react';
import ReactDOM from 'react-dom';

class Music extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
    return ( 
        <h2>This is music instrument {this.state.instrument}</h2>
     );
    }
}
 
export default Music;