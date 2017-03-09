import React, {Component} from 'react';
import axios from 'axios';

import Encabezado from './encabezado';
import Input from './input.js';
import MatrizFotos from './matrizFotos.js';

import {Button, Well} from 'react-bootstrap';
"use strict";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            encabezado:'WELCOME TO FLIKRAMU',
            tema:'',
            vaEscribiendo:''
            matriz:'';
        }
    }

    agregarMatriz()
    {
      this.setState({matriz:
        <div className="col-md-10" id='jumbo'>
              <MatrizFotos tema={this.state.tema}/>
        </div>}
      );
    }
    clickPrimary()
    {
      this.setState({tema:vaEscribiendo}, ()=>{agregarMatriz});
    }
    escribe(texto)
    {
      console.log(texto);
      this.setState({vaEscribiendo:texto});
    }
    render() {

        return (
            <div>
                <row className='row'>
                    <Encabezado text={this.state.encabezado}/>
                </row>
                <row className='row'>
                    <Encabezado text="Rainbow: look for something"/>
                </row>
                <row className='row'>
                    <Input name="titulo" type="text"  onTextInput={this.escribe}
                              placeholder="Text something" value={this.state.titulo}/>
                </row>
                <row className='row'>
                    <Button bsStyle="primary"
                      onClick={() => {this.clickPrimary()}}>CLICK</Button>
                      <br/>
                </row>
                <row className='row'>
                    <div className="col-md-1"></div>
                    {matriz}
                    <div className="col-md-1"><br/><br/><br/><br/></div>
              </row>


            </div>
        )
    }
}

export default App;
