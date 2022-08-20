import classNames from 'classnames'
import commonFormStyles from '../form-parts.module.css'
import styles from './title-card.module.css'

interface Props {
  title: string
  description: string
}

const TitleCard = ({ title, description }: Props) => (
  <div className={classNames(commonFormStyles.formPart, styles.card)}>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
)

export default TitleCard
