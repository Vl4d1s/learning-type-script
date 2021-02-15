import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// Interfaces in TS is used to discribe the stracture of the object.
// We can ignore properties if we want to...
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

// I define types for variables to make sure that the sending of the variables is done correctly.
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};
