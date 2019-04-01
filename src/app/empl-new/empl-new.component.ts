import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';


import {Config} from 'protractor';
// import {JSONService} from '../json.service';
// import { NgSelectModule } from '@ng-select/ng-select';
// import data from 'src/app/services/position.json';
import {EmplService} from '../services/empl.service';
import {NotificationService} from '../services/notification.service';
import {Empl} from '../model/empl';
import {EmplListComponent} from '../empl-list/empl-list.component';

const json = require('src/app/services/position.json');


@Component({
  selector: 'app-empl-new',
  templateUrl: './empl-new.component.html',
  styleUrls: ['./empl-new.component.css'],
  providers: [NotificationService]
})
export class EmplNewComponent implements OnInit {
  ngOnInit(): void {
  }
}

//
//   @Input() word: any;
//
//   employees: Observable<Empl[]>;
//   // empl: Empl;
//   public empl = {} as Empl;
//
//   nameRegex = '^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$';
//   lastNameRegex = '^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$';
//
//   @Input()
//   pattern: string | RegExp;
//   private submitted: boolean;
//
//   constructor(private emplService: EmplService,
//               private router: Router,
//               private http: HttpClient,
//               private notifyService: NotificationService) { }
//
//   ngOnInit() {
//     this.submitted = false;
//     this.word = json.positions;
//   }
//
//   reloadData() {
//     this.employees = this.emplService.getEmployeesList();
//   }
//
//   // addHero (hero: Hero): Observable<Hero> {
//   //   return this.http.posst<Hero>(this.heroesUrl, hero, httpOptions)
//   //     .pipe(
//   //       catchError(this.handleError('addHero', hero))
//   //     );
//   // }
//   //
//   save(empl: Empl) {
//      return this.emplService.createEmployee(this.empl)
//       .subscribe(data => {
//           this.reloadData();
//           console.log(this.employees);
//
//           this.employees = this.emplService.getEmployeesList();
//
//           this.notifyService.showSuccess(data.name + ' was saved', 'Notification');
//           this.reloadData();
//
//
//         },
//         error => console.log(error));
//     // this.empl = new Empl();
//   }
//
//   onSubmit() {
//     this.submitted = true;
//     console.log(this.submitted)
//     this.save(this.empl);
//     this.employees = this.emplService.getEmployeesList();
//     console.log(this.submitted);
//     // this.router.navigate(['empl-list']);
//
//
//   }
// }
//
