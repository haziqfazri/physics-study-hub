/**
 * Sidebar Configuration
 */

import type { DefaultTheme } from 'vitepress'

export const sidebars: DefaultTheme.Sidebar = {
  '/lectures/': [
    { text: 'Topic 1', link: '/lectures/01-measurements-and-units' },
    { text: 'Topic 2', link: '/lectures/02-kinematics' },
    { text: 'Topic 3', link: '/lectures/03-dynamics' },
    { text: 'Topic 4', link: '/lectures/04-energy-and-power' },
    { text: 'Topic 5', link: '/lectures/05-circular-motion' },
    { text: 'Topic 6', link: '/lectures/06-rotation-of-rigid-body' },
    { text: 'Topic 7', link: '/lectures/07-oscillations-and-waves' },
    { text: 'Topic 8', link: '/lectures/08-physics-of-matter' },
    { text: 'Topic 9', link: '/lectures/09-thermodynamics' }
  ],

  '/tutorials/': [
    { text: 'Functions', link: '/tutorials/chapter-functions-tutorial-1' },
    { text: 'Lists', link: '/tutorials/chapter-lists-tutorial-1' },
    { text: 'Tuples', link: '/tutorials/chapter-tuples-tutorial-1' },
    { text: 'Sets', link: '/tutorials/chapter-sets-tutorial-1' },
    { text: 'Dictionaries', link: '/tutorials/chapter-dictionaries-tutorial-1' },
    { text: 'Combined Data Structures', link: '/tutorials/chapter-mixed-datastructures-tutorial-1' },
    { text: 'Files', link: '/tutorials/chapter-files-tutorial-1' },
    { text: 'DataFrame & Data Analysis', link: '/tutorials/chapter-dataframe-tutorial-1' }
  ],

  '/labs/': [
    { text: 'Lab Report Writing Format', link: '/labs/00-lab-report-writing-format' },
    { text: 'Experiment 1', link: '/labs/01-measurements-and-uncertainties' },
    { text: 'Experiment 2', link: '/labs/02-kinematics' },
    { text: 'Experiment 3', link: '/labs/03-energy' },
    { text: 'Experiment 4', link: '/labs/04-rotation-of-rigid-body' },
    { text: 'Experiment 5', link: '/labs/05-simple-harmonic-motion' },
    { text: 'Experiment 6', link: '/labs/06-standing-waves' }
  ]
}