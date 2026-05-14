import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Physics I",
  description: "Physics Notes, Tutorials, Labs, Formula Sheets and Past Year",
  base: '/physics-study-hub/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }], // Updated href
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css' }]
  ],

  markdown: {
    config: (md) => {
      md.use(mathjax3)
    }
  },

  themeConfig: {
    
    lastUpdated: {
      text: 'Last Updated', 
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
        timeZone: 'Asia/Kuala_Lumpur'
      }
    },

    nav: [
      {
        text: 'Home',
        link: '/'
      },

      {
        text: 'Course Informations',
        items: [
          { text: 'Course Outline', link: '/course/course-outline' },
          { text: 'Assessments', link: '/course/assessments' }
        ],
        activeMatch: '^/course/'
      },

      {
        text: 'Lectures',
        items: [
          { text: 'Physical Quantities & Measurements', link: '/lectures/topic-01' },
          { text: 'Kinematics of Linear Motion', link: '/lectures/topic-02' },
          { text: 'Dynamics of Linear Motion', link: '/lectures/topic-03' },
          { text: 'Work, Energy & Power', link: '/lectures/topic-04' },
          { text: 'Circular Motion', link: '/lectures/topic-05' },
          { text: 'Rotation of Rigid Body', link: '/lectures/topic-06' },
          { text: 'Oscillations & Waves', link: '/lectures/topic-07' },
          { text: 'Physics of Matter', link: '/lectures/topic-08' },
          { text: 'Kinetic Theory & Thermodynamics', link: '/lectures/topic-09' }
        ],
        activeMatch: '^/lectures/'
      },

      {
        text: 'Formula Sheets',
        link: '/formulas/list-const-formulae',
        activeMatch: '^/formulas/'
      },
      
      {
        text: 'Tutorials',
        items: [
          { text: 'Tutorial 1', link: '/tutorials/tutorial-01' },
          { text: 'Tutorial 2', link: '/tutorials/tutorial-02' },
          { text: 'Tutorial 3', link: '/tutorials/tutorial-03' }
        ],
        activeMatch: '^/tutorials/'
      },

      {
        text: 'Labs',
        items: [
          { text: 'Lab Report Writing Format', link: '/labs/lrt-format' },
          { text: 'Experiment 1', link: '/labs/lab-01' },
          { text: 'Experiment 2', link: '/labs/lab-02' },
          { text: 'Experiment 3', link: '/labs/lab-03' },
          { text: 'Experiment 4', link: '/labs/lab-04' },
          { text: 'Experiment 5', link: '/labs/lab-05' },
          { text: 'Experiment 6', link: '/labs/lab-06' }
        ],
        activeMatch: '^/labs/'
      },

      {
        text: 'Past Year',
        link: '/past-year/',
        activeMatch: '^/past-year/'
      }
    ],

    sidebar: {

      '/lectures/': [
        {
          text: 'Chapter 1',
          link: '/lectures/chapter-01'
        },
        {
          text: 'Chapter 2',
          link: '/lectures/chapter-02'
        },
        {
          text: 'Chapter 3',
          link: '/lectures/chapter-03'
        },
        {
          text: 'Chapter 4',
          link: '/lectures/chapter-04'
        },
        {
          text: 'Chapter 5',
          link: '/lectures/chapter-05'
        },
        {
          text: 'Chapter 6',
          link: '/lectures/chapter-06'
        },
      ],

      '/tutorials/': [
        {
          text: 'Functions',
          link: '/tutorials/chapter-functions-tutorial-1'
        },
        {
          text: 'Lists',
          link: '/tutorials/chapter-lists-tutorial-1'
        },
        {
          text: 'Tuples',
          link: '/tutorials/chapter-tuples-tutorial-1'
        },
        {
          text: 'Sets',
          link: '/tutorials/chapter-sets-tutorial-1'
        },
        {
          text: 'Dictionaries',
          link: '/tutorials/chapter-dictionaries-tutorial-1'
        },
        {
          text: 'Combined Data Structures',
          link: '/tutorials/chapter-mixed-datastructures-tutorial-1'
        },
        {
          text: 'Files',
          link: '/tutorials/chapter-files-tutorial-1'
        },
        {
          text: 'DataFrame & Data Analysis',
          link: '/tutorials/chapter-dataframe-tutorial-1'
        }
      ],

      '/labs/': [
        {
          text: 'Lab Report Writing Format',
          link: '/labs/lrt-format'
        },
        {
          text: 'Experiment 1',
          link: '/labs/lab-01'
        },
        {
          text: 'Experiment 2',
          link: '/labs/lab-02'
        },
        {
          text: 'Experiment 3',
          link: '/labs/lab-03'
        },
        {
          text: 'Experiment 4',
          link: '/labs/lab-04'
        },
        {
          text: 'Experiment 5',
          link: '/labs/lab-05'
        },
        {
          text: 'Experiment 6',
          link: '/labs/lab-06'
        }
      ],

      /*
      '/exams/': [
        {
          text: 'Sample Question',
          link: '/exams/#sample-question'
        },
        {
          text: 'Sample Question Answer',
          link: '/exams/#sample-question-answer'
        },
        {
          text: 'Exam 1',
          link: '/exams/#exam-1'
        },
        {
          text: 'Exam 2',
          link: '/exams/#exam-2'
        },
        {
          text: 'Exam 3',
          link: '/exams/#exam-3'
        },
        {
          text: 'Exam 4',
          link: '/exams/#exam-4'
        },
        {
          text: 'Exam 5',
          link: '/exams/#exam-5'
        },
        {
          text: 'Exam 6',
          link: '/exams/#exam-6'
        },
        {
          text: 'Exam 7',
          link: '/exams/#exam-7'
        },
        {
          text: 'Skema KMK Pra-PSPM 25/26',
          link: '/exams/#skema-kmk-pra-pspm-25-26'
        }
      ]
      */
    },

    footer: {
      message: 'Released under the MIT License. All rights reserved.',
      copyright: 'Copyright © 2026-Present Muhammad Haziq Fazri'
    },

    search: {
      provider: 'local'
    }
  }
})
