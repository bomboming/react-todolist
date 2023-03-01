import { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register } = useForm();

  return (
    <div>
      <form>
        <input {...register("toDo")} placeholder="write a to do list" />
        <button>Add</button>
      </form>
    </div>
  );
}

// register를 사용하면 onChange 이벤트 핸들러가 필요없다
export default ToDoList;
