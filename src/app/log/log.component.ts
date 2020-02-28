import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  user: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required]
    });
  }
}






