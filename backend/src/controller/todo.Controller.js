import { Todo } from "../model/todo.model.js";

export const newTodo = async (req,res) => {
  if (!text) return res.send("todo is required");

  const { text } = req.body;

  const todo = await Todo.create({text})
  .then(() => res.send('todo add succesfully').json(todo))
  .catch((err) => res.send(err))
  todo.save();
  return res.status(201).json("todo created succesfully");
};

export const getAllTodo = async (req,res) => {
  const allTodo = await Todo.find();

  return res.json(allTodo);
};

export const editTodo = async (req,res) => {
  if (!text) return res.send("todo is required");

  const { _id, text } = req.body;
  const updateTodo = await Todo.findByIdAndUpdate(_id, { text })
    .then(() => res.send("updated succesfully").json(updateTodo))
    .catch((err) => console.log(err));
};
export const deleteTodo = async (req,res) => {
  if (!text) return res.send("todo is required");

  const { _id } = req.body;

  const deleted = await Todo.findByIdAndDelete(_id)
    .then(() => res.send("deleted succesfully").json(deleted))
    .catch((err) => console.log(err));
};
