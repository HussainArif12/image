import "./styles.css";
import images from "./images";
import ImageCarousel from "./ImageCarousel";
export default function App() {
  return (
    <div className="App">
      <ImageCarousel images={images} />
    </div>
  );
}
