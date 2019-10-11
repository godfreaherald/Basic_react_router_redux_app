import React, { Component } from 'react';
import { connect } from 'react-redux';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">UserName</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user, index) => {
              return (
                <tr key={++index}>
                  <td>{index}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  null
)(DashBoard);
