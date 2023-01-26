import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PaiementService } from '../Service/paiement.service';
@Component({
  selector: 'app-envoye-mail',
  templateUrl: './envoye-mail.component.html',
  styleUrls: ['./envoye-mail.component.css']
})
export class EnvoyeMailComponent implements OnInit {
  nomForm: FormGroup = {} as FormGroup;
  submitting: boolean = false;
  fileSource: any;
  name!: '';
  constructor(private paiementservice: PaiementService) {}
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
    onFileChange(event:any) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.name = event.target.files[0].name;
        this.nomForm.patchValue({
         file,
        });
      }
    }
    // onFileChange(event:any) {
    //   if (event.target.files.length > 0) {
    //     const file = event.target.files[0];
    //     this.name = event.target.files[0].name;
    //     this.nomForm.patchValue({
    //       myFile: event.target.files[0]
    //     })
    //    console.log("file"+this.nomForm.get('<name>')?.setValue(file, {emitModelToViewChange: false}));
    //   }
    // }
    onSubmit(){
      const to = this.nomForm.get("to")?.value;
      const subject = this.nomForm.get("subject")?.value;
      const text = this.nomForm.get("text")?.value;
      const file = this.nomForm.get("file")?.value;
      const f = this.name;
      const filename = f.split('.').slice(0, -1).join('.');
      console.log("to"+to);
      console.log("subject"+subject);
      console.log("text"+text);
      console.log("file"+file);
      console.log("f"+f);
      console.log("filename"+filename);
      this.paiementservice.sendMail(to,subject,text,file,filename);
    }
}
