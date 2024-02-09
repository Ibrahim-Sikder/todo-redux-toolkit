import { useState } from "react"
import AddTodoModal from "./AddTodoModal"
import TodoCard from "./TodoCard"
import TodoFilter from "./TodoFilter"
import { useAppSelector } from "@/redux/hooks"


const TodoContainer = () => {
  //local server
  const { todos } = useAppSelector((state) => state.todos)
  const [priority, setPriority] = useState("")



  return (
    <div>
      <div className=" mb-5 flex justify-between  ">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="  p-5 bg-primary-gradient w-full h-full rounded-xl   ">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3 ">
        {
          todos.map((item)=>(
            <TodoCard key={item.id} {...item} />
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default TodoContainer
