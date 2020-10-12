import './styles.css';

import React, {useEffect} from 'react';

import { Table } from 'reactstrap';

import api from '../../services/api';

var counter = 0;

interface TableProps {
  listTable: any;
  setList: any;
}

interface userArray{
  id: String;
  firstName: String;
  lastName: String;
  participation: String;
}

const TableComponent: React.FunctionComponent<TableProps> = (props) => {

  useEffect(() => {
    api.get(`user`).then(response => {
      const listUser = response.data;
      props.setList(listUser);
    }).catch(err => console.log(err));
  },[])

  return (
      <>
      <Table bordered>
        <thead>
          <tr>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Participation</th>
          </tr>
        </thead>
        <tbody>
          {props.listTable.map((user:userArray,)=>{
            return (
              <tr key={counter ++}>
                <th scope="row">{user.id}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.participation}</td>
              </tr>
            )
          })}    
        </tbody>
      </Table>
      </>
  );
}

export default TableComponent;

