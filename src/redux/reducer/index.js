import {
  CREATE_TEAM,
  DELETE_TEAM,
  GET_ALL_TEAMS,
  GET_TEAM_DETAIL
} from "../actions/index";

const initialState = {
  // Tus estados acá
  teams: [],
  teamDetail: {},
};

const rootReducer = (state = initialState, action) => {
  
    switch(action.type){
      case DELETE_TEAM:
        let nuevoEstado = {
          ...state
        } 
        nuevoEstado.teams = nuevoEstado.teams.filter(team => team.id !== action.payload);
        return nuevoEstado;
      case GET_ALL_TEAMS:
        return {...state,teams:action.payload
        }
      case GET_TEAM_DETAIL:
        return {...state,teamDetail:action.payload}
      case CREATE_TEAM:
        return {...state,teams:[...state.teams,
          { id:action.payload.id,
            name:action.payload.name,
            founder:action.payload.founder,
            base:action.payload.base}]}
        default: return state;
    }
};

export default rootReducer;
