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

  const ID = todo.ID;
  const title = todo.Title;
  const finished = todo.finished;

  console.log(`
    The Todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
  `);
});
