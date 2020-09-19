import { Input, Button, Row, Col } from "antd";
import { PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import uuid from "react-uuid";

const TodoForm = ({ todo, todos, setTodos, setTodo }) => {
  return (
    <div className="form">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (todo == "") return;
          const newItem = [...todos, { name: todo, id: uuid() }];
          setTodos(newItem);
          localStorage.setItem("todos", JSON.stringify(newItem));
          setTodo("");
        }}
      >
        <Row gutter={5}>
          <Col span={3}>
            <Button
              onClick={() => {
                setTodos([]);
                localStorage.setItem("todos", "");
              }}
              style={{ width: "100%" }}
              type="primary"
              icon={<DeleteOutlined />}
              danger
            >
              All
            </Button>
          </Col>
          <Col span={18}>
            <Input
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="write something"
            />
          </Col>
          <Col span={3}>
            <Button
              onClick={() => {
                if (todo == "") return;
                const newItem = [...todos, { name: todo, id: uuid() }];
                setTodos(newItem);
                localStorage.setItem("todos", JSON.stringify(newItem));
                setTodo("");
              }}
              type="submit"
              style={{ width: "100%" }}
              icon={<PlusCircleOutlined />}
              type="primary"
            ></Button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default TodoForm;
