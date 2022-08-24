interface CheckboxOption {
  name: string
  score: number
  description: string
}
type RadioOption = {
  name: string
  options: {
    optionName: string
    score: number
  }[]
}

export const CHECKBOX_ARRAY: CheckboxOption[] = [
  { name: 'hypertension', description: 'hypertension history', score: 1 },
  {
    name: 'stroke',
    description: 'stroke/TIA/thromboembolism history history',
    score: 2,
  },
  {
    name: 'vascular',
    description:
      'vascular disease history (prior MI, peripheral artery disease, or aortic plaque) history',
    score: 1,
  },
  { name: 'diabetes', description: 'diabetes history', score: 1 },
  { name: 'CHF', description: 'CHF history', score: 1 },
]
export const RADIO_ARRAY: RadioOption[] = [
  {
    name: 'age',
    options: [
      { optionName: '<65', score: 0 },
      { optionName: '65-74', score: 1 },
      { optionName: '>74', score: 2 },
    ],
  },
  {
    name: 'sex',
    options: [
      { optionName: 'female', score: 1 },
      { optionName: 'male', score: 0 },
    ],
  },
]

type RadioOptions = Record<typeof RADIO_ARRAY[number]['name'], string | null>
type CheckboxOptions = Record<typeof CHECKBOX_ARRAY[number]['name'], boolean>
export type InputOptions = RadioOptions | CheckboxOptions

const checkboxNames = CHECKBOX_ARRAY.map((checkbox) => checkbox.name)
const radioNames = RADIO_ARRAY.map((radio) => radio.name)
export const calcScore = (inputs: InputOptions): number | null => {
  if (Object.values(inputs).includes(null)) return null

  let result = 0
  for (const [key, value] of Object.entries(inputs)) {
    if (checkboxNames.includes(key)) {
      if (!value) continue
      const { score } = CHECKBOX_ARRAY.find(
        (checkbox) => checkbox.name === key
      )!
      result += score
    } else if (radioNames.includes(key)) {
      const { score } = RADIO_ARRAY.find(
        (radio) => radio.name === key
      )!.options.find((option) => option.optionName === value)!
      result += score
    } else {
      throw new Error('unknown input')
    }
  }

  return result
}

const cha2dScores = [0.2, 0.6, 2.2, 3.2, 4.8, 7.2, 9.7, 11.2, 10.8, 12.2]
export const generateResult = (score: number) => ({
  score,
  risk: cha2dScores[score],
})
