import { useEffect, useState } from 'react';
import { IconButton, Stack } from '@mui/material';
import { BsPlusLg } from 'react-icons/bs';
import classes from './DragAndDrop.style.module.css';
import ImageBox from './ImageBox';
/**
 * This is a component that is called by its parent {@link CreatePostTabs}
 * It is responsible for uploading the images.
 * @param {Function} setCurrentFiles - This function is passed by props from the parent
 * to set the current media in the parent
 * @param {Array} currentFiles - This is an array of files(images)
 *  that contains the current uploaded images
 * @returns {React.component}
 */
function DragAndDrop({ setCurrentFiles, currentFiles }) {
  const [previewedMedia, setPreviewedMedia] = useState([]);
  useEffect(() => {
    setCurrentFiles(currentFiles);
    setPreviewedMedia(currentFiles);
    console.log(currentFiles);
  }, []);

  const handleDelete = (fileName) => {
    setCurrentFiles((prev) => prev.filter((file) => file !== fileName));
    setPreviewedMedia((prev) => prev.filter((file) => file !== fileName));
  };

  const handleImages = (e) => {
    const file = e.target.files[0];
    console.log('alooo', file);
    setCurrentFiles((prev) => [...prev].concat(file));
    setPreviewedMedia((prev) => [...prev].concat(file));
  };

  return (
    <div className={classes.container}>
      <div className={classes['images-container']}>
        {previewedMedia.map((file) => (
          <ImageBox
            key={file.name}
            file={file}
            handleDelete={handleDelete}
          />
        ))}
        <div className={classes['upload-image']}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <label htmlFor="icon-button-file">
              <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                onChange={handleImages}
                hidden
              />
              <IconButton
                aria-label="upload picture"
                component="span"
              >
                <BsPlusLg size={20} />
              </IconButton>
            </label>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default DragAndDrop;
