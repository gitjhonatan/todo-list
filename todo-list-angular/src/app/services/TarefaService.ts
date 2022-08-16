import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TarefaInterface } from "../interfaces/TarefaInterface";

@Injectable()
export class TarefaService {
  private url = 'http://localhost:3000/api/task';

  constructor(private http: HttpClient) {
  }

  getTarefas(): Observable<TarefaInterface[]> {
    return this.http.get<TarefaInterface[]>(this.url);
  }

  postTarefa(element: TarefaInterface): Observable<TarefaInterface[]> {
    return this.http.post<TarefaInterface[]>(this.url, element);
  }

  putTarefa(element: TarefaInterface): Observable<TarefaInterface[]> {
    return this.http.put<TarefaInterface[]>(this.url, element);
  }

  deleteTarefa(id: string): Observable<TarefaInterface[]> {
    return this.http.delete<TarefaInterface[]>(this.url, {
      body: {
        id: id
      }
    });
  }

}
