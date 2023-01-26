import { Component } from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent - Constructor");
  }

  componentDidMount() {
    // console.log("Parent - ComponentDidMount");
  }
  render() {
    // console.log("Parent - Render");
    return (
      <div>
        <h1>About Us</h1>
        <ProfileClass name={"First Child"} />
        <Profile />
      </div>
    );
  }
}
export default About;
