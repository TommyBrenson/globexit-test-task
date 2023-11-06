import { Component } from "solid-js";
import { IModal } from "../../types/components.interfaces";
import styles from './Modal.module.scss';

const Modal: Component<IModal> = (props) => {
    const { closeModal, child } = props;
    
    return (
        <div class={styles.overlay} onClick={closeModal}>
            <div class={styles.content}>
                {child}
            </div>
        </div>
    );
};

export default Modal;