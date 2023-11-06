import { Component } from "solid-js";
import styles from './Spinner.module.scss';


const Spinner: Component = () => {
    return(
        <div class={styles.spinner_container}>
            <div class={styles.spinner}></div>
        </div>
    );
};

export default Spinner;