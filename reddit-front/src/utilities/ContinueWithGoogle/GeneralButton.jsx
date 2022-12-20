import classes from './GeneralButton.style.module.css';

function GeneralButton({ text, icon, onClick }) {
  return (
    <button
      type="button"
      className={classes['btn-container']}
      onClick={onClick}
    >
      <span className={classes['btn-icon']}>{icon}</span>
      <span className={classes['btn-text']}>{text}</span>
    </button>
  );
}

export default GeneralButton;
