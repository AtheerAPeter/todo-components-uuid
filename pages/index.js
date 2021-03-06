import { useState, useEffect } from "react";
import { Button, Row, Col } from "antd";
import { FileImageOutlined } from "@ant-design/icons";

//components imports
import Card from "../components/card";
import TodoForm from "../components/todoform";

export default function Home() {
  const [todos, setTodos] = useState([{}]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const stuff = localStorage.getItem("todos");
    if (stuff) {
      setTodos(JSON.parse(stuff));
    }
  }, []);

  const scrollEnd = (e) => {
    if (e) e.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="container">
        <Row>
          <Col span={7} offset={17}>
            <Button
              icon={<FileImageOutlined />}
              style={{ width: "100%" }}
              href="bar"
            >
              Gallery
            </Button>
          </Col>
        </Row>
        <TodoForm
          todos={todos}
          todo={todo}
          setTodos={setTodos}
          setTodo={setTodo}
        />
        <div className="cards">
          {todos.map((item, index) => (
            <Card
              item={item.name}
              index={item.id}
              todos={todos}
              setTodos={setTodos}
              key={index}
            />
          ))}
          <div
            style={{ float: "left", clear: "both" }}
            ref={(e) => scrollEnd(e)}
          ></div>
        </div>
      </div>
    </div>
  );
}
