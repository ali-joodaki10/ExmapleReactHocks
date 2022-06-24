import {useId } from "react";

const UseIdExample = () => {
   
  const id = useId();

  return (
    <div className="mx-auto mt-5 d-grid gap-3 w-50">
      <h5 className="alert alert-danger text-center">
        آشنایی با هوک    useId
      </h5>

      <hr className="bg-dark" />

      <label htmlFor={id}>Do you like React?</label>
      <div>
        <input id={id} type="checkbox" name="react"/>
      </div>
      <label htmlFor={id + '-firstName'}>First Name</label>
      <div>
        <input id={id + '-firstName'} type="text" />
      </div>
      <label htmlFor={id + '-lastName'}>Last Name</label>
      <div>
        <input id={id + '-lastName'} type="text" />
      </div>
     
     
    </div>
  )
};

export default UseIdExample;
