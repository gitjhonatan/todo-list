export interface TarefaInterface {
  id?: string,
  status?: boolean;
  desc: string;
  subtasks?: TarefaInterface | {};
}
