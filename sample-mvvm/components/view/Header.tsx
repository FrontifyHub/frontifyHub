"use client";

import { useState } from "react";
import { UserViewModel } from "../view-models/UserViewModel";

export default function UserView() {
  const viewModel = new UserViewModel();

  const [user, setUser] = useState(viewModel.userData);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedUser = { ...user, [name]: value };

    viewModel.updateUser(
      updatedUser.id,
      updatedUser.name,
      updatedUser.email,
      updatedUser.age
    );

    setUser(viewModel.userData);
  };

  const { id, name, email, age } = user;

  return (
    <div>
      <h1>User Details</h1>
      <label>
        ID:
        <input
          type="number"
          name="id"
          value={id}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={age}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <p>
        User ID: {id}
        <br />
        Name: {name}
        <br />
        Email: {email}
        <br />
        Age: {age}
      </p>
    </div>
  );
}
