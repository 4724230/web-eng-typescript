// 4件のTODOを用意する
const todos = [
  { id: 1, title: "TypeScriptを復習する", completed: true },
  { id: 2, title: "配列を学ぶ", completed: false },
  { id: 3, title: "レポートを書く", completed: false },
  { id: 4, title: "課題を提出する", completed: true },
];

// TODOをすべて表示する
console.log("=== 更新前のTODO一覧 ===");

for (const todo of todos) {
  const status = todo.completed ? "完了" : "未完了";
  console.log(`${todo.id}: ${todo.title} [${status}]`);
}

// 更新前の完了件数を数える
const completedBefore = todos.filter((todo) => todo.completed).length;

// 未完了のTODOをすべて完了に更新する
console.log("=== TODOの更新 ===");

for (const todo of todos) {
  if (todo.completed === false) {
    todo.completed = true;
    console.log(`更新後: ${todo.title} [完了]`);
  }
}

// 更新後の完了件数を数える
const completedAfter = todos.filter((todo) => todo.completed).length;

// 更新前後の完了件数を表示する
console.log(
  `完了件数: 更新前 ${completedBefore}件 -> 更新後 ${completedAfter}件`
);

// 更新後のTODO一覧を表示する
console.log("=== 更新後のTODO一覧 ===");

for (const todo of todos) {
  const status = todo.completed ? "完了" : "未完了";
  console.log(`${todo.id}: ${todo.title} [${status}]`);
}