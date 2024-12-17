import { lazy, Suspense } from "react"
import { Helmet } from "react-helmet";
import { MainContainer } from "./components/mainContainer"
import TextContainer from "./components/textContainer"
import Loader from "@/src/components/styledComponents/Loader"

const ImageHome = lazy(()=>import("./components/ImageHome"))


function Home() {
  return (
    <MainContainer>
      <Helmet>
        <link rel="preload" href="./public/image-home.webp" as="image" />
      </Helmet>
      <Suspense fallback={<div style={{minWidth:"325px",minHeight:"325px"}}><Loader/></div>}>
        <ImageHome/>
      </Suspense>
      
      <TextContainer />
    </MainContainer>
  )
}

export default Home
