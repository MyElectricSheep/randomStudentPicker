import React from 'react';

const PlayerList = ({players}) => {
    return (
        <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Pass Count</th>
          </tr>
        </thead>
        <tbody>
      
        {players.map((player) => {
          return (
            <tr key={player.lastName}>
            <th scope="row">{player.id}</th>
            <td>{player.firstName}</td>
            <td>{player.lastName}</td>
            <td>{player.timesPassed}</td>
          </tr>
          )
        })}
        </tbody>
      </table>
    );
};

export default PlayerList;