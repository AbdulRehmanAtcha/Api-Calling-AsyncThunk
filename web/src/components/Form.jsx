import React, { useState } from "react";
import {useDispatch} from "react-redux"

const Form = () => {
  const [usersData, setUsersData] = useState({});

  const HandleData = (e) => {
    setUsersData({
      ...usersData,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch()

  const SubmitHandler = (e)=>{
    e.preventDefault();
    dispatch(usersData);
    console.log(usersData)
  }

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="Name"
            className="form-control"
            id="name"
            style={{ width: "30vw", margin: "auto auto" }}
            onChange={HandleData}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="Email"
            className="form-control"
            id="exampleInputEmail1"
            style={{ width: "30vw", margin: "auto auto" }}
            onChange={HandleData}
          />
        </div>
        <div className="mb-3">
          <label for="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            name="Age"
            className="form-control"
            id="age"
            style={{ width: "30vw", margin: "auto auto" }}
            onChange={HandleData}
          />
        </div>
        <div
          className="form-check"
          style={{ width: "10vw", margin: "auto auto" }}
        >
          <input
            className="form-check-input"
            type="radio"
            name="Gender"
            id="flexRadioDefault1"
            onChange={HandleData}
            value={"Male"}
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Male
          </label>
        </div>
        <div
          className="form-check"
          style={{ width: "10vw", margin: "auto auto" }}
        >
          <input
            className="form-check-input"
            type="radio"
            name="Gender"
            id="flexRadioDefault2"
            onChange={HandleData}
            value={"Female"}
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Female
          </label>
        </div>
        <br />
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
