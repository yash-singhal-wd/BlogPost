import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import { FaUser } from "react-icons/fa";
import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          {this.props.posts.map((p, i) => (
            <div key={i}>
              <div className="row m-2">
                <div className="col-1 text-center">
                  <h2>
                    <FaUser />
                  </h2>
                </div>
                <div className="col-11">
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <UserHeader id={p.userId} />
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
