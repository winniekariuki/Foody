import React from 'react';
import './login.scss';
 
class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      username: '',
      password: '',
      confirmPassword: '',
      phonenumber: '',
      errorMessages: '',
    
    }
  }
  handleEmailChange = e => {
    this.setState({
      email: e.target.value,
    });
  };
  handleUsernameChange = e => {
    this.setState({
      username: e.target.value,
    });
  };
  handlePasswordChange = e => {
    this.setState({
      password: e.target.value,
    });
  };
  handleConfirmPasswordChange = e => {
    this.setState({
      confirmPassword: e.target.value,
    });
  };
  handlePhoneNumberChange = e => {
    this.setState({
      phonenumber: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ message: '', errors: '' });
  };

  render() {
    return (
      <div>
        <div className="Form">
          <h2>Foody</h2>
          <div><img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj6hrW7mY3kAhWFDuwKHYD0DO8QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.cookingchanneltv.com%2Frecipes%2Fpackages%2Feasy-chinese-recipes-and-menus%2Fphotos%2Fchinese-chicken-recipes&psig=AOvVaw3WTJAKXypd8zNbsyRQzX4O&ust=1566244426795952"/></div>
          <div className="Register">
          <input
            placeholder="Email"
            onChange={this.handleEmailChange}
            value={this.state.email}>  
          </input>
          <input
            placeholder="Username"
            onChange={this.handleUsernameChange}
            value={this.state.username}>
          </input>
          <input
            placeholder="password"
            onChange={this.handlePasswordChange}
            value={this.state.password}>
          </input>
          <input
            placeholder="confirm password"
            onChange={this.handleConfirmPasswordChange}
            value={this.state.confirmPassword}>
          </input>
          <input
            placeholder="+254712345678"
            onChange={this.handlePhoneNumberChange}
            value={this.state.phonenumber}>
            </input>
            <div>
              Remember me<input type="checkbox" className="checkBox"></input>
            </div>
            <div>
              <button>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    )

  }
}
export default Login;
