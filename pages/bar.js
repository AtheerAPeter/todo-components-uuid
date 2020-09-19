import { useEffect, useState } from "react";
import { Card, Avatar } from "antd";
const { Meta } = Card;
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
          <>
            <Card className="api-card" style={{ width: 240 }} loading={loading}>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
            <Card className="api-card" style={{ width: 240 }} loading={loading}>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
            <Card className="api-card" style={{ width: 240 }} loading={loading}>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
            <Card className="api-card" style={{ width: 240 }} loading={loading}>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
            <Card className="api-card" style={{ width: 240 }} loading={loading}>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
            <Card className="api-card" style={{ width: 240 }} loading={loading}>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </>
        ) : (
          data.map((item) => (
            <Card
              key={item.id}
              className="api-card"
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={item.download_url} />}
            >
              <Meta
                title={`Author: ${item.author}`}
                description={`url: ${item.url}`}
              />
            </Card>
          ))
        )}
      </ul>
    </div>
  );
};
export default Bar;
