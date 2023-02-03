import * as actions from "../../redux/actions/index";
import React, { Component } from "react";
import  { connect } from "react-redux";
import TeamsCard from "../TeamsCard/TeamsCard";

// CUIDADO! TENES QUE USAR CLASS COMPONENT! SINO SE ROMPEN LOS TEST EN CASO CONTRARIO!

// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX, JUNTO A MAP_STATE_TO_PROPS

// Y MAP_DISPATCH_TO_PROPS!

export class Teams extends Component {
  componentDidMount() {
  //this.props.getAllTeams();
  }


  render() {
    return (

      <div>
     <h1>Formula 1</h1>
     <img src={"f1logo.jpg"} alt="main-img" ></img>
      <h3>Teams</h3>
      {this.props.teams ??
      this.props.teams.map(Team => {
        return(
          <TeamsCard
          key={Team.id}
          id= {Team.id}
          founder={Team.founder}
          name={Team.name}
          base={Team.base}
          image={Team}
          
          />
        )  

      })  }
     
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return{
    Teams: state.team
  }
};

export const mapDispatchToProps = (dispatch) => {
};

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
