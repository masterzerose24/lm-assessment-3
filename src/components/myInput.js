import React from 'react';

const MyInput = () => {
  return (
    <div>
      <input id="checkbox" type="checkbox" defaultChecked={true}/>
      <label htmlFor="checkbox">Is a sample test?</label>
    </div>
  );
}

export default MyInput;
