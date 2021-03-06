import React, { Component } from "react";
import { connect } from "react-redux";

export default (ComposedComponent) => {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push("/");
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push("/");
      }
    }
    render() {
      console.log(this.props.authenticated);
      return <ComposedComponent {...this.props} />;
    }
  }
  const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated };
  };

  return connect(mapStateToProps)(Authentication);
};
