import classNames from 'classnames'
import { UseFormRegister } from 'react-hook-form'
import styles from './checkbox.module.css'
import commonFormStyles from '../form-parts.module.css'

interface Props {
  name: string
  description: string
  register: UseFormRegister<any>
}

const Checkbox = ({ name, description, register }: Props) => (
  <label className={classNames(styles.label)}>
    <div
      className={classNames(
        commonFormStyles.formPart,
        styles.wrapper,
        styles.titleWrapper
      )}
    >
      <span className={commonFormStyles.title}>{description}</span>
    </div>
    <div
      className={classNames(
        commonFormStyles.formPart,
        styles.wrapper,
        styles.checkboxWrapper
      )}
    >
      <input type="checkbox" {...register(name)} />
    </div>
  </label>
)

export default Checkbox
