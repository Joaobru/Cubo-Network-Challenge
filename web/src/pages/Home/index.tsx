import './styles.css'

import React, { useState, useEffect } from 'react';

import {getListData} from '../../services/getListData';

import NavBar from '../../components/NavBar';
import TitleDesc from '../../components/TitleDesc';
import Table from '../../components/Table';
import GraphicPie from '../../components/GraphicPie';

function Home() {
  const [listTable, setListTable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [participation, setParticipation] = useState('');

  useEffect(() => {
    
    getListData(setListTable, setLoading);

  },[])

  return (
    <div>
      <NavBar 
        firstName={firstName} setFirstName={setFirstName}
        lastName={lastName} setLastName={setLastName} 
        participation={participation} setParticipation={setParticipation}
        listTable={listTable} setListTable={setListTable} 
        setLoading={setLoading}
      />  
      <TitleDesc/>
      
      <div className="containerData">
        { !loading && (
          <>
            <Table listTable={listTable} setList={setListTable}/>
            <GraphicPie  listTable={listTable} setList={setListTable} />
          </>
          )
        } 
      </div>
    </div>
  );
}

export default Home;
