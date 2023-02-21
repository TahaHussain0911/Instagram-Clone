import React, { useContext, useState } from "react";
import Profile from "../../../Profile/Profile";
import InstaContext from "../../../../context/InstaContext";
import { ReactComponent as Dots } from "../../../../assets/Dots.svg";
import { ReactComponent as Comments } from "../../../../assets/Comment.svg";
import { ReactComponent as Inbox } from "../../../../assets/Inbox.svg";
import { ReactComponent as Bookmark } from "../../../../assets/Bookmark.svg";
import Liked from "../../../../assets/liked.png";
import "./Card.scss";
const Card = (props) => {
  const getContext = useContext(InstaContext);
  const { background, setliked, liked} = getContext;
  const { data, react } = props;
  const [value, setvalue] = useState("");
  const [comments, setcomments] = useState([]);
  const [count, setcount] = useState(0)
  const likedClick = (e) => {
    const parent = e.target.parentNode;
    const likedPhoto = parent.querySelector(".liked");
    likedPhoto.classList.add("show");
    // console.log(e.target.id)
    setliked((prev) => [...prev, parseInt(e.target.id)]);
    setTimeout(() => {
      likedPhoto.classList.remove("show");
    }, 1700);
  };
  const heartReact = (e) => {
    if (liked.indexOf(parseInt(e.target.parentNode.id)) === -1) {
      setliked((prev) => [...prev, parseInt(e.target.parentNode.id)]);
    } else {
      const filterItems = liked.filter((element) => {
        return element !== parseInt(e.target.parentNode.id);
      });
      setliked(filterItems);
    }
  };
  const autoResize = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };


  const commentAdded = (e) => {
    e.preventDefault();
    // console.log(e.target.id)
    const updateComments = [...comments];
    updateComments.push(value);
    setcomments(updateComments);
    setvalue("")
    setcount(count+1);
  };
  const onChange = (e) => {
    setvalue(e.target.value);
  };
  return (
    <div className="card">
      <div className="card-top">
        <div className="top-profile">
          <Profile
            image={data.profile}
            imageSize={"medium"}
            border={data.border}
            hoverscale={false}
            id={data.id}
            visited={background.indexOf(data.id) !== -1 ? true : false}
          />
          <h4>{data.name}</h4>
          <p>{data.posted}</p>
        </div>
        <Dots className="three-dots" />
      </div>
      <div className="post-box">
        <img src={Liked} alt="" className="liked scale" />
        <img
          src={data.image}
          alt="Users Post"
          className="post"
          id={`${data.id}`}
          onDoubleClick={likedClick}
        />
      </div>
      <div className="button-box">
        <div className="react-box">
          <div className="heart-icon" onClick={heartReact} id={`${data.id}`}>
            <i class="fa-regular fa-heart opacity-btn"></i>
            {react && <i class="fa-solid fa-heart"></i>}
          </div>
          <Comments className="comments opacity-btn" />
          <Inbox className="inbox opacity-btn" />
        </div>
        <div className="bookmark">
          <Bookmark className="bookmark opacity-btn" />
        </div>
      </div>
      <div className="likes-box">
        <Profile image={data.likedimage} imageSize={"small"} border={false} />
        <p>
          Liked by {react && <span>You , </span>}
          <b>{data.liked.substring(0, data.liked.indexOf(" "))}</b> and
          <b>
            {" "}
            {data.liked.substring(data.liked.indexOf(" "), data.liked.length)}
          </b>
        </p>
      </div>
      <div className="caption">
        <h4>{data.name}</h4>
        <p>{data.caption}</p>
      </div>
      <div className="comment-box">
        <p>
          View all <span>{parseInt(data.comments)+count}</span> comments{" "}
        </p>
      </div>
      <div className="add-comment">
        <div className="your-comments">
          {comments.map((element) => {
            return (
              <h4>
                taha.hussain08<span>{element}</span>
              </h4>
            );
          })}
        </div>
        <form action="" onSubmit={commentAdded} id={`${data.id}`}>
          <textarea
            name="comment"
            id="comment"
            onChange={onChange}
            placeholder="Add a comment..."
            onInput={autoResize}
            value={value}
          ></textarea>
          <button>Post</button>
        </form>
      </div>
    </div>
  );
};

export default Card;
