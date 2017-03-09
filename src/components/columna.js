import React, {Component} from 'react';

import axios from 'axios';


const ROOT_URL = "http://localhost:3000";
class Columna extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tema:this.props.tema,
      color:this.props.color,
      fotos:[]
    }

  }

  traerFotos()
  {
    axios.get(ROOT_URL + "/flickr/url/"+this.state.tema+","+this.state.color).then(response => {
          console.log("la response es: "+response);
          console.log(response.data);
          //ya llegan solo las url
            this.setState({fotos: response.data})
        })
  }


  render()
  {
    console.log("creando columna de tema "+this.state.tema + "  color"+this.state.color);
    this.traerFotos();
    return(
      <div className="columna">
        {
          this.state.fotos.map((foto,i) => {
                      return (
                        <div key={i} className="divFoto">
                          <img src={foto} />
                        </div>
                      );
          })
        }
      </div>
    )
  }

}
export default Columna;
