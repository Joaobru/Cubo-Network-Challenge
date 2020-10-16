import './styles.css';

import React from 'react';

import { Table } from 'reactstrap';

var counter = 0;

export interface TableProps {
  listTable:  Array<user>;
  setList: Function;
}

export interface user {
  id: string;
  firstName: string;
  lastName: string;
  participation: string;
  color: string;
}

const TableComponent: React.FunctionComponent<TableProps> = (props) => {

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
          {props.listTable.map((user:user,)=>{
            return (
              <tr key={counter ++}>
                <th scope="row">{user.id}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.participation + "%"}</td>
              </tr>
            )
          })}    
        </tbody>
      </Table>
      </>
  );
}

export default TableComponent;

