import React from "react";

const UserLogin = () => {
  return (
    <div>
      <p>User Login Page</p>

      <form action="">
        <h3>Enter your email</h3>
        <input type="email" placeholder="abc@gmail.com" />
        <h3>Enter your password</h3>

        <input type="password" placeholder="Password" />

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default UserLogin;
