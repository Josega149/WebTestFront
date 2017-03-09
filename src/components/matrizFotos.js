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
          <div className="col-md-2"><Columna color="YELLOW" tema={this.props.tema}/></div>
          <div className="col-md-2"><Columna color="BLUE" tema={this.props.tema}/></div>
          <div className="col-md-2"><Columna color="RED" tema={this.props.tema}/></div>
          <div className="col-md-2"><Columna color="WHITE" tema={this.props.tema}/></div>
          <div className="col-md-2"><Columna color="GREEN" tema={this.props.tema}/></div>
          <div className="col-md-2"><Columna color="VIOLET" tema={this.props.tema}/></div>
      </div>
    )
  }

}
export default MatrizFotos;
