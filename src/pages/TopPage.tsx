import { Text, Stack} from "@chakra-ui/react";
import { useState } from "react";
import { AddTodo } from "../components/AddTodo";

import { CompleteTodos } from "../components/completeTodos";
import { Todo } from "../types/Todo";

export const TopPage = () => {

  const [todo, setTodo] = useState<Todo>({
    title: "",
    detail: "",
    time: ""
  });

  const [completeTodos, setCompleteTodos] = useState<Array<Todo>>([]);

  const formatDatetimeLocalToCustomFormat = (datetimeLocal: string) => {
    // datetimeLocalの値は、例: "2023-10-26T15:30" のような形式です
    const date = new Date(datetimeLocal);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    const formattedDatetime = `${year}年${month}月${day}日${hours}時${minutes}分${seconds}秒`;
    return formattedDatetime;
  }

  const handleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((prev) => ({...prev, [e.target.name]: e.target.value}))
  };

  const onClickAdd = () => {
    const formattedDatetime = formatDatetimeLocalToCustomFormat(todo.time);
    const newTodo = { ...todo, time: formattedDatetime };
    setCompleteTodos([...completeTodos, newTodo]);
    setTodo({
      title: "",
      detail: "",
      time: ""
    })
  }

  const onClickDelete = (index: number) => {
    const newCompleteTodos = [...completeTodos]
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
  }

  return (
    <Stack textAlign="center">
      <Text fontSize="4xl" fontWeight="bold">勉強アプリ</Text>
      <Text fontSize="3xl" fontWeight="bold">勉強したこと/ものを追加</Text>
      <AddTodo todo={todo} onChange={handleTodo} onClick={onClickAdd}></AddTodo>
      <Text fontSize="3xl" fontWeight="bold">勉強した内容一覧</Text>
      <CompleteTodos completeTodos={completeTodos} onClick={onClickDelete}></CompleteTodos>
    </Stack>
  )
}