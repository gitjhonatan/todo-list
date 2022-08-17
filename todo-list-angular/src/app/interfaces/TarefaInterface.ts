export interface TarefaInterface {
  id?: string,
  _id?: string,
  status?: boolean;
  desc: string;
  subtasks?: TarefaInterface | {};
}
