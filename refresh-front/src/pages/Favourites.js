import React from "react";
import "./Favourites.css";

class Favourites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkmode: this.props.darkmode,
    };
  }

  render() {
    var darkmode = this.props.darkmode ? "dark" : "light";
    var darkmodeClass = darkmode;

    return (
      <div className={darkmodeClass}>
        <div className="fav-container">
          <a href="/stpauls" className="link-card stpauls-card"></a>
          <a href="/sim" className="link-card sim-card"></a>
          <a href="/cms" className="link-card cms-card"></a>
          <a href="/compassion" className="link-card compassion-card"></a>
          <a href="/moore" className="link-card moore-card"></a>
          <a href="/smbc" className="link-card smbc-card"></a>
          <a href="/challies" className="link-card challies-card"></a>
          <a href="/afes" className="link-card afes-card"></a>
        </div>
      </div>
    );
  }
}

export default Favourites;
