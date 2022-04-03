import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Course from '../components/Course'
import CourseEnd from '../components/CourseEnd'
import CourseHighlights from '../components/CourseHighlights'
import CourseStructure from '../components/CourseStructure'
import CourseWork from '../components/CourseWork'
import Faq from '../components/Faq'
import Outcome from '../components/Outcome'
import People from '../components/People'
import WhyDt from '../components/WhyDt'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <WhyDt />
      <People/>
      <Outcome />
      <Course />
      <CourseStructure />
      <CourseWork />
      <CourseHighlights />
      <CourseEnd />
      <Faq/>
    </div>
  )
}
