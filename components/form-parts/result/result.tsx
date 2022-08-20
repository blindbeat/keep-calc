import classNames from 'classnames'
import { generateResult } from 'utils/cha2ds2-vasc'
import styles from './result.module.css'
import commonFormStyles from '../form-parts.module.css'

interface Props {
  score: number | null
}

const Result = ({ score }: Props) => (
  <div
    className={classNames(
      commonFormStyles.formPart,
      styles.container,
      'shadow',
      score === null && 'invisible'
    )}
  >
    {score !== null && (
      <>
        <span className={styles.score}>{score}</span>
        <span>{`${generateResult(score).risk}% annual stroke risk`}</span>
      </>
    )}
  </div>
)
export default Result
