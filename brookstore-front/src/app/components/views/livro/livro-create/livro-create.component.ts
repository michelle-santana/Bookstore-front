import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-livro-create",
  templateUrl: "./livro-create.component.html",
  styleUrls: ["./livro-create.component.css"],
})
export class LivroCreateComponent implements OnInit {
  title = new FormControl("", [Validators.minLength(3)]);
  author = new FormControl("", [Validators.minLength(3)]);
  text = new FormControl("", [Validators.minLength(10)]);

  constructor() {}

  ngOnInit(): void {}

  getMessage() {
    if (this.title.invalid) {
      return "O campo TITLE deve conter entre 3 e 100 caracteres";
    }
    if (this.author.invalid) {
      return "O campo AUTHOR NAME deve conter entre 3 e 100 caracteres";
    }
    if (this.text.invalid) {
      return "O campo TEXT deve conter entre 3 e 100 caracteres";
    }
    return false;
  }
}
