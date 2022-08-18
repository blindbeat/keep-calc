import classNames from 'classnames'
import Checkbox from 'components/form-parts/checkbox/checkbox'
import TitleCard from 'components/form-parts/title-card/title-card'
import Radio from 'components/form-parts/radio/radio'
import Result from 'components/form-parts/result'
import { useForm } from 'react-hook-form'
import styles from './cha2ds2-vasc.module.css'
import { calcScore, CHECKBOX_ARRAY, InputOptions, RADIO_ARRAY } from './utils'

const Cha2ds2Vasc = () => {
  const { register, watch } = useForm<InputOptions>()

  const formValues = watch()
  const result = Object.keys(formValues).length ? calcScore(formValues) : null

  return (
    <>
      <form className={classNames(styles.form, 'shadow')}>
        <TitleCard
          title="CHA₂DS₂-VASc Score for Atrial Fibrillation Stroke Risk"
          description="Calculates stroke risk for patients with atrial fibrillation, possibly better than the CHADS₂ Score."
        />
        {RADIO_ARRAY.map(({ name, options }) => (
          <Radio
            key={name}
            name={name}
            options={options.map((option) => option.title)}
            register={register}
          />
        ))}
        {CHECKBOX_ARRAY.map(({ name, description }) => (
          <Checkbox
            key={name}
            name={name}
            description={description}
            register={register}
          />
        ))}
      </form>
      {result !== null && <Result score={result} />}
    </>
  )
}
export default Cha2ds2Vasc
