/* eslint-disable react/self-closing-comp */
import './Loader.css';

export default function Loader() {
  return (
    <div className="loader-flexbox">
      <div className="mesh-loader">
        <div className="set-one">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="set-two">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}
