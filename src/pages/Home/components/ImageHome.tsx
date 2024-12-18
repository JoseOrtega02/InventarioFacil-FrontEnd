
import image from "@/public/image-home.webp"
function ImageHome() {
  return (
    <img src={image}
    alt="Description of the image"
    loading="eager"
    
    width="600"   // Explicit width
    height="600"  // Explicit height
    style={{ width: "100%", height: "auto", objectFit: "cover",borderRadius:"24px" }}/>
  )
}
export default ImageHome
