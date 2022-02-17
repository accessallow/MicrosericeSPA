import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private dataService: DataService) { }

  registrations:any[] = [];

  ngOnInit(): void {
    this.dataService.getRegistrationData().subscribe((registrations)=>{
        this.registrations = registrations;
    });
  }

}
