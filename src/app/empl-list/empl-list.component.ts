import {Observable, Subscription, throwError} from 'rxjs';
import {AfterViewInit, Component, Input, OnInit,
  TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {EmplEditComponent} from '../empl-edit/empl-edit.component';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
// import { ToastContainerDirective } from 'ngx-toastr';
import {ViewContainerRef} from '@angular/core';

import {ToastrService} from 'ngx-toastr';
import {EmplService} from '../services/empl.service';
import {NotificationService} from '../services/notification.service';
import {Empl} from '../model/empl';
import {TokenStorageService} from '../auth/token-storage.service';

// import colorsJson from 'src/app/services/position.json';

const json = require('src/app/services/position.json');


@Component({
  selector: 'app-empl-list',
  templateUrl: './empl-list.component.html',
  styleUrls: ['./empl-list.component.css'],
  providers: []
})

export class EmplListComponent implements OnInit {
  @ViewChild('actionTpl') actionTpl: TemplateRef<any>;
  @ViewChild(NgForm) f: NgForm;

  @Input()
  pattern: string | RegExp;
  private submitted: boolean;

  // collection: any[] = Array

  employees: Observable<Empl[]>;
  // init. empl as an emty object not to get type error
  empl = {} as Empl;
  newEmpl = {} as Empl;
  public show = false;
  public buttonName: any = 'Add Employee';
  public word;
  private authority: string;
  private roles: string[];
  info: any;
  // REGEX:
  nameRegex = '^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$';
  lastNameRegex = '^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$';
  salaryRegexExceedAmount = '^\\$?([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*' +
    '(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|' +
    '(\\.[0-9]{1,2})?)$';



  constructor(private emplService: EmplService,
              private router: Router,
              private route: ActivatedRoute,
              private notifyService: NotificationService,
              private tokenStorage: TokenStorageService,
              private token: TokenStorageService,
              private fb: FormBuilder) {
  }


  ngOnInit() {
    this.word = json.positions;
    this.reloadData();
    this.submitted = false;


    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }



  toggle(f: any) {
    this.show = !this.show;
    this.submitted = false;
    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) {
      this.buttonName = 'Cancel';
    } else {
      this.buttonName = 'Add Employee';
    }
    console.log(`Submitted ${this.submitted}`);
    console.log(`Show ${this.show}`);
  }

  reloadData() {
    this.employees = this.emplService.getEmployeesList();
    console.log(this.employees);

  }

  getEmployee(id: number) {
    this.emplService.getEmployee(id)
    // console.log(id)
      .subscribe(
        data => {
          // console.log(data);
          this.empl = data;
        }
      );
    return this.empl;
  }

  deleteEmployee(id: number) {
    this.emplService.deleteEmployee(id)
      .subscribe(
        // can delete by object if needed:
        // data: { empl: Empl }) => {
        data => {
          // console.log(this.data.name);
          console.log(id);
          this.notifyService.showInfo('Employee with id: ' + id + ' was deleted', 'Success')
          this.reloadData();
        },
        error => console.log(error));
    this.reloadData();
  }

  save(newEmpl: Empl) {
    return this.emplService.createEmployee(this.newEmpl)
      .subscribe(data => {
          // this.reloadData();
          this.submitted = true;
          this.f.resetForm();
          this.notifyService.showSuccess(this.newEmpl.name + ' was saved', 'Notification');
        },
        error => console.log(error));
    // this.empl = new Empl();
  }

  onSubmit(f: any) {
    this.submitted = true;
    this.show = false;
    this.save(this.empl);
    this.reloadData();
    this.buttonName = `Add Employee`;
    console.log(`Submitted ${this.submitted}`);
    console.log(`Show ${this.show}`);
    // f.form.reset();


    // formDirective.resetForm();

  }
  saveChanges(id: number, empl: Empl) {
    console.log(this.empl.id);
    console.log(this.empl);
    this.emplService.updateEmployee(this.empl.id, this.empl)
      .subscribe(
        data => {
          console.log(this.empl);
          this.notifyService.showSuccess
          (this.empl.name + ' was updated', 'Success');
          this.reloadData();

        },
        error => console.log(error));
  }

  keyPress(event: any) {
    console.log(event);
  }
}
