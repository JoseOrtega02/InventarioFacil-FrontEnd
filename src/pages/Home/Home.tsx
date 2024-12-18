import { lazy, Suspense } from "react"
import { Helmet } from "react-helmet";
import { MainContainer } from "./components/mainContainer"
import TextContainer from "./components/textContainer"
import Loader from "@/src/components/styledComponents/Loader"

const ImageHome = lazy(()=>import("./components/ImageHome"))

import urlfont from "@fontsource/krona-one/files/krona-one-latin-400-normal.woff"
function Home() {
  return (
    <MainContainer>
        <Helmet>
        {/* Basic Metadata */}
        <title>Welcome to Our Website</title>
        <meta name="description" content="Explore our amazing website, featuring stunning visuals and engaging content." />
        <meta name="keywords" content="home, amazing website, visuals, content" />
        <meta name="author" content="José Ortega" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Welcome to Our Website" />
        <meta property="og:description" content="Explore our amazing website, featuring stunning visuals and engaging content." />
        <meta property="og:image" content="/image-home.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://inventariofacil.netlify.app/" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Welcome to Our Website" />
        <meta name="twitter:description" content="Explore our amazing website, featuring stunning visuals and engaging content." />
        <meta name="twitter:image" content="/image-home.webp" />

        {/* Preload Critical Resources */}
        <link rel="preload" href="/image-home.webp" as="image" />
        <link rel="preload" as="font" type="font/woff2" href={urlfont} crossOrigin="anonymous"/>

        {/* Canonical URL */}
        <link rel="canonical" href="https://inventariofacil.netlify.app/" />
      </Helmet>
      <Suspense fallback={<div style={{minWidth:"325px",minHeight:"325px"}}><Loader/></div>}>
        <ImageHome/>
      </Suspense>
      
      <TextContainer />
    </MainContainer>
  )
}

export default Home
