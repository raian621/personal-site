import { Dispatch, ReactNode, SetStateAction } from "react";
import styles from '../styles/Modal.module.css'

const Modal = ({ children, visible, setVisible, heading } : {
  heading:string, 
  children:ReactNode, 
  visible:boolean
  setVisible:Dispatch<SetStateAction<boolean>>
}) => {
  return(
    <div className={visible ? styles.modal : styles.modalInvisble}>
      <div className={styles.modalHeader}>
        <h1>{ heading }</h1>
        <button onClick={() => setVisible(false)}>x</button>
      </div>
      { children }
    </div>
  );
}

export default Modal;