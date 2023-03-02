import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((prev) => [{ id: Date.now(), text: toDo, category }, ...prev]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <Input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do list"
      />
      <Btn>Add</Btn>
    </form>
  );
}

const Input = styled.input`
  margin-right: 10px;
  width: 300px;
  font-size: large;
  padding: 5px;
`;

const Btn = styled.button`
  width: 50px;
  font-size: large;
  padding: 5px;
`;

export default CreateToDo;
