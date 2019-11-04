import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  applicantDetail = new EventEmitter<string>();
  constructor(private http: HttpClient) { }



  getAllApplicant(){
    return this.http.get('http://localhost:3000/applicant/allApplicantDetails');
  }

  getApplicant(id: string){
    return this.http.get('http://localhost:3000/applicant/'+ id);
  }
  setForm1(form1){
    return this.http.post('http://localhost:3000/applicant/form1/' , form1).pipe(map((res: any) => res));
  }

  setForm2(id: string, form2){
    return this.http.put('http://localhost:3000/applicant/form2/' + id, form2).pipe(map((res: any) => res));
  }

  setForm3(id: string, form3){
    return this.http.put('http://localhost:3000/applicant/form3/' + id, form3).pipe(map((res: any) => res));
  }



}
