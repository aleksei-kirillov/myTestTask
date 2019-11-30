import React, { Component } from 'react';
import Configuration from './configuration';
import './App.css';

class LoginControl extends Component {

  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
	this.handleInputChange = this.handleInputChange.bind(this);
	
	var lastUserName = window.localStorage.getItem("lastUserName");
	if(!lastUserName)
		lastUserName = "";
	
    this.config = new Configuration();
	this.state = 
	{
		userName: lastUserName,
		password: "",
		token: null
	}
  }
	
  render() {
    return (	
      <div className="login-panel">
		  <div>
			<label className="field-name">Login:
			  &nbsp;<input value={this.state.userName} onChange={this.handleInputChange} name="userName" maxLength="40" required placeholder="user name" />
			</label>
			<span className="spacer">&nbsp;</span>
			<label className="field-name">Password:
			  &nbsp;<input type="password" value={this.state.password} onChange={this.handleInputChange} name="password" maxLength="40" required placeholder="password" />
			</label>
			<span className="spacer">&nbsp;</span>
			<span className="button clickable" onClick={() => this.onLogin()}>Login</span>
		  </div>	  
		  <br/>
		  
		  <div className="login-help-text">
		  If you'll sign up with non-existing user name, new account will be created automatically with password you did provide this first time. 
		  No password changing or reminding functionality, so put proper password - at least 79 symbols with at least 3 lower case letters, 3 capital letters, 18 digits and 7 Chinese Simplified hieroglyphs in it.
		  <br/>
		  Seriosly: the password will be ignored, as no security system here; next time i'll use OAuth2, but yet user can see what others did see.
		  </div>
      </div>	  
    );
  }

  async onLogin() {
	window.localStorage.setItem("lastUserName", this.state.userName);
	
	var body = JSON.stringify({
				'userName': this.state.userName,
				'password': this.state.password
			});
	
	return fetch(this.config.USER_GETTOKEN_URL,
			{
			method: 'POST',
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
			body: body	
			}
		).then(response => {
		console.log("Retrieved items:");
		console.log(response);
		if (!response.ok) {
			this.handleResponseError(response);
		}
		return response.json();
	  })
	  .then(json => {
		console.log("Retrieved items:");
		console.log(json);
		
		this.props.data(json.token, this.state.userName);
	  })
	  .catch(error => {
		this.handleError(error);
	  });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleResponseError(response) {
      throw new Error("HTTP error, status = " + response.status);
  }

  handleError(error) {
      console.log(error.message);
  }
}

export default LoginControl;
