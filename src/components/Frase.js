import styles from './Frase.module.css';

function Frase(){
    return(
        <div className={styles.fraseContainer }>
            <p classname={styles.fraseContent}>This is a component with a phrase</p>
        </div>
    );
}

export default Frase;