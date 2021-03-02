import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/pedrofac.png" />
      <div>
        <strong>Pedro Façanha</strong>
        <p>
          <img alt="level" src="icons/level.svg" />
          Level 1
        </p>
      </div>
    </div>
  );
}
