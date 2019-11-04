import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../service/applicant.service';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  applicant: any;

  interviewComment: string;
  interviewScore: string;
  testResult: string;
  constructor( private applicantService: ApplicantService) { }

  ngOnInit() {
    this.applicantService.applicantDetail.subscribe(
      (res: string) => {
      this.applicant = res;
      console.log(this.applicant);
    })
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  onEvaluation(){
    const evaluation = {
      interviewerComment : this.interviewComment,
      interviewScope: this.interviewScore,
      textResult: this.testResult
    }


    this.applicantService.setForm3(this.applicant._id, evaluation).subscribe(res => {
      if(res.state){
        console.log('successfully added')
        console.log(evaluation)
      }else{
        console.log('failed')
      }
    })



  }
}
