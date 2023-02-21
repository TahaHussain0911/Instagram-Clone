import React,{useContext} from "react";
import Profile from "../../Profile/Profile";
import InstaContext from "../../../context/InstaContext";
import "./Suggest.scss";
const Suggest = (props) => {
    const getContext=useContext(InstaContext)
    const {follow,setfollow}=getContext
  const { name, username, button, size,image,id,requested } = props;
  const handleFollow=(e)=>{
    // console.log(e.target.className)
    if (follow.indexOf(parseInt(e.target.id))===-1) {
        setfollow(prev=>[...prev,parseInt(e.target.id)])
    }
    else{
        const filterItems=follow.filter((element)=>{
            return element!==parseInt(e.target.id)
        })
        setfollow(filterItems)
    }
  }
  return (
    <div className="profile-sidebar">
      <Profile
        image={image}
        imageSize={size}
        border={false}
        hoverscale={false}
        visited={false}
      />{" "}
      <div className="suggest">
        <div className="content">
          <h2 className="username">{username}</h2>
          <p className="name">{name}</p>
        </div>
        <button className={`btn ${requested==="Requested"?"primary":""}`} id={`${id}`} onClick={button?handleFollow:null}>{button?requested:"Switch"}</button>
      </div>
    </div>
  );
};

export default Suggest;
