import Signup from "./Signup";
import BusRoute from "./BusRoute";
import Weather from "./Weather";
import Complaint from "./Complaint";
import BusInfo from "./BusInfo";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Fees from "./Fees";
import ForgotPassword from "./ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile";
function App() {
  return (
    <>
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/bus-route" component={BusRoute} />
              <PrivateRoute path="/weather" component={Weather} />
              <PrivateRoute path="/fees" component={Fees} />
              <PrivateRoute path="/complaint" component={Complaint} />
              <PrivateRoute path="/businfo" component={BusInfo} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </>
  );
}

export default App;
