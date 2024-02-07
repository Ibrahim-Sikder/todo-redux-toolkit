import Container from "@/components/ui/Container"
import TodoContainer from "@/components/ui/Todo/TodoContainer"

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center font-semibold text-3xl my-10 ">My Todo</h1>
      <TodoContainer />
    </Container>
  )
}

export default Todo
