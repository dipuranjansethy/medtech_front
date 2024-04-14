import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import Button from "@mui/material/Button";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const user = "Doctor";
  const isAuthenticated = false;
  const showSidebar = () => setSidebar(!sidebar);
    const logOutHandler=()=>{
        console.log("logout")
    }
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar" style={{ zIndex: 10 }}>
          <NavLink to="#" className="menu-bars">
            <FaIcons.FaBars color="#060b26" onClick={showSidebar} />
          </NavLink>
          <div className="m-auto navbar-text text-center font-bold text-2xl">
            <h1>CareConnect.com</h1>
          </div>
          <div>
            <h1 className="mr-10">twitter</h1>
          </div>
        </div>
        <nav
          className={sidebar ? "nav-menu active" : "nav-menu"}
          style={{ zIndex: 10 }}
        >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <NavLink to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </NavLink>
            </li>
            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <NavLink to={item.path}>
                  {item.icon}
                  <span> {item.title}</span>
                </NavLink>
              </li>
            ))}
            {/* Additional buttons for profile and logout */}
            {isAuthenticated ? (
              <>
                {/* <li className='nav-text'>
                            <NavLink to='/profile'>
                                <AiIcons.AiOutlineUser />
                                <span>Profile</span>
                            </NavLink>
                        </li> */}
                <div className="my-40">
                  <Button
                    variant="contained"
                    style={{
                      background: "#FFFFFF", // Set button background color
                      color: "#090E2A", // Set button text color
                      padding: "12px 24px", // Set button padding
                      marginTop: "16px", // Set top margin
                      fontWeight: "bold",
                      zIndex: 0,
                      borderRadius: "40px",
                      marginRight: "13px",
                    }}
                  >
                    Profile
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      background: "#FFFFFF", // Set button background color
                      color: "#090E2A", // Set button text color
                      padding: "12px 24px", // Set button padding
                      marginTop: "16px", // Set top margin
                      fontWeight: "bold",
                      zIndex: 0,
                      borderRadius: "40px",
                    }}
                    onAuxClick={logOutHandler}
                  >
                                logout
                          
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="flex-row">
                  <Button
                    variant="contained"
                    style={{
                      background: "#FFFFFF", // Set button background color
                      color: "#090E2A", // Set button text color
                      padding: "12px 24px", // Set button padding
                      marginTop: "16px", // Set top margin
                      fontWeight: "bold",
                      zIndex: 0,
                      borderRadius: "40px",
                      marginRight: "13px",
                    }}
                  >
                      <NavLink to='/login'>
                                Login
                            </NavLink>
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      background: "#FFFFFF", // Set button background color
                      color: "#090E2A", // Set button text color
                      padding: "12px 24px", // Set button padding
                      marginTop: "16px", // Set top margin
                      fontWeight: "bold",
                      zIndex: 0,
                      borderRadius: "40px",
                    }}
                  >
                    <NavLink to='/register'>
                                Regitser
                            </NavLink>
                  </Button>
                </div>
              </>
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
