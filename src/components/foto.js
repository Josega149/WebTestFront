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



  click()
  {
      alert("hello");
  }


  render()
  {  //recuperado de https://facebook.github.io/react/docs/dom-elements.html

    return(
      <div className="foto">
          <Button clasName="boton" onClick={()=>{this.click();}} ><img src={this.props.url} /></Button>
      </div>
    )
  }

}
export default Foto;
