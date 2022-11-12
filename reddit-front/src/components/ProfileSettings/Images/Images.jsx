/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import './ImagesStyle.css';

export default function Images() {
  return (
    <div className="images">
      <h3 className="main-h3">Images</h3>
      <h3 className="h3">Avatar and banner image</h3>
      <p className="p3">Images must be .png or .jpg format</p>
      <div className="Div-img-1">
        <div
          className="div-1"
          style={{ backgroundColor: '#f2f4f5' }}
        >
          <ControlPointIcon
            style={{
              marginLeft: '34px',
              marginTop: '14px',
              fontSize: '2.7rem',
              color: '#0079d3'
            }}
          />
          <p className="p">
            <div className="div-span-1">Drag and Drop or</div>
            <div className="div-span-2"> Upload Avatar Image</div>
          </p>
        </div>
        <div
          className="div-2"
          style={{ backgroundColor: '#f2f4f5' }}
        >
          <ControlPointIcon
            style={{
              marginLeft: '166px',
              marginTop: '14px',
              fontSize: '2.7rem',
              color: '#0079d3'
            }}
          />
          <p
            className="p"
            style={{ marginLeft: '137px' }}
          >
            <div className="div-span-1">Drag and Drop or</div>
            <div className="div-span-2"> Upload Avatar Image</div>
          </p>
        </div>
      </div>
    </div>
  );
}
