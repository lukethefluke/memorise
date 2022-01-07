import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Generate.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intext: "",
      textarray: [],
      outtext: "",
      outVisibility: "hidden",
      darkmode: this.props.darkmode,
    };
  }

  getData() {
    let rec = document.getElementById("getText").value;
    this.setState({
      intext: rec,
    });

    const splitRec = rec.split("");
    var count = 0;

    var akrosRec = [];
    splitRec.forEach(function (item) {
      if (item.match(/[a-z]/i) && count === 0) {
        count = 1;
        akrosRec.push(item);
      } else if (item.match(/[a-z]/i) && count === 1) {
        akrosRec.push("");
      } else {
        count = 0;
        akrosRec.push(item);
      }
    });

    var joinRec = akrosRec.join("");

    this.setState({
      outtext: joinRec,
    });
    if (this.state.outVisibility === "hidden") {
      this.setState({
        outVisibility: "visible",
      });
    }

    document.getElementById("printText").innerHTML = joinRec;
  }

  render() {
    var darkmodegen = this.props.darkmode ? "darkgen" : "lightgen";
    var darkmodeClass = "main-container fill-window " + darkmodegen;

    var darkmode = this.props.darkmode ? "dark" : "light";
    var textcontainer = "text-container " + darkmode;
    var textinput = "text-input " + darkmode;
    var textgenerated = "text-generated " + darkmode;
    var outVisibility =
      "out-container " + darkmode + " " + this.state.outVisibility;

    return (
      <div className={darkmodeClass}>
        <div className={textcontainer}>
          <textarea
            id="getText"
            onChange={this.getData.bind(this)}
            className={textinput}
            placeholder="Enter text into this acrostic generator..."
          ></textarea>
        </div>
        <div className={outVisibility}>
          <textarea id="printText" className={textgenerated}></textarea>
        </div>
      </div>
    );
  }
}

export default Home;
