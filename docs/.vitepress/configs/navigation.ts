/**
 * Navigation configuration for the VitePress site.
 * This file defines the structure of the navigation menu and sidebar.
 * @see https://vitepress.dev/reference/default-theme-config#nav
 * @see https://vitepress.dev/reference/default-theme-config#sidebar
 */

import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
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
     }
]