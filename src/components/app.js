"use strict";
import React, {Component} from 'react';
import axios from 'axios';
import Encabezado from './encabezado';
import Input from './input.js';
import MatrizFotos from './matrizFotos.js';

import {Button, Well} from 'react-bootstrap';
const ROOT_URL = "http://localhost:3000";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            encabezado:'WELCOME TO FLICKRAMU',
            tema:'',
            vaEscribiendo:'',
            colores: ["RED","ORANGE","YELLOW","GREEN","BLUE","PURPLE"],
            data:[]
        }
        this.traerFotos = this.traerFotos.bind(this);
    }

    traerFotos()
    {
      var dataCol=[];
      var terminaron =0;

      this.state.colores.map((colorActual,i)=>{
        console.log(this.state.vaEscribiendo+" "+colorActual);
        axios.get(ROOT_URL + "/flickr/url/"+this.state.vaEscribiendo+","+colorActual).then(response => {
              console.log("la response es: "+response);
              //console.log(response.data);
              //ya llegan solo las url
              dataCol[i] = (response.data);
              terminaron +=1;
              if(terminaron === 6)
              {
                  console.log(" terminaron las consultass");
                  this.setState({tema:this.state.vaEscribiendo,data:dataCol});
              }
            })

      });
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
        console.log("crea matriz con tema "+ this.state.tema);
        matriz= (<MatrizFotos tema={this.state.tema} columnas={this.state.data}
                             colores={this.state.colores}/>);
      }
        return (
            <div>
                <row className='row'>
                    <Encabezado text={this.state.encabezado} cuantos="5"/>
                </row>
                <row className='row'>
                    <Encabezado id="encabezado1" text="Rainbow" cuantos="3"/>
                </row>
                <row className='row'>
                    <Input name="titulo" type="text"  onTextInput={this.escribe.bind(this)}
                              placeholder="Text something" />
                </row>
                <row className='row'>
                    <Button bsStyle="primary"
                      onClick={() => {this.traerFotos()}}>Search</Button>
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
