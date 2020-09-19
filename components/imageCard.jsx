import { useState } from "react";
import { Card } from "antd";
import LighBox from "../components/imagelightbox";

const ImageCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <LighBox open={open} setOpen={setOpen} url={item.download_url} />
      <Card
        className="api-card"
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src={item.download_url}
            onClick={(e) => {
              setOpen(true);
            }}
          />
        }
      >
        <p>
          Author: <span>{item.author}</span>
        </p>
        <a href={item.url} target="_blank">
          Link
        </a>
      </Card>
    </>
  );
};

export default ImageCard;
