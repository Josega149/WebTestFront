import React, {Component} from 'react';
import axios from 'axios';
import Foto from './foto.js';
import {Button, Well} from 'react-bootstrap';

class Columna extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tema:this.props.tema,
      color:this.props.color,
      fotos:this.props.fotos
    }
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
                            <Foto url={foto[0]} number={foto[1]}
                              unHijoHizoClick={this.props.unHijoHizoClick} ganaron={this.props.ganaron} />
                        </div>
                      );
          })
        }
      </div>
    )
  }

}
export default Columna;
