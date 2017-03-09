import React, {Component} from 'react';



class Encabezado extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render()
  {
    let saltos;
    if(this.props.cuantos==="3")
    {
      saltos = (<div><br/><br/><br/></div>);
    }
    else {
      saltos = (<div><br/><br/><br/><br/><br/><br/><br/></div>);
    }
    return(
      <div>
          <div className="col-md-3"></div>
          <div className="col-md-6" id='encabezado'>{this.props.text}</div>
          <div className="col-md-3"></div>
      </div>
    )
  }

}
export default Encabezado;
