
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import { Redirect } from "react-router";
import Login from "./Components/Login";
import ShowUsers from "./Pages/AdminPage/ShowUsers"
import ShowUsersGroup from "./Pages/AdminPage/ShowUsersGroup"
import ShowTasks from "./Pages/AdminPage/ShowTasks";
import CreateTask from "./Pages/AdminPage/CreateTask"
import CreateUserGroup from "./Pages/AdminPage/CreateUserGroup"
import AddUser from "./Pages/AdminPage/AddUser"
import ShowGroupTask from "./Pages/UserPage/ShowGroupTask"
import ShowUserTasks from "./Pages/UserPage/ShowUserTasks"

 
function App() {
  
  return (
    <Router>
      <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route path="/" element={<Login />}>
       
            </Route>
          <Route path="/ShowUsers"  element={<ShowUsers />} >

            </Route>
          <Route path="/ShowUsersGroup" element={<ShowUsersGroup />}  >

            </Route>
          <Route path="/ShowTasks" element={<ShowTasks />}> 
           </Route>            
 
          <Route path="/CreateTask" element={<CreateTask />} >
            </Route>

          <Route path="/CreateUserGroup"  element={<CreateUserGroup />} >
            </Route>

          <Route path="/AddUser" element={<AddUser />}>

            </Route>

          <Route path="/ShowGroupTask" element={<ShowGroupTask />}>
            </Route>

          <Route path="/ShowUserTasks" element={<ShowUserTasks />}>
        </Route> 
        </Routes>  
      </Router>
  );
}

export default App;






