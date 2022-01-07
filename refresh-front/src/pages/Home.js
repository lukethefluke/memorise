import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: "Mark",
      chapter: 1,
      chaptersNum: 4,
      chapters: [],
      dict: { Mark: 3, Luke: 1, John: 2 },
      darkmode: this.props.darkmode,
    };
  }

  onClick(value) {
    var chaptersNum = this.state.dict[value];
    if (value !== this.state.book) {
      this.setState(
        {
          chapter: 1,
          book: value,
          chaptersNum: chaptersNum,
        },
        function stateUpdateComplete() {
          this.componentDidMount();
        }.bind(this)
      );
    }
  }

  onChapClick(value) {
    this.setState(
      {
        chapter: value,
      },
      function stateUpdateComplete() {
        this.componentDidMount();
      }.bind(this)
    );
  }

  async componentDidMount() {
    try {
      var book = this.state.book;
      var chapter = this.state.chapter;
      const res = await fetch(
        "http://127.0.0.1:8000/api/?book=" + book + "&chapter=" + chapter
      ); // fetching the data from api, before the page loaded
      const chapters = await res.json();
      this.setState({
        chapters,
      });
    } catch (e) {
      console.log(e);
    }
  }

  darkmode() {
    var home = document.getElementById("home-container");
    home.classList.toggle("dark");
    this.props.darkmodeChange();
  }

  render() {
    const dict = this.state.dict;
    const chaptersNum = this.state.chaptersNum;
    let chapterDropdown;
    const chaptersList = [];

    for (let i = 1; i <= chaptersNum; i++) chaptersList.push(i);
    chapterDropdown = (
      <DropdownButton title={this.state.chapter} className="col">
        {chaptersList.map((option) => (
          <Dropdown.Item
            onClick={this.onChapClick.bind(this, option)}
            option={option}
            key={option}
          >
            {" "}
            {option}{" "}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    );

    var darkmode = this.props.darkmode ? "dark" : "light";
    var darkmodeClass = "home-container " + darkmode;
    return (
      <div className={darkmodeClass} id="home-container">
        <div className="container button-container">
          <div className="row select-btn">
            <DropdownButton
              title={this.state.book}
              id="bookSelected"
              className="col-4 "
            >
              {Object.keys(dict).map((key) => (
                <Dropdown.Item
                  onClick={this.onClick.bind(this, key)}
                  key={key}
                  id={key}
                  number={dict[key]}
                >
                  {key}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            {chapterDropdown}
            <div className="half-moon col-1"></div>
            <div className="col-3">
              <label className="switch ">
                <input
                  type="checkbox"
                  onClick={this.darkmode.bind(this)}
                  id="darkmode-toggle"
                  defaultChecked={this.props.darkmode}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        {this.state.chapters.map((item) => (
          <div key={item.id} className="container text-cont ">
            <div className="row">
              <div className="text-handle">{item.name}</div>
            </div>
          </div>
        ))}
        <p className="copyright">
          <small>
            Holy Bible, New International Version®, NIV® Copyright ©1973, 1978,
            1984, 2011 by Biblica, Inc.® Used by permission. All rights reserved
            worldwide.
          </small>
        </p>
      </div>
    );
  }
}

export default Home;
