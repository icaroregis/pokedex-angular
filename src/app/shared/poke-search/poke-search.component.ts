import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss'],
})
export class PokeSearchComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  public cadastroForm: FormGroup = this.fb.group({
    searchPokemon: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  public search() {
    const value = this.cadastroForm.get('searchPokemon')?.value;
    this.emmitSearch.emit(value);
  }
}
