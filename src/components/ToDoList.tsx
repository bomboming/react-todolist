import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

interface IForm {
  toDo: string;
}

const toDoState = atom({
  key: "toDo",
  default: [],
});

function ToDoList() {
  // const value = useRecoilValue(toDoState);  리코일로 값을 받아옴
  // const setValue = useSetRecoilState(toDoState)   받아온 값을 수정함
  const [toDoValue, setToDoValue] = useRecoilState(toDoState); // 각각 필요할 땐 따로 쓰고 합쳐서 쓰고싶을 땐 useRecoilState를 사용하면 된다.
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    setValue("toDo", "");
  };

  return (
    <div>
      <h1>To Dos!</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          placeholder="Write a to do list"
        />
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
}

export default ToDoList;
