import "./index.css";

function Display() {
  return (
    <>
      <div className="display-container">
        <div className="first-container">
          <div className="item-1">Hello</div>
          <div className="item-3">React</div>
          <div className="item-2">World</div>
          {/* <div className="item-1"></div>
          <div className="item-2"></div>
          <div className="item-3"></div> */}
        </div>
        <div className="grid-container">
          <div className="grid-item-1"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
      </div>
      <div className="video-container">
        <video autoPlay muted loop playsInline id="inter-vid">
          <source src="/inter-vid.mp4" type="video/mp4" />
        </video>
        <div className="name">INTEREACT</div>
        <div className="div">REACT</div>
      </div>
    </>
  );
}

export default Display;
