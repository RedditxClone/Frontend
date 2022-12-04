/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import './ImagesStyle.css';
import { useState, useRef } from 'react';

export default function Images() {
  const inputRef = useRef();
  const inputRefCover = useRef();
  const [image, setImage] = useState(null);
  const [imageCover, setImageCover] = useState(null);
  const [isShow, setIsShow] = useState(false);
  const [isShowCover, setIsShowCover] = useState(false);
  const handleImage = (e) => {
    setImage(e.target.files);
    setIsShow(true);
  };
  const handleDragEnter = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const handleDragLeave = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setImage(e.dataTransfer);
    setIsShow(true);
  };

  const handleImageCover = (e) => {
    setImageCover(e.target.files);
    setIsShowCover(true);
  };
  const handleDragEnterCover = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const handleDragOverCover = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const handleDragLeaveCover = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const handleDropCover = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setImageCover(e.dataTransfer);
    setIsShowCover(true);
  };
  return (
    <div className="images">
      <h3 className="main-h3">Images</h3>
      <h3 className="h3">Avatar and banner image</h3>
      <p className="p3">Images must be .png or .jpg format</p>
      <div className="Div-img-1">
        {isShow && (
          <img
            className="div-1"
            src={image}
            alt=""
            width="110px"
            height="110px"
            style={{ border: 'none' }}
          />
        )}
        {!isShow && (
          <div
            className="div-1"
            style={{ backgroundColor: '#f2f4f5' }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onClick={() => inputRef.current.click()}
          >
            <ControlPointIcon
              style={{
                marginLeft: '34px',
                marginTop: '14px',
                fontSize: '2.7rem',
                color: '#0079d3'
              }}
              onClick={() => inputRef.current.click()}
            />
            <input
              type="file"
              hidden
              ref={inputRef}
              onChange={handleImage}
            />
            <p className="p">
              <div className="div-span-1">Drag and Drop or</div>
              <div className="div-span-2"> Upload Profile Image</div>
            </p>
          </div>
        )}
        {isShowCover && (
          <img
            className="div-2"
            src={imageCover}
            alt=""
            width="410px"
            height="120px"
            style={{ border: 'none' }}
          />
        )}
        {!isShowCover && (
          <div
            className="div-2"
            style={{ backgroundColor: '#f2f4f5' }}
            onDrop={handleDropCover}
            onDragOver={handleDragOverCover}
            onDragEnter={handleDragEnterCover}
            onDragLeave={handleDragLeaveCover}
            onClick={() => inputRefCover.current.click()}
          >
            <ControlPointIcon
              style={{
                marginLeft: '166px',
                marginTop: '14px',
                fontSize: '2.7rem',
                color: '#0079d3'
              }}
              onClick={() => inputRefCover.current.click()}
            />
            <input
              type="file"
              hidden
              ref={inputRefCover}
              onChange={handleImageCover}
            />
            <p
              className="p"
              style={{ marginLeft: '137px' }}
            >
              <div className="div-span-1">Drag and Drop or</div>
              <div className="div-span-2"> Upload Cover Image</div>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
