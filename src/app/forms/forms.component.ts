import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  signupForm!: FormGroup; 
  constructor() { }
  ngOnInit(): void {

    this.signupForm = new FormGroup({
      'userData':new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
           'password': new FormControl(null)
      }
      ),
      'customtext':new FormControl('sanjay')
    })

    /* this.signupForm.setValue({
      'userData':{
        'email':'sanjusharma0002@gmail.com',
        'password':'gdggd'
      }
      
    }) */
  }
get f(){
  return this.signupForm.controls['userData']
}

  onSubmit(){
    //const {password} = this.f.value
    //const newPass = password.split('').fill('*',0,4).join('');
    const values =this.f.value
    let newObj = {values,password:values.password.split('').fill('#',0,5).join('')}
    console.log('forms=>',this.signupForm,this.f, newObj)
  }

}
