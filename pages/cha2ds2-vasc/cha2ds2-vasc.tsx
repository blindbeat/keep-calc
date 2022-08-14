import classNames from "classnames"
import Checkbox from "../../components/form-parts/checkbox/checkbox"
import styles from "./cha2ds2-vasc.module.css"

const CHECKBOX_ARRAY: string[] = [
  "Hypertension history",
  `Stroke/TIA/thromboembolism history`,
  "Vascular disease history (prior MI, peripheral artery disease, or aortic plaque)",
  "Diabetes history",
  "CHF history",
]

const Cha2ds2Vasc = () => (
  <form className={classNames(styles.form, "shadow")}>
    {CHECKBOX_ARRAY.map((name) => (
      <Checkbox key={name} name={name} />
    ))}
  </form>
)

export default Cha2ds2Vasc
