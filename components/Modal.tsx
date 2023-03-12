import { Dispatch, ReactNode, SetStateAction } from "react";
import styles from '../styles/Modal.module.css'

const Modal = ({ children, visible, toggleVisible, heading } : {
  heading:string, 
  children:ReactNode,
  visible:boolean
  toggleVisible:Function
}) => {
  return(
    <>
    <div className={styles.modalBackground} onClick={() => toggleVisible()}/>
    <div className={visible ? styles.modal : styles.modalInvisble}>
      <div className={styles.modalHeader}>
        <h1>{ heading }</h1>
        <button onClick={() => toggleVisible()}>x</button>
      </div>
      <div className={styles.modalChild}>
        { children }
      </div>
    </div>
    </>
  );
}

export default Modal;