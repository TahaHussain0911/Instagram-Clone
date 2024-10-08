import React, { useContext, useRef, useState } from "react";
import Stories from "react-insta-stories";
import { useNavigate } from "react-router-dom";
import InstaContext from "../../../context/InstaContext";
import "./Redirect.scss";
const Redirect = () => {
  const ref = useRef(null)
  const getContext=useContext(InstaContext);
  const {name}=getContext
  const [currentId, setCurrentId] = useState(0);
  let navigate=useNavigate();
  let array = [
    // {
    //   url: name.image,
    //   duration: 2000,
    //   header: {
    //     heading: name.name,
    //     subheading: 'Posted 30m ago',
    //     profileImage: name.image,
    //   },
    // },
    // {
    //   url: "https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.6435-9/142483481_2889684844690146_2750048898770538961_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGajG6qdl1272hSQc7UF-DkkEZ2liXItnyQRnaWJci2fNQFAmV-5tMDdacX8OgmB4PpnFrrrDwarOtZj4z42Alm&_nc_ohc=E8Uh1y9IsvoAX9TIbKx&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfAEyeVffyRFTuUjDBdwtCb5se6q-26Doh3tNad-AyKwzQ&oe=64157037",
    //   duration: 6000,
      
    // },
  ];
  let stories=[]
  try{

    for (let i = 0; i < name.stories.length; i++) {
      let obj={
        url: name.stories[i].story,
        duration: 2000,
        header: {
          heading: name.name,
          subheading: name.stories[i].posted,
          profileImage: name.image,
        }
      }
      array.push(obj)    
    }
    stories=[...array]
  }
  catch{
    stories=[
       {
        content: (props) => (
          <div style={{  padding: '0px 30px',color:"white",textAlign:'center' }}>
            <h1 style={{  marginBottom: 0 }}>Don't Reload We Don't Have a DB Connected Go Back To See User Stories</h1>
          </div>
        ),
        },
    ]
  }
  // console.log(array)
  const clickBack = (e) => {
    navigate('/')
    document.title="Instagram"
  };
  // window.addEventListener('beforeunload',(event)=>{
  //   event.preventDefault() 
  //   event.returnValue="Reload Will Crash The Website"
  // })
  return (
    <div className="story-component">
      <div className="insta-logo">
        {/* <img src={InstaIcon} className="show-later" onClick={()=>ref.current.click()}/> */}
        <i
          data-visualcompletion="css-img"
          aria-label="Instagram"
          class=""
          role="img"
          className="logo hide-later"
          onClick={()=>ref.current.click()}
        ></i>{" "}
      </div>
      <div className="story-round">
        <Stories
          currentIndex={currentId}
          // loop={true}
          defaultInterval={8000}
          // isPaused
          preventDefault={true}
          height={'inherit'}
          width={'inherit'}
          stories={stories}
          onStoryEnd={() => {
            setCurrentId((currentId) => currentId + 1);
          }}
          onAllStoriesEnd={() => {
            setCurrentId(0);
          }}
          onStoryStart={() => {
            setCurrentId((currentId) => currentId + 1 - 1);
          }}
        />
      </div>
      <div className="cross-icon" ref={ref} onClick={clickBack}>
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default Redirect;
