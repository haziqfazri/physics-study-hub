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
            { text: 'Course Assessments', link: '/course/assessments' }
        ],
        activeMatch: '^/course/'
    },
    {
        text: 'Formula Sheets',
        link: '/formulas/list-const-formulae',
        activeMatch: '^/formulas/'
    },
    {
        text: 'Lectures',
        items: [
            { text: 'Physical Quantities & Measurements', link: '/lectures/01-measurements-and-units' },
            { text: 'Kinematics of Linear Motion', link: '/lectures/02-kinematics' },
            { text: 'Dynamics of Linear Motion', link: '/lectures/03-dynamics' },
            { text: 'Work, Energy & Power', link: '/lectures/04-energy-and-power' },
            { text: 'Circular Motion', link: '/lectures/05-circular-motion' },
            { text: 'Rotation of Rigid Body', link: '/lectures/06-rotation-of-rigid-body' },
            { text: 'Oscillations & Waves', link: '/lectures/07-oscillations-and-waves' },
            { text: 'Physics of Matter', link: '/lectures/08-physics-of-matter' },
            { text: 'Kinetic Theory & Thermodynamics', link: '/lectures/09-thermodynamics' }
        ],
        activeMatch: '^/lectures/'
    },
    {
        text: 'Tutorials',
        link: 'tutorials/index',
        activeMatch: '^/tutorials/'
    },
    {
        text: 'Labs',
        items: [
            { text: 'Lab Report Writing Format', link: '/labs/00-lab-report-writing-format' },
            { text: 'Experiment 1', link: '/labs/01-measurements-and-uncertainties' },
            { text: 'Experiment 2', link: '/labs/02-kinematics' },
            { text: 'Experiment 3', link: '/labs/03-energy' },
            { text: 'Experiment 4', link: '/labs/04-rotation-of-rigid-body' },
            { text: 'Experiment 5', link: '/labs/05-simple-harmonic-motion' },
            { text: 'Experiment 6', link: '/labs/06-standing-waves' }
        ],
        activeMatch: '^/labs/'
     }
]