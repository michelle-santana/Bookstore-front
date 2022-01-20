import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria : Categoria = {

    id:"",
    name: "",
    description: ""
  }

  constructor(private service: CategoriaService, private route : ActivatedRoute, private router : Router) { }

  
  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria.name = resposta.name
      this.categoria.description = resposta.description
    })
  }

  // delete(): void {
  //   this.service.delete(this.categoria.id!).subscribe((resposta) => {
  //     this.router.navigate(['categorias'])
  //     this.service.message('Categoria deletada com sucesso!')
  //   }, err => {
  //     this.service.message(err.error.error)
  //   })
  // }

  cancel(): void {
    this.router.navigate(['categorias'])
  }


}
