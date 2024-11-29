import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {

  const bgcolor = {
    backgroundColor: `${isHeader ? "#deb5b545" : "#f5f5f5ab"}`
  }

  return (
    <tr style={bgcolor}>
      {isHeader ? (
        textSecondCell === null ? (
          <th style={bgcolor} colSpan={2}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th style={bgcolor}>{textFirstCell}</th>
            <th style={bgcolor}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
