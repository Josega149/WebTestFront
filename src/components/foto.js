import React, {Component} from 'react';
import axios from 'axios';
import SweetAlert from 'sweetalert-react';
import {Button, Well} from 'react-bootstrap';

class Foto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show:false
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
          <SweetAlert
            show={this.state.show}
            title="Demo"
            text="SweetAlert in React"
            onConfirm={() => this.setState({ show: false })}
          />
      </div>
    )
  }

}
export default Foto;
