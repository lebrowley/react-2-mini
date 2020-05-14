import React, { Component } from 'react';

class EditToggle extends Component {
  render() {
    return (
      <select className="dropDownContainer ml0" onChange={ (e) => this.props.update(e.target.value)}>
        <option value="true"> Allow Edit </option>
        <option value="false"> Disable Edit </option>
      </select>
    );
  }
}

export default EditToggle; 


//the update in this instance is referring to the update= in the props in app.js
//i.e. <EditToggle update= {this.updateEditStatus}/>
//update passes in the value for the proper function/method we want to 
//access at this point
