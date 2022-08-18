import classNames from 'classnames'
import { UseFormRegister } from 'react-hook-form'
import styles from './checkbox.module.css'
import commonStyles from '../common.module.css'

interface Props {
  name: string
  description: string
  register: UseFormRegister<any>
}

const Checkbox = ({ name, description, register }: Props) => (
  <label className={classNames(styles.label)}>
    <div
      className={classNames(
        commonStyles.formPart,
        styles.wrapper,
        styles.titleWrapper
      )}
    >
      <span className={commonStyles.title}>{description}</span>
    </div>
    <div
      className={classNames(
        commonStyles.formPart,
        styles.wrapper,
        styles.checkboxWrapper
      )}
    >
      <input type="checkbox" {...register(name)} />
    </div>
  </label>
)

export default Checkbox
