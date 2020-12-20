import * as React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

interface TodoItem {
  title: string;
  done: boolean;
  id: string;
}

const todos = new Array<TodoItem>();

export default function App() {
  const { register, handleSubmit, errors, reset } = useForm<TodoItem>();
  return (
    <div className="App">
      <form
        onSubmit={handleSubmit((formData: TodoItem) => {
          todos.push({
            title: formData.title,
            done: formData.done,
            id: uuid()
          });
          console.log("form submitted!!!");
          console.log(todos);
          reset();
        })}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <input
            type="text"
            name="title"
            placeholder="Walk the donkey..."
            id="title"
            ref={register({
              maxLength: 300,
              minLength: 2
            })}
            style={{
              marginBottom: 20,
              width: "50%",
              height: "5vh",
              fontSize: 16,
              border: "2px solid #d2dddd",
              borderRadius: 8
            }}
          />
          {errors.title && (
            <span style={{ color: "red" }}>{errors.title.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="">Done?</label>
          <input
            type="checkbox"
            name="done"
            id="done"
            ref={register()}
            style={{
              marginBottom: 20
            }}
          />
        </div>
        <div>
          <input
            type="submit"
            value="Add Todo"
            style={{
              backgroundColor: "darkblue",
              color: "whitesmoke",
              fontWeight: "bolder",
              border: "none",
              padding: 10,
              borderRadius: 5
            }}
          />
        </div>
      </form>

      <div>
        <table style={{ border: 3 }}>
          <thead>
            <tr>
              <th>Todo Id</th>
              <th>Todo Title</th>
              <th>Todo Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
