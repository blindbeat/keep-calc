import classNames from "classnames"
import styles from "./Checkbox.module.css"

interface Props {
  name: string
}

const Checkbox = ({ name }: Props) => (
  <label className={classNames(styles.label)}>
    <div className={classNames(styles.container, styles.name)}>{name}</div>
    <div className={classNames(styles.container, styles.checkbox)}>
      <input type="checkbox" />
    </div>
  </label>
)

export default Checkbox
