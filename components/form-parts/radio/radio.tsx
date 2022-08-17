import classNames from 'classnames'
import styles from './radio.module.css'
import commonStyles from '../common.module.css'

interface Props {
  name: string
  options: string[]
}

const Radio = ({ name, options }: Props) => (
  <div className={styles.wrapper}>
    <p className={classNames(commonStyles.formPart, styles.title)}>{name}</p>
    <div className={classNames(commonStyles.formPart, styles.optionsContainer)}>
      {options.map((option) => (
        <label key={option} className={styles.label}>
          <span>{option}</span>
          <input name={name} type="radio" />
        </label>
      ))}
    </div>
  </div>
)

export default Radio
