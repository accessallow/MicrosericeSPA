import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ExamComponent } from './components/exam/exam.component';
import { ReportComponent } from './components/report/report.component';
import { RegistrationComponent } from './components/registration/registration.component';

import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    SubjectComponent,
    ExamComponent,
    ReportComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
