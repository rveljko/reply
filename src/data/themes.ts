import { IMAGE_PATH } from '../utils/constants'
import { Theme } from '../utils/types'

export const themes: Theme[] = [
  {
    label: 'System Preference',
    imageUrl: `${IMAGE_PATH}theme-system-preference.svg`,
  },
  {
    label: 'Light',
    imageUrl: `${IMAGE_PATH}theme-light.svg`,
  },
  {
    label: 'Dark',
    imageUrl: `${IMAGE_PATH}theme-dark.svg`,
  },
]
