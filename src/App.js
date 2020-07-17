import React from "react";
import "./App.css";
import NavComponent from "./components/NavComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level1: [
        "OS (C:)",
        "Local Disc (D:)",
        "Local Disc (E:)",
        "New Volume(F:)",
      ],
      open1: [false, false, false, false],

      level2: [
        ["Program Files", "Users", "Windows", "Games", "PrefLogs"],
        ["Personals", "Projects", "Office"],
        ["Pictures", "Documents", "Study Materials"],
        ["NewtonschoolProjects", "NewtonschoolVideos", "NewtonschoolJs"],
      ],
      open2: [
        [false, false, false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ],
    };
  }

  changeState = (level, array) => {
    if (level === "1") {
      this.setState({
        open1: array,
      });
    }
    if (level === "2") {
      this.setState({
        open2: array,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="menu-wrapper">
          <NavComponent
            changeState={this.changeState}
            prop={this.state}
            level="1"
            data="0"
          >
            <NavComponent
              changeState={this.changeState}
              prop={this.state}
              level="2"
              index="0"
              data="0"
            >
              <li>Windows NT</li>
              <li>Windows Mail</li>
              <li>Windows Photo Viewer</li>
            </NavComponent>
            <NavComponent
              changeState={this.changeState}
              prop={this.state}
              level="2"
              index="0"
              data="1"
            >
              <li>Nishant</li>
              <li>Siddharth</li>
            </NavComponent>
            <NavComponent
              changeState={this.changeState}
              prop={this.state}
              level="2"
              index="0"
              data="2"
            >
              <li>Boot</li>
              <li>File Manager</li>
            </NavComponent>
            <NavComponent
              changeState={this.changeState}
              prop={this.state}
              level="2"
              index="0"
              data="3"
            >
              <li>Riders</li>
              <li>Race Cars</li>
              <li>Snake and Laders</li>
            </NavComponent>
            <NavComponent
              changeState={this.changeState}
              prop={this.state}
              level="2"
              index="0"
              data="4"
            >
              <li>Windows NT</li>
              <li>Windows Mail</li>
            </NavComponent>
          </NavComponent>

          <NavComponent
            changeState={this.changeState}
            prop={this.state}
            level="1"
            data="1"
          >
            <NavComponent
              changeState={this.changeState}
              prop={this.state}
              level="2"
              index="1"
              data="0"
            >
              <li>MyPhoto.png</li>
              <li>Resume.pdf</li>
            </NavComponent>
            <NavComponent
              changeState={this.changeState}
              prop={this.state}
              level="2"
              index="1"
              data="1"
            >
              <li>Calculator Application</li>
              <li>Notes Application</li>
            </NavComponent>
            <NavComponent
              changeState={this.changeState}
              prop={this.state}
              level="2"
              index="1"
              data="2"
            >
              <li>Reports.docx</li>
            </NavComponent>
          </NavComponent>

          <NavComponent
            changeState={this.changeState}
            prop={this.state}
            level="1"
            data="2"
          >
            <NavComponent
              changeState={this.changeState}
              prop={this.state}
              level="2"
              index="2"
              data="0"
            >
              <li>Cat.png</li>
            </NavComponent>
            <NavComponent
              changeState={this.changeState}
              prop={this.state}
              level="2"
              index="2"
              data="1"
            >
              <li>ProgressReport.docx</li>
              <li>DesignDoc.pdf</li>
            </NavComponent>
            <NavComponent
              changeState={this.changeState}
              prop={this.state}
              level="2"
              index="2"
              data="2"
            >
              <li>HTML.html</li>
              <li>Css.pdf</li>
              <li>JS.pdf</li>
            </NavComponent>
          </NavComponent>

          <NavComponent
            changeState={this.changeState}
            prop={this.state}
            level="1"
            data="3"
          >
            <NavComponent
              changeState={this.changeState}
              prop={this.state}
              level="2"
              index="3"
              data="0"
            >
              <li>Cat.png</li>
            </NavComponent>
            <NavComponent
              changeState={this.changeState}
              prop={this.state}
              level="2"
              index="3"
              data="1"
            >
              <li>Cat.png</li>
            </NavComponent>
            <NavComponent
              changeState={this.changeState}
              prop={this.state}
              level="2"
              index="3"
              data="2"
            >
              <li>Cat.png</li>
            </NavComponent>
          </NavComponent>
        </div>
      </div>
    );
  }
}

export default App;
