import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function ToDoList() {
  //useForm에서 필요한 것들을 꺼내 사용 할 수 있다.
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    setValue("toDo", "");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          placeholder="Write a to do list"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
