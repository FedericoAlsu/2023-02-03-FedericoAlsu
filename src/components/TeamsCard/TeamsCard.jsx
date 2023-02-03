import * as actions from "../../redux/actions/index";

import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

// CUIDADO!. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX , JUNTO A MAP_DISPATCH_TO_PROPS!
export class TeamsCard extends Component {
  render() {
    return (
      <div>
        <button onClick={()=> this.props.deleteTeam(this.props.id)} type="button">Button</button>
       
        <h3>{this.props.name}</h3>
        <img src={this.props.image} alt=""/>
        <p>Founder: {this.props.founder}</p>
        <p>Base: {this.props.base}</p>
          <Link to={"/teams/" +  this.props.id}>{this.props.name} </Link>

      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) =>{
  return {
    deleteTeam: (id) => dispatch(actions.deleteTeam(id))
  };
};

export default connect(null, mapDispatchToProps)(TeamsCard);
