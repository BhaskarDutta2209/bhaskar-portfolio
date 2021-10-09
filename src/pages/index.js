import React from 'react'

import Layout from '../components/Layout'
import Intro from '../components/Intro'
import IntroDefination from '../components/IntroDefination'


export default function Home() {
  return (
    <div>
      <Layout>
        <Intro />
        <IntroDefination />
      </Layout>
    </div>
  )
}
