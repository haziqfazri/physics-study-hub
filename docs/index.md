---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: Home

hero:
  name: "SP015 Physics I"
  text: "Course Notes, Tutorials, Labs & Formula Sheets"
  actions:
    - theme: brand
      text: Start Learning
      link: /course/course-outline
    - theme: alt
      text: View Formulas
      link: /formulas/list-const-formulae

features:
  - title: 📚 Lecture Notes
    details: Comprehensive lecture notes covering all 9 topics from Physical Quantities to Thermodynamics
  
  - title: 📝 Formula Sheets
    details: Quick reference formula sheets for every topic to help you solve problems efficiently
  
  - title: 🔬 Lab Experiments
    details: Practical lab experiments with detailed procedures
  
  - title: ✏️ Tutorials
    details: Practice problems and solutions to reinforce your understanding
  
  - title: 📋 Course Info
    details: Complete course outline, schedule, and assessment breakdown
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/haziqfazri.png',
    name: 'Muhammad Haziq Fazri',
    title: 'Physics Lecturer',
    org : 'Kolej Matrikulasi Labuan',
    links: [
      { icon: 'whatsapp', link :'https://wasap.my/+60173874434'},
      { icon: 'gmail', link: 'mailto:bm-3466@moe-dl.edu.my' }
    ]
  },
]
</script>

<br>

# Course Lecturer

<VPTeamMembers size="small" :members />
