import React,{useContext} from "react";
import Story from "../Story/Story";
import "./Storybox.scss";
import InstaContext from "../../../context/InstaContext";
const Storybox = () => {
    const getContext=useContext(InstaContext)
    const {users}=getContext
    let scrollPosition=0;
    let scrollAmount=330;
    const moveHorizontal=(e)=>{
        let val=e.target.parentNode.id==="button-left"?1:-1
        const hScroll=e.target.parentNode.parentNode
        const storyCont=hScroll.querySelector('.stories-container')
        const btnLeft=hScroll.querySelector('#button-left')
        const btnRight=hScroll.querySelector('#button-right')
        // console.log(hScroll,storyCont)
        let maxScroll=-storyCont.offsetWidth + hScroll.offsetWidth;
        scrollPosition+=(val*scrollAmount)
        if (scrollPosition>0) {
            scrollPosition=0;
            btnLeft.style.opacity="0";
        }
        else{
            btnLeft.style.opacity="1";
        }
        if(scrollPosition<maxScroll){
            scrollPosition=maxScroll
            btnRight.style.opacity="0";
        }
        else{
            btnRight.style.opacity="1";
        }
        storyCont.style.left=scrollPosition+"px";
    }
  return (
    <div className="story-container">
      <div className="horizontal-scroll">
        <button className="btn-scroll" id="button-left" onClick={moveHorizontal}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="btn-scroll" id="button-right" onClick={moveHorizontal}>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
        <div className="stories-container">
          {users.map((element)=>{
            return <Story story={element} key={element.id} id={element.id}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default Storybox;
