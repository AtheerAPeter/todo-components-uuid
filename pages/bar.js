import { useEffect, useState } from "react";

//components imports
import ImageCard from "../components/imageCard";
import Skeleton from "../components/skeleton";

const Bar = () => {
  const [data, setDate] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        setDate(result);
      });
  }, []);
  return (
    <div className="container">
      <ul className="cards-grid">
        {loading ? (
          <Skeleton loading={loading} />
        ) : (
          data.map((item) => <ImageCard key={item.id} item={item} />)
        )}
      </ul>
    </div>
  );
};
export default Bar;
