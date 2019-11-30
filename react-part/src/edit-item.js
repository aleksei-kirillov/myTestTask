import React, { Component } from 'react';
import './App.css';
import Validator from './shared/validator';

class EditItem extends Component {

  constructor(props) {
    super(props);
    this.validator = new Validator();
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    const itemToEdit = props.item;
    this.state = {
      name: itemToEdit.name,
      summary: itemToEdit.summary,
      description: itemToEdit.description,
      link: itemToEdit.link,
	  episodes: itemToEdit.episodes
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onCancel() {
    this.props.onCancel();
  }

  onSubmit() {
    if (this.validator.validateInputs(this.state)) {
      this.props.onSubmit(this.state);
    }
  }

  render() {
    return (
      <div className="input-panel">
		<span onClick={() => this.onCancel()} className="item-delete clickable" title="cancel editing">✖</span> &nbsp;
      <div>
        <label className="field-name">Name:<br/>
          <input value={this.state.name} name="name" maxLength="40" required onChange={this.handleInputChange} placeholder="item name" />
        </label>
      </div>
      <div>
        <label className="field-name">Summary:<br/>
          <input value={this.state.summary} name="summary" maxLength="40" required onChange={this.handleInputChange} placeholder="summary" />
        </label>
      </div>
      <br/>
      <button onClick={() => this.onSubmit()}>Update</button>
      </div>
    );
  }
}

export default EditItem;
