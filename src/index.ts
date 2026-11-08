import { countIncompleteTodos } from "./todo-service.js";

const count = await countIncompleteTodos();

console.log("未完了TODOの件数:", count);