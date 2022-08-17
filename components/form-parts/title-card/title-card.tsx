import classNames from 'classnames'
import commonStyles from '../common.module.css'
import styles from './title-card.module.css'

interface Props {
  title: string
  description: string
}

const TitleCard = ({ title, description }: Props) => (
  <div className={classNames(commonStyles.formPart, styles.card)}>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
)

export default TitleCard
