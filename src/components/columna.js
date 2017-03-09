import React, {Component} from 'react';


const ROOT_URL = "localhost:3000";
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
    axios.post(ROOT_URL + "/flickr/"+this.state.tema+" "+this.state.color).then(response => {
          console.log("la response es: "+response);
          console.log(response.data);
            this.setState({fotos: response.data})
        })
  }

  render()
  {
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
