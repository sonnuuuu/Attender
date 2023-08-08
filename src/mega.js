import { Container, Row, Col, Navbar } from "react-bootstrap";
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <Container style={{ width: "70vw"}}>
          <UserAuthContextProvider>
            <Router>
              <Switch>
                <Route exact path="/home"><Home /></Route>
                <Route exact path="/Login"><Login/></Route>
                <Route exact path="/Signup"><Signup/></Route>
              </Switch>
            </Router>
          </UserAuthContextProvider>
    </Container>
  );
}

export default App;