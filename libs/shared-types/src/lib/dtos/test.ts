export default class Todo {
  public constructor(init?: Partial<Todo>) {
    Object.assign(this, init);
  }
  name: string;
}
