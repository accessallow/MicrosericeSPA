import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor(private dataService: DataService) { }

  exams:any[] = [];

  ngOnInit(): void {
    this.dataService.getExamData().subscribe((exams)=>{
        this.exams = exams;
    });
  }

}
