import React from 'react';
import './App.css';

const people = [
  {
    firstName: 'Chris',
    lastName: 'Bongers'
  },
  {
    firstName: 'Hub',
    lastName: 'Bongers'
  },
  {
    firstName: 'Sanne',
    lastName: 'Bongers'
  }
];

const Avatar = ({ person }) => {
  const { firstName, lastName } = person;
  let name = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();

  return (
    <div className={'avatar'}>
      {name}
    </div>
  )
}

const TableRow = ({ row }) => (
  <tr>
    <td><Avatar person={row} /></td>
    <td>{row.firstName}</td>
    <td>{row.lastName}</td>
  </tr>
)

const Table = ({ data }) => (
  <table className={'table'} cellSpacing={0} cellPadding={0}>
    <tbody>
      {data.map((row, i) => {
        return <TableRow row={row} key={i} />
      })}
    </tbody>
  </table>
)

function App() {
  return (
    <Table data={people} />
  );
}

export default App;
