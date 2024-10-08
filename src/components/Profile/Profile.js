import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import InstaContext from "../../context/InstaContext";
import "./Profile.scss";
const Profile = (props) => {
  const getContext = useContext(InstaContext);
  const { users, setname,setbackground} = getContext;
  const { imageSize, image, border, hoverscale, id,visited } = props;
  let navigate = useNavigate();
  let filterImage=[]
  const handleClick = (e) => {
    navigate("/redirect");
    // console.log(e.target)
    filterImage = [
      ...users.filter((element) => {
        return element.id === e.target.id;
      }),
    ];
    setname(filterImage[0]);
    setbackground(prev=>[...prev,parseInt(e.target.id)])
    document.title="Stories | Instagram"
  };
  return (
    <div
      className={`profile ${border ? "border" : ""} ${visited?"silver":""}`}
      onClick={border ? handleClick : null}
    >
      <img
        src={image}
        className={`profileicon ${imageSize} ${hoverscale ? "menu-icon" : ""}`}
        alt="profile"
        id={`${id}`}
      />
    </div>
  );
};

export default Profile;
