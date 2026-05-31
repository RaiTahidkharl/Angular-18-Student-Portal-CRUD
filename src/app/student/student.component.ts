import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { studentModel } from './student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
  @ViewChild('myModal') model: ElementRef | undefined;
  studentObj: studentModel = new studentModel();
  studentList: studentModel[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudentList();
  }

  openModel() {
    const sdtmodel = document.getElementById('myModal');
    if (sdtmodel != null) {
      sdtmodel.style.display = 'block';
    }
  }

  closeMedel() {
    this.studentObj = new studentModel();
    if (this.model != null) {
      this.model.nativeElement.style.display = 'none';
    }
  }

  onSaveform() {
    const { id, ...studentData } = this.studentObj;
    this.studentService.addStudent(studentData as studentModel).subscribe(() => {
      this.closeMedel();
      this.getStudentList();
    });
  }

  onUpdateform() {
    this.studentService.updateStudent(this.studentObj.id, this.studentObj).subscribe(() => {
      this.closeMedel();
      this.getStudentList();
    });
  }

  onDeleteStudent(data: studentModel) {
    const isConfirm = confirm('Are you sure you want to delete this student ?...');
    if (isConfirm) {
      this.studentService.deleteStudent(data.id).subscribe(() => {
        this.getStudentList();
      });
    }
  }

  onEditStudetn(studentData: studentModel) {
    this.studentObj = { ...studentData };
    this.openModel();
  }

  getStudentList() {
    this.studentService.getStudents().subscribe((students) => {
      this.studentList = students;
    });
  }
}
