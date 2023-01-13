import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

interface Props {
  title: String,
  body: React.ReactElement,
  onAction: (a: any) => void
};


const ModalContent: React.FC<Props> = ({ title, body, onAction }) => {
  return (
    <div className={classes['modal-content']}>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.body}>{body}</p>
      <button className={classes.button} onClick={onAction}>OK</button>
    </div>
  );
};

const Modal: React.FC<Props> = (props) => {
  const ModalElement = document.getElementById('modal');

  return (
    <>
      {ModalElement ? '' : <div>{"Please put <div id='modal'></div> in index.html"}</div>}
      {ModalElement && ReactDOM.createPortal(
        <div className={classes.backdrop} onClick={props.onAction} />,
        ModalElement
      )}
      {ModalElement && ReactDOM.createPortal(
        <ModalContent {...props} />,
        ModalElement
      )}
    </>
  );
};


export default Modal;