import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {

   }

   //lista as categorias do backend por id
  findById(id: String): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.get<Categoria>(url)
  }

   //lista todas as categorias do backend
  findAll(): Observable<Categoria[]> {
    const url = `${this.baseUrl}/categorias`
    return this.http.get<Categoria[]>(url)
  }


  //criação da categoria no backend
 create(categoria: Categoria): Observable<Categoria>{
  const url = `${this.baseUrl}/categorias`
  return this.http.post<Categoria>(url, categoria);
}

//responsavel por deletar
delete(id: String):Observable<void> {
  const url = `${this.baseUrl}/categorias/${id}`
  return this.http.delete<void>(url)
}

//responsavel por atualizar no backend
update(categoria: Categoria):Observable<void> {
  const url = `${this.baseUrl}/categorias/${categoria.id}`
  return this.http.put<void>(url, categoria)
}


//responsavel pela mensagem
message(str: String): void{
  this._snack.open(`${str}`, 'OK', {
  horizontalPosition: 'end',
  verticalPosition: 'top',
  duration: 30000
  })
  }



}
