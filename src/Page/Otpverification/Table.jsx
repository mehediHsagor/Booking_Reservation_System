import { useState } from "react";

const Table = ({ columns = [], tablevalue = [] }) => {
  const onEdit = () => {};
  const onDelete = () => {};
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };
  return (
    <div>
      <table border={1} cellPadding={8} cellSpacing={0}>
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th key={i}>{col}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tablevalue.map((row, i) => (
            <tr key={i}>
              {columns.map((col, j) => (
                <td key={j}>{row[col]}</td>
              ))}
              <td style={{ position: "relative" }}>
                <button onClick={() => toggleDropdown(i)}>⋮</button>

                {openDropdownIndex === i && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      right: 0,
                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      padding: "5px",
                      zIndex: 1000,
                    }}
                  >
                    <div
                      style={{ padding: "4px", cursor: "pointer" }}
                      onClick={() => {
                        onEdit(row);
                        setOpenDropdownIndex(null);
                      }}
                    >
                      Edit
                    </div>
                    <div
                      style={{ padding: "4px", cursor: "pointer" }}
                      onClick={() => {
                        onDelete(row);
                        setOpenDropdownIndex(null);
                      }}
                    >
                      Delete
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
