import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {UserListService} from './user-list.service';
import {switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Role} from '../model/role';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  dropDown = false;
  roles: Role[];
  role: Role;
  users: User[];
  user: User;
  selectedUser;
  editUser: User; // the hero currently being edited
  editRole: Role;

  constructor(private userListService: UserListService,
              private router: Router) { }

  ngOnInit() {
    this.getUsers();
    this.getRoles();

    // this.crises$ = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     this.selectedId = +params.get('id');
    //     return this.service.getCrises();
    //   })
    // );
  }


  getRoles(): void {
    this.userListService.getRoles()
      .subscribe(roles => this.roles = roles);
  }
  getUsers(): void {
    this.userListService.getUsers()
      .subscribe(users => this.users = users);
  }

  deleteUser(user: User): void {
    console.log('here');
    // this.router.navigate(['/admin', user.id]);
    this.users = this.users.filter(h => h !== user);
    this.userListService.deleteUser(user.id).subscribe();
    /*
    // oops ... subscribe() is missing so nothing happens
    this.heroesService.deleteHero(hero.id);
    */
  }


  updateRole(role: Role) {
    this.editRole = role;
    this.dropDown = true;
  }

  saveRole(role: Role) {
    this.role = role;
    this.dropDown = false;
    console.log(this.role);
    if (this.editRole) {
      this.userListService.saveRole(this.editRole)
        .subscribe(user => {
          // replace the hero in the heroes list with update from server
          const ix = user ? this.roles.findIndex(h => h.id === user.id) : -1;
          if (ix > -1) { this.roles[ix] = user; }
        });
      this.editUser = undefined;
    }
  }
}
