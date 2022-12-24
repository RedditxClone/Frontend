import classes from './DragAndDrop.style.module.css';
/**
 * This component is responsible to put the image in a box and render a button to delete it, too
 * It is called by its parent {@link DragAndDrop}
 * @param {Objec} file - This is the current uploaded file(image)
 * @param {Function} handleDelete - This is a function passed by props from the parent component
 * It is responsible to delete the current image from the list of images
 * @returns {React.component}
 */
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
