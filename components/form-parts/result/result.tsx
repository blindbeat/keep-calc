import classNames from 'classnames'
import styles from './result.module.css'
import { generateResult } from '../../../pages/cha2ds2-vasc/utils'

interface Props {
  score: number
}

const Result = ({ score }: Props) => {
  const { risk } = generateResult(score)
  return (
    <div className={classNames(styles.container, 'shadow')}>
      <span className={styles.score}>{score}</span>
      <span>{`${risk}% annual stroke risk cancer in year`}</span>
    </div>
  )
}
export default Result
