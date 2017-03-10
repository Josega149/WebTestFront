import React, {Component} from 'react';
import axios from 'axios';
import {Button, Well} from 'react-bootstrap';

class Foto extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.click = this.click.bind(this);
  }
  //recuperado de https://facebook.github.io/react/docs/dom-elements.html
  const divStyle = {
    color: 'blue',
  };


  click()
  {
      alert("hello");
  }

  render()
  {
    return(
      <div className="Foto">
          <Button onClick={()=>{this.click();}}><img src={this.props.url} style={divStyle}/></Button>
      </div>
    )
  }

}
export default Foto;
