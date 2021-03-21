import { saveAs } from "file-saver";
import { useContext } from "react";
import { ApiDataContext } from "../../../../context/ApiDataContext";

const DownloadButton = ({ isBannerSelect = true, urlSelected }) => {
  // Context
  const { data } = useContext(ApiDataContext);

  const downloadImage = async () => {
    if (isBannerSelect) {
      const downloadFetch = await fetch(urlSelected.banner);
      const blob = await downloadFetch.blob();
      saveAs(blob, `${data.ytData[0].channelInfo.title}Banner.jpg`);
    } else {
      const downloadFetch = await fetch(urlSelected.avatar);
      const blob = await downloadFetch.blob();
      saveAs(blob, `${data.ytData[0].channelInfo.title}Avatar.jpg`);
    }
  };

  return <button onClick={downloadImage}>download</button>;
};

export default DownloadButton;
