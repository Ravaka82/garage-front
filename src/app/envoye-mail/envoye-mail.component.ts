import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-envoye-mail',
  templateUrl: './envoye-mail.component.html',
  styleUrls: ['./envoye-mail.component.css']
})
export class EnvoyeMailComponent implements OnInit {
  nomForm: FormGroup = {} as FormGroup;
  ngOnInit(): void {
  this.initForm();
  }
  initForm(): void {
    this.nomForm = new FormGroup({
      to: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      file: new FormControl('', [Validators.required]),
    })};
}
