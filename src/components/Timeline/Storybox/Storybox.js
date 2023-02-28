import React, { useContext, useRef } from "react";
import useRefs from "react-use-refs";
import Story from "../Story/Story";
import "./Storybox.scss";
import InstaContext from "../../../context/InstaContext";
const Storybox = () => {
  const getContext = useContext(InstaContext);
  const [hScroll, storyCont, btnLeft, btnRight] = useRefs();
  const { users } = getContext;
  let scrollAmount = 330;
  let scrollPosition = 0;
  const horizontalSlide = (e) => {
    let val = e.target.parentNode.id === "button-left" ? 1 : -1;
    // val=-1
    let maxScroll = hScroll.current.offsetWidth-storyCont.current.offsetWidth;
    // console.log(hScroll.current.offsetWidth,hScroll.current.offsetWidth);
    scrollPosition += val * scrollAmount;
    if (scrollPosition > 0) {
      scrollPosition = 0;
      btnLeft.current.style.opacity = "0";
    } else {
      btnLeft.current.style.opacity = "1";
    }
    if (scrollPosition < maxScroll) {
      scrollPosition = maxScroll;
      btnRight.current.style.opacity = "0";
    } else {
      btnRight.current.style.opacity = "1";
    }
    storyCont.current.style.left = scrollPosition + "px";
  };
  return (
    <div className="story-container">
      <div className="horizontal-scroll" ref={hScroll}>
        <button
          className="btn-scroll"
          id="button-left"
          ref={btnLeft}
          onClick={horizontalSlide}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          className="btn-scroll"
          id="button-right"
          ref={btnRight}
          onClick={horizontalSlide}
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
        <div className="stories-container" ref={storyCont}>
          {users.map((element) => {
            return <Story story={element} key={element.id} id={element.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Storybox;
