import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, Categories } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import styled from "styled-components";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <Construtor>
      <H1>To Dos!</H1>
      <HR />
      <ToDoBox>
        <Select value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>To Do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </Select>
        <CreateToDo />
      </ToDoBox>
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Construtor>
  );
}

const Construtor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const H1 = styled.h1`
  font-weight: 800;
  font-size: 60px;
`;

const ToDoBox = styled.div`
  display: flex;
`;

const HR = styled.hr`
  width: 100%;
  margin: 30px;
`;

const Select = styled.select`
  margin-right: 10px;
  width: 100px;
  text-align: center;
  font-size: large;
  padding: 5px;
`;

export default ToDoList;
