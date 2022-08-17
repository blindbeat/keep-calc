import styles from './Title-card.module.css'

interface Props {
  title: string
  description: string
}

const TitleCard = ({ title, description }: Props) => (
  <div className={styles.card}>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
)

export default TitleCard
