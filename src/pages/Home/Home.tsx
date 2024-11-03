import { MainContainer } from "./components/mainContainer"
import image from "@/public/image-home.jpg"
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
