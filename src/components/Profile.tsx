import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/pedrofac.png" />
      <div>
        <strong>Pedro Façanha</strong>
        <p>
          <img alt="level" src="icons/level.svg" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
