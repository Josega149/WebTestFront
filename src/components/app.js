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
            encabezado:'WELCOME TO FLICKRAMU',
            tema:'',
            vaEscribiendo:''
        }
        this.clickPrimary = this.clickPrimary.bind(this);
    }

    clickPrimary()
    {
      console.log("si llega");
      this.setState({tema:this.state.vaEscribiendo});
      console.log("buscando "+this.state.tema);
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
        console.log("crea matriz");
        matriz=(<MatrizFotos tema={this.state.tema}/>);
      }
        return (
            <div>
                <row className='row'>
                    <Encabezado text={this.state.encabezado} cuantos="5"/>
                </row>
                <row className='row'>
                    <Encabezado text="Rainbow" cuantos="3"/>
                </row>
                <row className='row'>
                    <Input name="titulo" type="text"  onTextInput={this.escribe.bind(this)}
                              placeholder="Text something" />
                </row>
                <row className='row'>
                    <Button bsStyle="primary"
                      onClick={() => {this.clickPrimary()}}>Search</Button>
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
