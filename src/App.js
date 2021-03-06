
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import Login from "./Components/Login";
import ShowUsers from "./Pages/AdminPage/ShowUsers"
import ShowUsersGroup from "./Pages/AdminPage/ShowUsersGroup"
import ShowTasks from "./Pages/AdminPage/ShowTasks";
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



          <Route path="/ShowUserTasks" element={<ShowUserTasks />}>
        </Route> 
        </Routes>  
      </Router>
  );
}

export default App;






