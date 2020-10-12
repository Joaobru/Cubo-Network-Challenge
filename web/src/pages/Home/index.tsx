import './styles.css'

import React, { useState} from 'react';

import NavBar from '../../components/NavBar';
import TitleDesc from '../../components/TitleDesc';
import Table from '../../components/Table';
import GraphicPie from '../../components/GraphicPie';

function Home() {
  const [listTable, setListTable] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [participation, setParticipation] = useState('');

  return (
    <div>
      <NavBar 
        firstName={firstName} setFirstName={setFirstName}
        lastName={lastName} setLastName={setLastName} 
        participation={participation} setParticipation={setParticipation}
      />
      <TitleDesc/>
      <div className="containerData">
        <Table listTable={listTable} setList={setListTable}/>
        <GraphicPie listTable={listTable} setList={setListTable}/>
      </div>
    </div>
  );
}

export default Home;
