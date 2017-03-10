"use strict";
import React, {Component} from 'react';
import axios from 'axios';
import Encabezado from './encabezado';
import Input from './input.js';
import SweetAlert from 'sweetalert-react';
import MatrizFotos from './matrizFotos.js';

import {Button, Well} from 'react-bootstrap';
const ROOT_URL = "https://localhost:3000";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            encabezado:'WELCOME TO FLICKRAMU',
            tema:'',
            vaEscribiendo:'',
            colores: ["RED","ORANGE","YELLOW","GREEN","BLUE","PURPLE"],
            data:[],
            ultimo:'',
            show:false,
            ganaron:[-1]
        }
        this.traerFotos = this.traerFotos.bind(this);
        this.unHijoHizoClick = this.unHijoHizoClick.bind(this);
    }

    traerFotos()
    {
      var dataCol=[];
      var terminaron =0;
      var arregloNums = [1,1,2,3,3,4,5,5,6,2,6,7,7,8,8,9,10,10,11,9,11,12,12,4,13,13,14,14,15,15];
      this.state.colores.map((colorActual,i)=>{
        console.log(this.state.vaEscribiendo+" "+colorActual);
        axios.get(ROOT_URL + "/flickr/url/"+this.state.vaEscribiendo+","+colorActual).then(response => {
              console.log("la response es: "+response);
              //console.log(response.data);
              //ya llegan solo las url
              var url = [];
              for(var j=0; j< response.data.length;j++)
              {
                url[j] = [response.data[j],arregloNums.splice(0,1) ];
              }
              dataCol[i] = url;

              terminaron +=1;
              if(terminaron === 6)
              {
                  console.log(" terminaron las consultass");
                  console.log(dataCol);
                  this.setState({tema:this.state.vaEscribiendo,data:dataCol});
              }
            })

      });
    }

    unHijoHizoClick(deQueHizo)
    {
      if(this.state.ultimo === deQueHizo)
      {
        //ganaron
          var lista = this.state.ganaron;
          lista.push(deQueHizo);
          this.setState({ show: true, ganaron:lista });
      }
      this.setState({ultimo:deQueHizo});
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
                              colores={this.state.colores}
                              unHijoHizoClick={this.unHijoHizoClick}
                              ganaron={this.state.ganaron}/>);
      }
        return (
            <div>
                <row className='row'>
                    <Encabezado text={this.state.encabezado} cuantos="5"/>
                </row>
                <row className='row'>
                    <h3> Memory game: Click in any image and try to find its pair (number).</h3>
                    <br/><h5>by Jose Gabriel Tamura L</h5>
                </row>
                <row className='row'>
                    <Input name="titulo" type="text"  onTextInput={this.escribe.bind(this)}
                              placeholder="Text something" />
                </row>
                <row className='row'>
                    <Button bsStyle="primary"
                      onClick={() => {this.traerFotos()}}>Search</Button>
                      <br/>
                      <br/>
                      <h5>Sometimes it takes few seconds to search</h5>

                </row>
                <row className='row'>
                    <div className="col-md-12" id='jumbo'>
                          {matriz}
                    </div>
              </row>
              <SweetAlert
                show={this.state.show}
                title="POINT"
                text="You match a pair! keep going :)"
                onConfirm={() => this.setState({ show: false })}/>
            </div>
        )
    }
}

export default App;
