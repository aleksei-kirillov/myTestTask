import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './App.css';
import Validator from './shared/validator';

class NewItem extends Component {

  static propTypes = {
      onSubmit: PropTypes.func.isRequired,
      onCancel: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.validator = new Validator();
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      name: '',
      summary: '',
      description: '',
	  episodes: []
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
    if(this.validator.validateInputs(this.state)) {
        this.props.onSubmit(this.state);
    }
  }

  render() {
    return (
      <div className="input-panel">
		<span onClick={() => this.onCancel()} className="item-delete clickable" title="cancel adding">✖</span> &nbsp;
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
      <button onClick={() => this.onSubmit()}>Create</button>
      </div>
    );
  }
}

export default NewItem;
