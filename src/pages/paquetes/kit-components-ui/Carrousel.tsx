import { CarrouselImages } from "kit-components-ui";
import img1 from "../../../assets/images/image1.jpg";
import img2 from "../../../assets/images/image2.jpg";
import img3 from "../../../assets/images/image3.jpg";

export default function Carrousel(): JSX.Element {
  const imgs = [img1, img2, img3];
  return (
    <section>
      <CarrouselImages images={imgs} width="100%" height="500px" />
    </section>
  );
}
