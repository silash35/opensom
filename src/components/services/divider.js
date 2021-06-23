import styles from "./divider.module.scss";

export default function Divider() {
  return (
    <div className={styles.divider}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="m 282.30042,49.154877 a -849.44574,642.37103 0 0 1 172.54687,10.441148 c 82.08436,11.547931 161.56465,32.245774 243.42257,44.799735 116.60226,17.89447 238.02938,18.9761 354.44764,0.41807 C 1101.2979,97.088541 1150.6476,84.528992 1200,71.015442 V 120 H 0 V 90.72925 A -849.44574,642.37103 0 0 1 282.30042,49.154877 Z"
          className={styles.fill}
        />
      </svg>
    </div>
  );
}
