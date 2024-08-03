import React, { useState } from "react";

export const MyForm = ({ addUser }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // const {name,value}=e.target
    addUser(user);
  };
  const [user, setUser] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
    // console.log(e);
  };
  console.log(user);
  return (
    <div className="rounded ">
      <form action="" className="rounded bg-dark p-3" onSubmit={handleOnSubmit}>
        <div className="row mt-3 rounded">
          <div className="col-3">
            <select
              className="form-select"
              aria-label="Default select example"
              name="gender"
              onChange={handleOnChange}
            >
              <option selected>Gender</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>
          <div className="col-6">
            <input
              onChange={handleOnChange}
              name="user"
              type="text"
              className="form-control"
              placeholder="User Name"
              aria-label="User Name"
              required
            />
          </div>
          <div className="d-grid col-3">
            <button className=" btn btn-danger ">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};
