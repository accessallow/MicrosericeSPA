import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private dataService: DataService) { }

  report:any=undefined;
  students:any[] = [];

  ngOnInit(): void {
    this.dataService.getStudents().subscribe( students => this.students = students);
  }

  studentSelected(event : any) : void {
      let selectedStudentRollNumber = event.target.value;
        if(selectedStudentRollNumber!='Select student'){
          this.dataService.getReportData(selectedStudentRollNumber).subscribe((report)=>{
            this.report = report;
        });
      }
  }


}
