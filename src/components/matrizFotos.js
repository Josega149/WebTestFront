import React, {Component} from 'react';
import Columna from './columna.js';

class MatrizFotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render()
  {
    return(
      <div>
        {
          this.props.columnas.map((col,i) => {
            console.log(this.props.columnas[i]);
                      return (
                        <div className="col-md-2"><Columna color={this.props.colores[i]}
                          tema={this.props.tema}  fotos={this.props.columnas[i]}/></div>
                      );
          })
        }
      </div>
    )
  }

}
export default MatrizFotos;
