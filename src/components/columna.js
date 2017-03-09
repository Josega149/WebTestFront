import React, {Component} from 'react';
import axios from 'axios';
import {Button, Well} from 'react-bootstrap';

class Columna extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tema:this.props.tema,
      color:this.props.color,
      fotos:this.props.fotos
    }
    this.click = this.click.bind(this);
  }
  click()
  {
      alert("hello");
  }

  render()
  {
    console.log("creando columna de tema "+this.props.tema + "  color"+this.props.color);
    return(
      <div className="columna">
        {
          this.props.fotos.map((foto,i) => {
                      return (
                        <div key={i} className="divFoto">
                           <Button onClick={()=>{this.click();}}><img src={foto} /></Button>
                        </div>
                      );
          })
        }
      </div>
    )
  }

}
export default Columna;
