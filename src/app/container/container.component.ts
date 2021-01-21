import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, SomeModel } from '../data.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit {

  myData$: Observable<SomeModel>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.myData$ = this.dataService.getData();
  }

  public onDataUpdate(data: SomeModel): void {
    this.dataService.updateOrSaveData(data);
  }
}
