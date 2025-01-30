import { Router } from "express";
import { deleteTodo, editTodo, getAllTodo, newTodo } from "../controller/todo.Controller.js ";

const router = Router()

router.get("/",getAllTodo)
router.post("/add", newTodo)
router.patch("/edit", editTodo)
router.delete("/delete",deleteTodo)


export default router;
