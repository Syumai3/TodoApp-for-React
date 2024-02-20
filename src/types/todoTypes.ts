// 情報を一箇所にまとめる
// as constを使うと、{}の中身がreadonlyになるため、値を外部から更新されないようにすることができる。
// Record は オブジェクトの型で、キーと値の型を指定することができる。Record<string, string> は、キーと値がともに文字列型のオブジェクトを表す。
// satisfies 適応したい型　という書き方をすると、型で縛れる上に型推論も効くので、補完も効く。 as const satisfies Record<string, string>;

export const TODO_STATUS = {
  TODO: "未着手",
  IN_PROGRESS: "着手中",
  DONE: "完了",
} as const satisfies Record<string, string>;

// export const TODO_STATUS2: Record<string, string> = {
//   TODO: "未着手",
//   IN_PROGRESS: "着手中",
//   DONE: "完了",
//   hoge: 0  // 怒ってくれるけど TODO_STATUS2. のあとのサジェストが出ない
// }

// export const TODO_STATUS3 = {
//   TODO: "未着手",
//   IN_PROGRESS: "着手中",
//   DONE: "完了",
//   hoge: 0  // 怒ってくれないけど、TODO_STATUS3. のあとのサジェストは出る
// }

export type TodoType = {
  id: number;
  title: string;
  status: typeof TODO_STATUS[keyof typeof TODO_STATUS];
};
