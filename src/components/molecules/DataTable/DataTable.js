import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

export const DataTable = props => {
  return (
    <table className="datatable">
      <thead className="datatable__head">
        <tr className="datatable__head__row">
          {Object.entries(props.headers[0]).map(([key, value]) => {
            return (
              <td key={value} className="datatable__head__data">
                {value}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody className="datatable__body">
        {props.rows.map(player => (
          <tr key={player.name} className="datatable__body__row">
            <td className="datatable__body__data">{player.name}</td>
            <td className="datatable__body__data">{player.position}</td>
            <td className="datatable__body__data">{player.nationality}</td>
            <td className="datatable__body__data">{player.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

let headerItems = PropTypes.shape({
  age: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
});

DataTable.propTypes = {
  headers: PropTypes.arrayOf(headerItems),
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      contractUntil: PropTypes.String,
      dateOfBirth: PropTypes.String,
      age: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      nationality: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired
    })
  )
};

export default DataTable;
