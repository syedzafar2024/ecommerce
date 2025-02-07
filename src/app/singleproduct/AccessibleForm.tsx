import React from "react";
const AccessibleForm = () => {
    return (
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" aria-label="Email Address" />
        </div>
        <div>
          <input type="password" placeholder="Enter your password" title="Password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default AccessibleForm;
  