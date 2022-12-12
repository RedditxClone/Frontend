import classes from './DragAndDrop.style.module.css';
import UploadButton from './UploadButton';

function DragAndDrop({ setCurrentFiles /* currentFiles */ }) {
  return (
    <div className={classes.container}>
      <div className={classes['images-container']}>
        <div className={classes['upload-image']}>
          <UploadButton setCurrentFiles={setCurrentFiles} />
          {/* {currentFiles.map(file => ())} */}
        </div>
      </div>
    </div>
  );
}

export default DragAndDrop;
