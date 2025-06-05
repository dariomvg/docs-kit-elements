import { CarrouselImages } from "kit-components-ui";
import img1 from "../../../assets/images/image1.webp";
import img2 from "../../../assets/images/image2.webp";
import img3 from "../../../assets/images/image3.webp";

export default function Carrousel(): JSX.Element {
  const imgs = [img1, img2, img3];

  return <CarrouselImages images={imgs} width="400" height="320" />;
}
