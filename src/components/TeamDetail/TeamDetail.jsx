import * as actions from "../../redux/actions";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailCard from "../DetailCard/DetailCard";
import {useParams} from "react-router-dom"


// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const TeamDetail = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const teamDetail = useSelector((state) =>state.teamDetail)
  React.useEffect(() => {
    dispatch(actions.getTeamDetail(id))
  })
  return (
    <div>
      <h1>Team Detail</h1>
      <p>{teamDetail.name}</p>
      <p>{teamDetail.founder}</p>
      <DetailCard
      key={teamDetail.id}
      id={teamDetail.id}
      drivers={teamDetail.drivers}
      base={teamDetail.base}
      image={teamDetail.image}
      worldChampionships={teamDetail.worldChampionships}
      />
    </div>
  )
} 
export default TeamDetail;