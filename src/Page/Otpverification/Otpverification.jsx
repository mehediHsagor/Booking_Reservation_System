import { useState } from "react";
import Table from "./Table";

const Otpverification = () => {
  const [selectedId, setSelectedId] = useState([]);

  const users = [
    { id: 1, name: "John Doe", age: 28, city: "New York" },
    { id: 2, name: "Jane Smith", age: 34, city: "Los Angeles" },
    { id: 3, name: "Amit Sharma", age: 25, city: "Delhi" },
    { id: 4, name: "Sara Lee", age: 30, city: "London" },
    { id: 5, name: "Carlos Martinez", age: 22, city: "Madrid" },
  ];
  const uservalue = ["id", "name", "age", "city"];
  const allOptions = [
    { id: 1, name: "Option A" },
    { id: 2, name: "Option B" },
    { id: 3, name: "Option C" },
    { id: 4, name: "Option D" },
  ];
  const selectOption = (id) => {
    setSelectedId((prev) => [...prev, id]);
  };
  const availableOptions = allOptions.filter(
    (option) => !selectedId.includes(option.id)
  );

  return (
    <div>
      <h1>This is an OTP verification page</h1>
      <Table columns={uservalue} tablevalue={users} />
      <div>
        <h2>Available Options</h2>
        <ul>
          {availableOptions.map((option) => (
            <li key={option.id}>
              {option.name}{" "}
              <button onClick={() => selectOption(option.id)}>Select</button>
            </li>
          ))}
        </ul>

        <h2>Selected IDs</h2>
        <pre>{JSON.stringify(selectedId)}</pre>
      </div>
    </div>
  );
};

export default Otpverification;
