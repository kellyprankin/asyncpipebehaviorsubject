import { Component, Input, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SomeModel } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Output() formWasSubmitted = new EventEmitter<SomeModel>();
  @Input() incomingData: SomeModel;

  myFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myFormGroup = this.formBuilder.group({
      myValue: [this.incomingData.property1, Validators.required]
    })
  }

  onSubmit(): void {
    this.formWasSubmitted.emit({ property1: this.myFormGroup.get('myValue').value } as SomeModel);
  }
}
