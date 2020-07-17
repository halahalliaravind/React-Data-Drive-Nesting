import React, { Component } from "react";
import './navcomp.css'
export default class NavComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleClick = (e) => {
    let { open1, open2 } = this.props.prop;

    if (this.props.level === "1") {
      let open = open1[this.props.data];
      let array = open1;
      array[this.props.data] = !open;
      this.props.changeState(this.props.level, array);
    }
    if (this.props.level === "2") {
      let open = open2[this.props.index][this.props.data];
      let array = open2;
      array[this.props.index][this.props.data] = !open;
      this.props.changeState(this.props.level, array);
    }
    e.stopPropagation();
  };

  stopClick = (e) => {
    e.stopPropagation();
  };

  render() {
    let { open1, open2, level1, level2 } = this.props.prop;

    let open;
    if (this.props.level === "1") {
      open = open1[this.props.data];
    }
    if (this.props.level === "2") {
      open = open2[this.props.index][this.props.data];
    }

    let heading;
    if (this.props.level === "1") {
      heading = level1[this.props.data];
    }
    if (this.props.level === "2") {
      heading = level2[this.props.index][this.props.data];
    }
    return (
      <ul className="navbar-item" onClick={this.handleClick}>
        <div className="heading-wrapper">
          {!open && (
            <img
              src="https://img.icons8.com/metro/15/000000/forward.png"
              alt="right-arrow"
            />
          )}
          {open && (
            <img
              src="https://img.icons8.com/metro/15 /000000/expand-arrow.png"
              alt="down-arrow"
            />
          )}

          {heading}
        </div>
        <div onClick={this.stopClick} className="children-wrapper">
          {open && this.props.children}
        </div>
      </ul>
    );
  }
}
