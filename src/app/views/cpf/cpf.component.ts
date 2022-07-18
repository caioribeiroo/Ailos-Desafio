import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { faCheckCircle, faCreditCard, faPerson, faUser } from '@fortawesome/free-solid-svg-icons';
import { ConsultCpfService } from 'src/app/shared/services/consult-cpf.service';
import { GenericValidator } from 'src/app/shared/validators/isValidCpf';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.css']
})
export class CpfComponent implements OnInit {

    form: FormGroup = new FormGroup({});

    faUser = faUser
    faCheckCircle = faCheckCircle
    faCreditCard = faCreditCard
    
    result: {
      registrationSituation: {
        name: string
        situation: string
      },
      applicationAccount: {
        number: string
      },
      currentAccount: {
        number: string
      }
    } | null = null

  constructor(
    private formBuilder: FormBuilder,
    private _cpfService: ConsultCpfService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.form.valueChanges.subscribe(() => {
        console.log(this.form)
    })
  }

  createForm(): void {
		this.form = new FormGroup({
			cpf: new FormControl(null, [GenericValidator.isValidCpf, Validators.required]),
		});
	}

  onSubmit(): void {
    console.log(this.form.valid)
    if (this.form.valid) {
      const cpf = this.form.value.cpf || ''
      this._cpfService.getOne(cpf).subscribe((result) => {
        this.result = result
      })
    } else {
      this.dialog.open(DialogOverviewExampleDialog, {
        width: 'auto',
      }).afterClosed().subscribe(result => {
       this.onReset()
      });
    }
  }

  onReset() {
     this.result = null 
     this.form.reset()
  }

}


@Component({
  selector: 'error-dialog',
  template: `
    <h2 fxLayout fxLayoutAlign="center center">
      Por favor, digite um cpf válido!
    </h2>
  `,
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}