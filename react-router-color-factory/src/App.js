import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Colors from "./Colors";
import Color from "./Color";
import NewColorForm from "./NewColorForm";
import "./styles.css"; // Import the CSS file

function App() {
  const [colors, setColors] = React.useState(["red", "green", "blue"]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <Router>
      <header>
        <h1>Color Factory</h1>
      </header>
      <div className="container">
        <nav>
          <a href="/colors">Home</a>
          <a href="/colors/new">Add a Color</a>
        </nav>
        <Switch>
          <Route exact path="/colors">
            <Colors colors={colors} />
          </Route>
          <Route path="/colors/new">
            <NewColorForm addColor={addColor} />
          </Route>
          <Route path="/colors/:color">
            <Color colors={colors} />
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;