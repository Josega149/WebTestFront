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
      //alert("hello");
  }


  render()
  {

    return(
      <div className="foto">
          <Button clasName="boton" onClick={()=>{this.click();
            this.setState({ show: true })}} ><img src={this.props.url} className="fotoP"/></Button>
          <SweetAlert
            show={this.state.show}
            title="The number of this image is:"
            text={this.props.number[0]+" ."}
            onConfirm={() => this.setState({ show: false })}/>
      </div>
    )
  }

}
export default Foto;
