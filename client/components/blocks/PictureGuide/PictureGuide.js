import PropTypes from "prop-types";
import Image from "next/image";
import { GuideWrapper } from "./style";

export const PictureGuide = ({ pictureTitle, guidance, samplePicture }) => {
  const { imgPath, imgSize, imgAlt } = samplePicture;
  return (
    <GuideWrapper>
      <h3 className="picture-title">{pictureTitle}</h3>
      <div className="guide-box">
        <div className="text-wrapper">
          <strong>촬영 가이드</strong>
          <span className="guidance">{guidance}</span>
        </div>
        <div className="img-wrapper">
          <Image src={imgPath} alt={imgAlt} width={imgSize} height={imgSize} />
        </div>
      </div>
    </GuideWrapper>
  );
};

PictureGuide.propTypes = {
  pictureTitle: PropTypes.string.isRequired,
  guidance: PropTypes.string.isRequired,
  samplePicture: PropTypes.object.isRequired,
};
