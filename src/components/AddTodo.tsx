import { Button, FormControl, Input, Stack } from "@chakra-ui/react"
import { Todo } from "../types/Todo"

type Props = {
  todo: Todo,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onClick: () => void
}

export const AddTodo = (props: Props) => {
  const {todo, onChange, onClick} = props;
  return (
    <Stack direction="row" spacing={4} align="center" justify="center">
      <FormControl>
        <Input width="auto" name="title" value={todo.title} onChange={onChange} placeholder="タイトル"></Input>
        <Input width="auto" name="detail" value={todo.detail} onChange={onChange} placeholder="詳細"></Input>
        <Input width="auto" name="time" value={todo.time} onChange={onChange} type="datetime-local"></Input>
        <Button onClick={onClick}>追加</Button>
      </FormControl>
    </Stack>
  )
}