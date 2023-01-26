import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dummy location",
      },
    };
    // console.log("Child - Constructor" + this.props.name);
  }

  componentDidMount() {
    // API Calls
    // const data = await fetch("https://api.github.com/users/deepakydv25");
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //   userInfo: json,
    // });
    // this.timer = setInterval(() => {
    //   console.log("NAMASTE REACT OP");
    // }, 1000);
    // console.log("Child - ComponentDidMount" + this.props.name);
  }

  componentDidUpdate() {
    // console.log("Child - ComponentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("Child - ComponentWillUnmount");
  }

  render() {
    // console.log("Child - Render" + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name:{this.state.userInfo.name}</h2>
        <h3>Count: {this.state.userInfo.location}</h3>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Count Button
        </button>
      </div>
    );
  }
}

export default Profile;
