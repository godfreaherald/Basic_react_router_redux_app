import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/actions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    const initState = {
      user: [],
      username: '',
      password: ''
    };
    this.state = initState;
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    this.props.addUser(this.state.user);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="username"
              value={this.state.name}
              placeholder="Enter username"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>

          <button
            type="submit"
            onClick={this.handleSubmit}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
