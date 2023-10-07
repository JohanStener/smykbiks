import React from "react";

interface ImageProps {
  url: string;
  beskr: string;
  CN: string;
}

const Image: React.FC<ImageProps> = ({ url, beskr, CN }) => {
  return <img src={url} alt={beskr} className={CN} />;
};

export default Image;
