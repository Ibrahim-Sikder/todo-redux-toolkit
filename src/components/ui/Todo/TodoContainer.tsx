import { useState } from "react"
import AddTodoModal from "./AddTodoModal"
import TodoCard from "./TodoCard"
import TodoFilter from "./TodoFilter"
import { useGetTodoQuery } from "@/redux/api/api"


const TodoContainer = () => {
  //local server
  // const { todos } = useAppSelector((state) => state.todos)
  const [priority, setPriority] = useState("")
  const {data:todos, isError, isLoading} = useGetTodoQuery(priority)


if(isLoading){
  return <p>Loading......</p>
}

if(isError){
  return <p>Something went to wrong </p>
}

  return (
    <div>
      <div className=" mb-5 flex justify-between  ">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="  p-5 bg-primary-gradient w-full h-full rounded-xl   ">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3 ">
        {
          todos?.data?.map((item)=>(
            <TodoCard key={item.id} {...item} />
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default TodoContainer
