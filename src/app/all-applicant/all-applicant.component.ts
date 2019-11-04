import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../service/applicant.service';

@Component({
  selector: 'app-all-applicant',
  templateUrl: './all-applicant.component.html',
  styleUrls: ['./all-applicant.component.css']
})
export class AllApplicantComponent implements OnInit {

  allApplicant: any;
  applicant: any;



  constructor(private applicantService: ApplicantService) { }

  ngOnInit() {
    this.applicantService.getAllApplicant().subscribe( res => {
      this.allApplicant  = res;
      console.log(res);
    });
  }

  applicantDetails(id: string){
    this.applicantService.getApplicant(id).subscribe(res =>{
      this.applicant = res;
      console.log(res);
      this.applicantService.applicantDetail.emit(this.applicant);
    });
   }

}
