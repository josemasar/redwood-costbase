import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import NavBar from 'src/components/NavBar/NavBar'
import Hero from 'src/components/Home/Hero/Hero'
import Features from 'src/components/Home/Features/Features'
import StartNow from 'src/components/Home/StartNow/StartNow'
import Footer from 'src/components/Home/Footer/Footer'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <NavBar />
      <Hero />
      <Features />
      <StartNow />
      <Footer />
    </>
  )
}

export default HomePage
