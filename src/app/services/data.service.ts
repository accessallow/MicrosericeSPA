import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseURL = "http://localhost:8767";
  private studentServiceUrl = this.baseURL+"/STUDENT-SERVICE";
  private subjectServiceUrl = this.baseURL+"/SUBJECT-SERVICE";
  private examServiceUrl = this.baseURL+"/EXAM-SERVICE";
  private registrationServiceUrl = this.baseURL+"/REGISTRATION-SERVICE";
  private reportServiceUrl = this.baseURL+"/REPORT-SERVICE";
  private requestOptions = {headers: {'Content-Type': 'application/json'}};

  constructor(private httpClient: HttpClient) { }

  public getExamData() : Observable<any[]>{
    return this.httpClient.get<any[]>(this.examServiceUrl+"/data");
  }

  public getRegistrationData() : Observable<any[]>{
    return this.httpClient.get<any[]>(this.registrationServiceUrl+"/data");
  }

  public getReportData(rollNumber:string) : Observable<any>{
    return this.httpClient.get<any>(this.reportServiceUrl+"/report_cb/find_by_roll_number?roll_number="+rollNumber);
  }

  //Student Operations
  public getStudents() : Observable<any[]>{
    return this.httpClient.get<any[]>(this.studentServiceUrl+"/data");
  }

  public addStudent(studentObject : any) : Observable<any>{
    return this.httpClient.post<any>(this.studentServiceUrl+"/create",JSON.stringify(studentObject),this.requestOptions);
  }

  public deleteStudent(studentObject : any) : Observable<any>{
    return this.httpClient.post<any>(this.studentServiceUrl+"/delete",JSON.stringify(studentObject),this.requestOptions);
  }

  public updateStudent(studentObject : any) : Observable<any>{
    return this.httpClient.post<any>(this.studentServiceUrl+"/update",JSON.stringify(studentObject),this.requestOptions);
  }

  //Subject Operations
  public getSubjects() : Observable<any[]>{
    return this.httpClient.get<any[]>(this.subjectServiceUrl+"/data");
  }

  public addSubject(subjectObject : any) : Observable<any>{
    return this.httpClient.post<any>(this.subjectServiceUrl+"/create",JSON.stringify(subjectObject),this.requestOptions);
  }

  public deleteSubject(subjectObject : any) : Observable<any>{
    return this.httpClient.post<any>(this.subjectServiceUrl+"/delete",JSON.stringify(subjectObject),this.requestOptions);
  }

  public updateSubject(subjectObject : any) : Observable<any>{
    return this.httpClient.post<any>(this.subjectServiceUrl+"/update",JSON.stringify(subjectObject),this.requestOptions);
  }

}