import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import backend from './config.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      isSuccess: false,
    };
  }

  ///LoginUser'
  submitForm = (e) => {
    //prevent page from refresh
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    //set the with credentials to true
    axios.defaults.withCredentials = true;
    //make a post request with the user data
    axios
      .post(`${backend}/login`, data)
      .then((response) => {
        console.log("Status Code : ", response.status);
        if (response.status === 200) {
          this.SetLocalStorage(JSON.stringify(response.data));
          this.setState({
            error: "",
            isSuccess: true,
          });
        } else {
          this.setState({
            error: "Please enter correct credentials",
            isSuccess: false,
          });
        }
      })
      .catch(() => {
        this.setState({
          error: "Please enter correct credentials",
          formerror: {},
        });
      });
  };

  SetLocalStorage(data) {
    if (typeof Storage !== "undefined") {
      localStorage.clear();
      localStorage.setItem("userData", data);
    }
  }

  render() {
    if (this.state.isSuccess || localStorage.getItem("userData")) {
      if (JSON.parse(localStorage.getItem("userData")).isAdmin) {
        return <Navigate to="/createFlight" />;
      } else {
        return <Navigate to="/flights" />;
      }
    }
    return (
      <div className="container-fluid form-cont">
        <div className="flex-container">
          <div className="row" style={{ padding: "120px" }}>
            <div className="col">
              <div
                id="errorLogin"
                hidden={this.state.error.length > 0 ? false : true}
                className="alert alert-danger"
                role="alert"
              >
                {this.state.error}
              </div>
              <h3>Login</h3>
              <Form
                onSubmit={this.submitForm}
                method="post"
                className="form-stacked"
              >
                <FormGroup>
                 <strong> <Label htmlFor="email" className="Lable-align">
                    Email address
                  </Label></strong>
                  <Input
                    data-testid="email-input-box"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                    required
                  ></Input>
                </FormGroup>

                <FormGroup>
                  <strong><Label htmlFor="password">Password</Label></strong>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                    required
                  ></Input>
                </FormGroup>
                <FormGroup row>
                  <Col>
                    <Button
                      data-testid="btn-submit"
                      type="submit"
                      className="btn btn-Normal"
                      color="btn btn-primary"
                    >
                      Login
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
              <br/>
              <br/>
              <div style={{ color: '#FFF' }}>
                Not a Member?
                <font size="100px"><Link to="/register" style={{ color: '#FFD700' }}><strong> SignUp</strong> </Link></font>
            </div>
          </div>
        </div>
        </div>
        </div>
    );
  }
  }

export default Login;
  