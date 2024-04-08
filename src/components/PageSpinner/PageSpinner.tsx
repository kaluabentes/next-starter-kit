import styles from "./PageSpinner.module.scss"
import Spinner from "../Spinner"

export default function PageSpinner() {
  return (
    <div className={styles.container}>
      <Spinner />
    </div>
  )
}
