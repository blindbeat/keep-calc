import classNames from 'classnames'
import { UseFormRegister } from 'react-hook-form'
import styles from './radio.module.css'
import commonStyles from '../common.module.css'

interface Props {
  name: string
  options: string[]
  register: UseFormRegister<any>
}

const Radio = ({ name, options, register }: Props) => (
  <div className={styles.wrapper}>
    <p
      className={classNames(
        commonStyles.formPart,
        commonStyles.title,
        styles.title
      )}
    >
      {name}
    </p>
    <div className={classNames(commonStyles.formPart, styles.optionsContainer)}>
      {options.map((option) => (
        <label key={option} className={styles.label}>
          <span>{option}</span>
          <input type="radio" value={option} {...register(name)} />
        </label>
      ))}
    </div>
  </div>
)

export default Radio
