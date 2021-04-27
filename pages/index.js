import LandingSection from '../components/homePageSections/LandingSection/LandingSection'
import RecentLectureSection from '../components/homePageSections/recentLectures/RecentLectureSection'
import Layout from '../components/Layout'
import {homePageData} from '../data/homePageData'

let landingPageData = homePageData.data[0];
let recentLecPageData = homePageData.data[1];

export default function Home() {
  return (
    <Layout>
        <LandingSection data={landingPageData} />
        <RecentLectureSection data={recentLecPageData} />
    </Layout>
  )
}
