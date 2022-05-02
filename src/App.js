import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setTodos((currentArray) => [toDo, ...currentArray]);
  };
  return (
    <div>
      <h1>My ToDo List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your ToDo"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map(
          (
            item,
            index // ReactJS는 기본적으로 list에 있는 모든 item들을 인식하기 때문에 map의 두번째 argument인 index(첫번째 argument: 값)를 key로 넣어서 고유하게 만들어주어야 한다
          ) => (
            <li key={index}>{item}</li>
          )
        )}
      </ul>
    </div>
  );
}

export default App;
