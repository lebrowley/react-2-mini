import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor: point is to INITIALIZE STATE
  constructor(){
    super();

    this.state = {
      fontColor: 'black',
      fontSize: 12, 
      fontFamily: 'monospace',
      allowEdit: 'true'
    }
    //to pass data via props, you must bind to establish context
    //done inside of the constructor because that's where the context is

    this.updateColor = this.updateColor.bind(this)
    this.updateSize = this.updateSize.bind(this)
    this.updateFamily = this.updateFamily.bind(this)
    this.updateEditStatus = this.updateEditStatus.bind(this)
  }

  // updateColor this and all the following are FUNCTIONALITIES (class methods)
  //they are outside of the constructor function

updateColor(val){
  this.setState({
    fontColor: val
  })
}

  // updateSize
  //both ways of writing the object being passed into setState are valid
  //the run the same, it's just a matter of readablility

  updateSize(val){
    this.setState({fontSize: val})
  }

  // updateFamily

  updateFamily(val){
    this.setState({fontFamily: val})
  }

  // updateEditStatus

  updateEditStatus(val){
    this.setState({allowEdit: val})
  }

  render() {
    //destructure to allow for "dry"er code
    // const {allowEdit, fontFamily, fontColor, fontSize} = this.state
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={this.updateEditStatus}/>
          <ColorChanger update={this.updateColor} allowEdit={this.state.allowEdit}/>
          <SizeChanger update={this.updateSize} allowEdit={this.state.allowEdit}/>
          <FamilyChanger update={this.updateFamily} allowEdit={this.state.allowEdit}/>
        </div>
        <div className="textArea">
          <TextContainer
          fontColor={this.state.fontColor}
          fontSize={this.state.fontSize}
          fontFamily={this.state.fontFamily} />
        </div>
      </div>
    );
  }
}

export default App;
