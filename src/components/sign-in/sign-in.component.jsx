import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { iUserActions } from "../../redux/user/user.action";
import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    //reset login status
    this.props.logout();

    this.state = {
      email: "",
      password: "",
      submitted: false,
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target; //here the value comes
    this.setState({ [name]: value });
  };

  //get the request and response from API authentication
  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ submitted: true });

    const { email, password } = this.state;

    if (email && password) {
      try {
        this.props.login(email, password);

        // console.log("after login method");
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in-form">
        <form onSubmit={this.handleSubmit}>
          <h3>Sign In</h3>

          <FormInput
            name="email"
            type="email"
            value={email}
            required
            handleChange={this.handleChange}
            label="Email"
            placeholder="Enter email"
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            required
            handleChange={this.handleChange}
            label="Password"
            placeholder="Enter password"
          />
          <div className="d-grid gap-2">
            <CustomButton
              type="submit"
              text="Sign In"
              btnClass="btn-outline-primary"
            ></CustomButton>
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}

            {/* { !loggingIn?  :''
        
            } */}
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(`mapStateToProps signInComponent: ${JSON.stringify(state)}`);
  // console.log(state);

  const { loggingIn } = state.userReducer;
  return { loggingIn };
}

const mapActions = {
  //state will have the properties set here
  login: iUserActions.login,
  logout: iUserActions.logout
};

const connectedLoginPage = connect(mapStateToProps, mapActions)(SignIn);
export default connectedLoginPage;
