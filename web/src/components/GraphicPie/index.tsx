import './styles.css';

import React, {useEffect, useState} from 'react';

import api from '../../services/api';

import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

function filteredParticipation(list:any){
  var obj = [list[0].participation]

  for(let i = 1; i < list.length; i++){
    obj = [...obj, list[i].participation];  
  }

  return obj;
}

function filteredName(list:any){
  var obj = [list[0].firstName + " " + list[0].lastName];

  for(let i = 1; i < list.length; i++) {
    obj = [...obj, list[i].firstName + " " + list[i].lastName];  
  }

  return obj;
}

function filteredColors(list:any) {
  var obj = [list[0].color];
  console.log(list[0].color)

  for(let i = 1; i < list.length; i++) {
    obj = [...obj, list[i].color];  
  }

  return obj;
}

function GraphicPie() {

  const [dataDoughnut, setDataDoughnut] = useState({});
  const [dataList, setDataList] = useState('');
  const [participation, setParticipation] = useState({});
  const [names, setNames] = useState({});
  const [colors, setColors] = useState({});

  useEffect(()=>{

    //Get all user
    api.get('user').then(response => {
      const listUser = response.data;

      setParticipation(filteredParticipation(listUser));
      setNames(filteredName(listUser));
      setColors(filteredColors(listUser));
      setDataList(listUser);

    }).catch(err => console.log(err));
    
  },[]);

  useEffect(()=>{
    console.log(colors);
  },[colors])

  useEffect(()=>{
    if(dataList === '' ){
      console.log("Error");
    } else{
      setDataDoughnut({ 
        labels: names,
        datasets: [
        {
          data: participation,
          backgroundColor: colors,
          hoverBackgroundColor:colors,
        }
      ]})       
    }
  },[dataList])

    return (
    <MDBContainer className="containerGraphicPie" >
      <Doughnut width={400} data={dataDoughnut} legend={{position:'right'}} options={{ responsive: true }} />
    </MDBContainer>
    );
  }

export default GraphicPie;

