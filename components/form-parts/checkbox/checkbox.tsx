import classNames from 'classnames'
import styles from './checkbox.module.css'
import commonStyles from '../common.module.css'

interface Props {
  name: string
}

const Checkbox = ({ name }: Props) => (
  <label className={classNames(styles.label)}>
    <div
      className={classNames(
        commonStyles.formPart,
        styles.wrapper,
        styles.titleWrapper
      )}
    >
      <span className={commonStyles.title}>{name}</span>
    </div>
    <div
      className={classNames(
        commonStyles.formPart,
        styles.wrapper,
        styles.checkboxWrapper
      )}
    >
      <input type="checkbox" />
    </div>
  </label>
)

export default Checkbox
