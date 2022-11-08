import React from 'react'

export default function Register() {
  return (
    <>
      <div className=" w-75 mx-auto">
        <h2>Register Now</h2>
        <form>
          <label htmlFor="first_name">First Name:</label>
          <input type="text" id="first_name" name="first_name" className=' form-control' />
        </form>
      </div>
    </>
  );
}
