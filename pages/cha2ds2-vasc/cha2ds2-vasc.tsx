import classNames from 'classnames'
import Checkbox from 'components/form-parts/checkbox/checkbox'
import TitleCard from 'components/form-parts/title-card/title-card'
import Radio from 'components/form-parts/radio/radio'
import styles from './cha2ds2-vasc.module.css'

const CHECKBOX_ARRAY: string[] = [
  'Hypertension history',
  `Stroke/TIA/thromboembolism history`,
  'Vascular disease history (prior MI, peripheral artery disease, or aortic plaque)',
  'Diabetes history',
  'CHF history',
]

const Cha2ds2Vasc = () => (
  <>
    <TitleCard
      title="CHA₂DS₂-VASc Score for Atrial Fibrillation Stroke Risk"
      description="Calculates stroke risk for patients with atrial fibrillation, possibly better than the CHADS₂ Score."
    />
    <form className={classNames(styles.form, 'shadow')}>
      {CHECKBOX_ARRAY.map((name) => (
        <Checkbox key={name} name={name} />
      ))}
      <Radio name="hello" options={[]} />
    </form>
  </>
)

export default Cha2ds2Vasc
