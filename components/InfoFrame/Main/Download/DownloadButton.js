const DownloadButton = ({ urlSelected }) => {
  //   alert(urlSelected.banner);
  return (
    <a href={urlSelected.banner} download>
      download
    </a>
  );
  //   <a href={urlSelected.banner} download>Donwload</a>;
};

export default DownloadButton;
