import classes from './DragAndDrop.style.module.css';

function ImageBox({ file, handleDelete }) {
  const imageType = file.type.includes('image');
  const onRemoveHandler = () => {
    console.log('delete', file);
    handleDelete(file);
  };
  return (
    <div className={classes['image-box']}>
      {imageType ? (
        <img
          alt=""
          src={URL.createObjectURL(file)}
        />
      ) : (
        <video muted>
          <source
            src={URL.createObjectURL(file)}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      )}
      <span
        className={classes['delete-image']}
        onClick={onRemoveHandler}
      >
        &#10006;
      </span>
    </div>
  );
}

export default ImageBox;
