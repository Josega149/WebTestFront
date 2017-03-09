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
        }
    }

    clickPrimary()
    {
      this.setState({tema:this.state.vaEscribiendo});
    }
    escribe(texto)
    {
      console.log(texto);
      this.setState({vaEscribiendo:texto});
    }
    render() {
      var matriz;
      if(this.state.tema!=='')
      {
        matriz=(<MatrizFotos tema={this.state.tema}/>);
      }
        return (
            <div>
                <row className='row'>
                    <Encabezado text={this.state.encabezado} cuantos="5"/>
                </row>
                <row className='row'>
                    <Encabezado text="Search" cuantos="3"/>
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
                    <div className="col-md-10" id='jumbo'>
                          {matriz}
                    </div>
                    <div className="col-md-1"><br/><br/><br/><br/></div>
              </row>


            </div>
        )
    }
}

export default App;
