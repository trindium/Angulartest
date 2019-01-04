import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {
  @Input() hasSuccess: boolean;
  @Input() hasWarning: boolean;
  @Input() hasError: boolean;
  @Input() textStyle: "form-control-capitalize" | "form-control-lowecase" | "form-control-uppercase" | "form-control-normal";
  @Input() textAlign: "form-control-left" | "form-control-center" | "form-control-right" | "form-control-rtl";
  @Input() inputSize: string; //bootstrap grid system - flex or basic
  @Input() readonly: boolean;
  @Input() disabled: boolean;
  @Input() autocomplete: boolean = true;
  @Input() value: string;
  @Input() maxlength: number;
  @Input() minlength: number;
  @Input() name: string = 'pepe';
  @Input() placeholder: string;
  @Input() message: string;
  @Input() type: "password" | "number" | "url" | "email" ;
  @Input() mask = false; 


  constructor (){}

  ngOnInit() {
  }

}
