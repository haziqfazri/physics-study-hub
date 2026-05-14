/**
 * Sidebar Configuration
 */

import type { DefaultTheme } from 'vitepress'

export const sidebars: DefaultTheme.Sidebar = {
  '/lectures/': [
    { text: 'Chapter 1', link: '/lectures/chapter-01' },
    { text: 'Chapter 2', link: '/lectures/chapter-02' },
    { text: 'Chapter 3', link: '/lectures/chapter-03' },
    { text: 'Chapter 4', link: '/lectures/chapter-04' },
    { text: 'Chapter 5', link: '/lectures/chapter-05' },
    { text: 'Chapter 6', link: '/lectures/chapter-06' }
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
    { text: 'Lab Report Writing Format', link: '/labs/lrt-format' },
    { text: 'Experiment 1', link: '/labs/lab-01' },
    { text: 'Experiment 2', link: '/labs/lab-02' },
    { text: 'Experiment 3', link: '/labs/lab-03' },
    { text: 'Experiment 4', link: '/labs/lab-04' },
    { text: 'Experiment 5', link: '/labs/lab-05' },
    { text: 'Experiment 6', link: '/labs/lab-06' }
  ]
}