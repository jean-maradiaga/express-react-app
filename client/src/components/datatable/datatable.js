import React from 'react';
import PropTypes, { object } from 'prop-types';

import './datatable.scss';

const DataTable = ({
  name = "",
  firstColumn = "",
  secondColumn = "",
  data = [],
}) => {
	return (
        <div className="datatableContainer">
          <h2>{name}</h2>
            <table className="datatable">
              <tbody>
                <tr className="datatable__header">
                  <th>{firstColumn}</th>
                  <th>{secondColumn}</th>
                </tr>
                {data.map((obj) => (
                  <tr className="datatable__row" key={obj.id || obj.item.id}>
                    <td className="datatable__firstCell">
                      <div className="datatable__name">{obj.name || obj.item.name}</div>
                      <div className="datatable__age">{obj.age || obj.item.age}</div>
                    </td>
                    <td className="datatable__secondCell">
                      <div className="datatable__species">{obj.species || obj.item.species}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      );
};

export default DataTable;

DataTable.propTypes = {
	name: PropTypes.string,
	firstColumn: PropTypes.string,
	secondColumn: PropTypes.string,
	data: PropTypes.arrayOf(object)
};