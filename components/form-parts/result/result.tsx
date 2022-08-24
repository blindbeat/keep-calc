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
      'shadow-strong',
      score === null && 'invisible'
    )}
  >
    {score !== null && (
      <>
        <span className={styles.score}>{score}</span>
        <span className={styles.brief}>{`${
          generateResult(score).risk
        }% annual\n stroke risk`}</span>
      </>
    )}
  </div>
)
export default Result
