import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogClose } from "@radix-ui/react-dialog"
import { FormEvent, useState } from "react"
import { useAppDispatch } from "@/redux/hooks"
import { addTodo } from "@/redux/feature/todoSlice"

const AddTodoModal = () => {
  const [task, setTask] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("")

  const dispatch = useAppDispatch()

const onSubmit = (e: FormEvent) => {

  e.preventDefault()

  const randomStriong = Math.random().toString(36).substring(2, 7)

  const taskDetails = {
    id: randomStriong,
    title: task,
    description,
    priority,
    isCompleted:false
  }
  console.log(taskDetails)
  // for local stage management
  // dispatch(addTodo(taskDetails))
dispatch(addTodo(taskDetails))


}

return (
  <div>
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold ">
          Add Todo{" "}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task </DialogTitle>
          <DialogDescription>
            Add your tasks that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Priority
              </Label>
              <Select onValueChange={(value)=>setPriority(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>


          </div>
          <div className="flex justify-end ">
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  </div>
)
}

export default AddTodoModal
