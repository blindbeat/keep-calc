import classNames from 'classnames'
import { UseFormRegister } from 'react-hook-form'
import styles from './radio.module.css'
import commonFormStyles from '../form-parts.module.css'

interface Props {
  name: string
  optionNames: string[]
  register: UseFormRegister<any>
}

const Radio = ({ name, optionNames, register }: Props) => (
  <div className={styles.wrapper}>
    <span
      className={classNames(
        commonFormStyles.formPart,
        commonFormStyles.title,
        styles.title
      )}
    >
      {name}
    </span>
    <div
      className={classNames(commonFormStyles.formPart, styles.optionsContainer)}
    >
      {optionNames.map((option) => (
        <label key={option} className={styles.label}>
          <span>{option}</span>
          <input type="radio" value={option} {...register(name)} />
        </label>
      ))}
    </div>
  </div>
)

export default Radio
