import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import axios from "axios";

const StudentList = () => {
  const [pupils, setPupils] = useState([]);

  useEffect(() => {
    const getPupils = async () => {
      try {
        const results = await axios.get("http://localhost:5000/register");
        setPupils(results.data);
      } catch (error) {
        return error;
      }
    };
    getPupils();
  }, []);

  console.log(pupils);
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>ID Number</th>
            <th>Home Address</th>
          </tr>
        </thead>
        <tbody>
          {pupils.map((pupil) => (
            <tr>
              <td>{pupil.name}</td>
              <td>{pupil.surname}</td>
              <td>{pupil.email}</td>
              <td>{pupil.idNumber}</td>
              <td>{pupil.homeAddress}</td>
            </tr>
          ))}
          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentList;
