import { MainContainer } from "./components/mainContainer"
import image from "@/public/image-home.webp"
import TextContainer from "./components/textContainer"

function Home() {
  return (
    <MainContainer>
      <img src={image} />
      <TextContainer />
    </MainContainer>
  )
}

export default Home
