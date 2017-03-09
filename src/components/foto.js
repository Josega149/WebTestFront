import React, {Component} from 'react';



class Fotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color:this.props.color,
      pos:this.props.pos
    }
  }
  render()
  {
    return(
      <div>
          <div className="col-md-3"></div>
          <div className="col-md-6" id='encabezado'>{this.props.text}</div>
          <div className="col-md-3"></div>
          
      </div>
    )
  }

}
export default Fotos;
