import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicantService } from '../service/applicant.service';

@Component({
  selector: 'app-new-application-form',
  templateUrl: './new-application-form.component.html',
  styleUrls: ['./new-application-form.component.css']
})
export class NewApplicationFormComponent implements OnInit {
  form1: FormGroup;
  form2: FormGroup;

  constructor(private fb: FormBuilder, private applicantService: ApplicantService) { }

  ngOnInit() {
    this.form1 = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      NIC: ['', Validators.required],
    });

    this.form2 = this.fb.group({
      LinkIn: ['', Validators.required],
      expectedSalary: ['', Validators.required],
      availability: ['', Validators.required],
      priority: ['', Validators.required],
      referral: ['', Validators.required],
    });
  }

  onForm1(){
    this.applicantService.setForm1(this.form1.value).subscribe(res => {
        if(res.state){
          console.log('successfully stored')
          console.log(res)
        }else{
          console.log('stroed failed')
        }
    });
  }
  onForm2(id: string){
    this.applicantService.setForm2(id,this.form2.value).subscribe(res => {
      if(res.state){
        console.log('successfully stored');
      }else{
        console.log('stored failed')
      }

    });
  }

}
