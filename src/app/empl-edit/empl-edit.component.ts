import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmplListComponent} from '../empl-list/empl-list.component';
import {Observable, Subscription} from 'rxjs';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {EmplService} from '../services/empl.service';
import {Empl} from '../model/empl';

@Component({
  selector: 'app-empl-edit',
  templateUrl: './empl-edit.component.html',
  styleUrls: ['./empl-edit.component.css']

})

export class EmplEditComponent implements OnInit {


  employees: Observable<Empl[]>;
  emplRef = {make: null};

  constructor(private emplService: EmplService,
              private emplList: EmplListComponent,
              private router: Router) {
  }

  // @Output() public childEvent = new EventEmitter();
   @Input() empl: Observable<Empl[]>;

  // taking input from parent component:
  // @Input() message: string;

  saveChanges(id: number, emplRef: Empl) {
    console.log(this.emplRef);

    this.emplService.getEmployee(id)
      .subscribe((
        data: {
          emplRef: Empl
        }) => {
        this.reloadData();
      });
  }

  ngOnInit() {
    console.log('Got empl');
    this.reloadData();
  }

  reloadData() {
    this.employees = this.emplService.getEmployeesList();
  }


  updateEmployee(id: number) {
    this.emplService.getEmployee(id)
    // console.log(id)
      .subscribe(
        data => {
          // console.log(data);
          this.emplRef = data;
        }
      );
    return this.emplRef;
  }
}
