import { Component } from "react";
import $ from "jquery";
import "./App.css";
import Jquery from "./components/jquery";

export default class App extends Component {
  jQuerycode = () => {
    $(".button").click(function () {
      $("#p1").css("color", "red");
      $("#p2").css("color", "red");
    });
  };
  componentDidMount() {
    this.jQuerycode();
  }
  render() {
    return (
      <>
        <Jquery />
        <br></br>

        <div id="green">
          <p id="p1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            vel voluptates sit voluptas illum eveniet consectetur corrupti
            suscipit nesciunt et, inventore velit quaerat ex deleniti ut facere,
            voluptate ab? Ducimus.
          </p>
          <button className="button">Click here</button>
          <p id="p2">Hello jquery use</p>
        </div>
      </>
    );
  }
}
