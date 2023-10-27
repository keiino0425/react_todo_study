import { Text, Stack, Button} from "@chakra-ui/react";
import { Todo } from "../types/Todo";

type Props = {
  completeTodos: Array<Todo>,
  onClick: (index:number) => void,
}

export const CompleteTodos = (props: Props) => {
  const {completeTodos, onClick} = props;

  return (
    <>
      {completeTodos.map((todo, index) => {
        return (
          <Stack direction="row" spacing={2} align="center" justify="center" key={index}>
            <Text>{todo.title}</Text>
            <Text>{todo.detail}</Text>
            <Text>{todo.time}</Text>
            <Button onClick={() => onClick(index)}>削除</Button>
          </Stack>
        )
      })}
    </>
  )
}