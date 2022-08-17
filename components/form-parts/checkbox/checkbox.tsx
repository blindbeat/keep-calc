import classNames from 'classnames'
import styles from './checkbox.module.css'

interface Props {
  name: string
}

const Checkbox = ({ name }: Props) => (
  <label className={classNames(styles.label)}>
    <div className={classNames(styles.wrapper, styles.name)}>
      <span>{name}</span>
    </div>
    <div className={classNames(styles.wrapper, styles.checkbox)}>
      <input type="checkbox" />
    </div>
  </label>
)

export default Checkbox
