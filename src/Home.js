import React from"react";
// import Search from"./Search"
import {BrowserRouter ,Switch,Route,Link} from "react-router-dom";
import AddUser from"./AddUser"
import "bootstrap/dist/css/bootstrap.min.css"


function Home (){
    
    return(
        <div>
        {/* <h1>This is home page</h1> */}
            <BrowserRouter>
                <div>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a href="users"className="navbar-brand">Navbar</a>
                    {/* <h2></h2> */}
                    <div className="navbar-nav">
                        <li className="nav-item">
                        <Link to="/AddUser">Add User</Link>
                            {/* <button >Add User</button> */}
                        </li>
                    </div>
                    
                    </nav>
                    <div className="container">
                        <Switch>
                            <Route path="/AddUser">
                                <AddUser />
                            </Route>
                            {/* <Route path="/AddUser" component={AddUser}/> */}
                        </Switch>
                    </div>
                    
                </div>
            </BrowserRouter>
            {/* <Search/> */}
        </div>
    )
}
export default Home;
