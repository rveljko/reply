import { IMAGE_PATH } from '../utils/constants'
import { Chart } from '../utils/types'

export const charts: Chart[] = [
  {
    label: 'Line',
    imageUrl: `${IMAGE_PATH}chart-line.svg`,
  },
  {
    label: 'Bar',
    imageUrl: `${IMAGE_PATH}chart-bar.svg`,
  },
]
