import React, { useContext } from "react";
import "./Sidebar.scss";
import profile from "../../assets/taha.jpeg";
import Suggest from "./Suggested/Suggest";
import InstaContext from "../../context/InstaContext";
const Sidebar = () => {
  const getContext = useContext(InstaContext);
  const { suggested,follow } = getContext;
  return (
    <div className="sidebar-container">
      {/* <div className="profile-sidebar"> */}
      {/* <Profile image={profile} imageSize={"large"} border={false} hoverscale={false} visited={false}/> */}
      <Suggest
        name={"Muhammad Taha"}
        username={"taha.hussain08"}
        button={false}
        size={"large"}
        image={profile}
      />
      {/* </div> */}
      <div className="suggestions-container">
        <div className="suggestions">
          <h4>Suggestions for you</h4>
          <button>See All</button>
        </div>
        <div className="suggest-people">
          {suggested.map((element) => {
            return (
              <Suggest
                name={element.follow}
                username={element.name}
                button={true}
                requested={follow.indexOf(element.id)!==-1?"Requested":"Follow"}
                size={"medium"}
                image={element.image}
                id={element.id}
              />
            );
          })}
        </div>
      </div>
      <div className="footer">
        <div className="links">
          <ul>
            <li>About</li>
            <li>Help</li>
            <li>Press</li>
            <li>API</li>
            <li>Jobs</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Locations</li>
            <li>Language</li>
          </ul>
        </div>
        <div className="credits">
          <p>© 2023 INSTAGRAM FROM META</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
