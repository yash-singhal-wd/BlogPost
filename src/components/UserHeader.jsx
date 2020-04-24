import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    const { user } = this.props;
    if (!user) return <div className="text-primary">Loading...</div>;

    return (
      <React.Fragment>
        <h4>Author: {user.name}</h4>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.id) };
};

export default connect(mapStateToProps)(UserHeader);
