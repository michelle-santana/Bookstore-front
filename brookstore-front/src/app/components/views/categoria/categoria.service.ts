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

//responsavel pela mensagem
message(str: String): void{
this._snack.open(`${str}`, 'OK', {
horizontalPosition: 'end',
verticalPosition: 'top',
duration: 30000
})
}

}
