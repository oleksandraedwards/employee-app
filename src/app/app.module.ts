import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {AlertComponent} from './alert/alert.component';
import {EmplEditComponent} from './empl-edit/empl-edit.component';
import {EmplListComponent} from './empl-list/empl-list.component';
import {EmplNewComponent} from './empl-new/empl-new.component';
import {FrontPageComponent} from './front-page/front-page.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ManagerComponent} from './manager/manager.component';
import {RegisterComponent} from './register/register.component';
import {UserComponent} from './user/user.component';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import {NgxPaginationModule} from 'ngx-pagination';
import {UserService} from './services/user.service';
import {AlertService} from './services/alert.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { StatisticsComponent } from './statistics/statistics.component';
import { SortingDirective } from './sorting.directive'; // importing the module
import {TableModule} from 'ngx-easy-table';
import { SharepointComponent } from './sharepoint/sharepoint.component';
import { FooterComponent } from './footer/footer.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { DetailsUploadComponent } from './details-upload/details-upload.component';
import { ListUploadComponent } from './list-upload/list-upload.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './statistics/bar-chart/bar-chart.component';
import {PieChartVisualComponent} from './statistics/pie-chart-visual/pie-chart-visual.component';
import { UserListComponent } from './user-list/user-list.component';
import {HttpErrorHandler} from './services/http-error-handler.service';
import {MessageService} from './services/message.service';
import {Ng2TableModule} from 'ngx-datatable';
import {UserListService} from './user-list/user-list.service';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AlertComponent,
    EmplEditComponent,
    EmplListComponent,
    EmplNewComponent,
    FrontPageComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ManagerComponent,
    RegisterComponent,
    UserComponent,
    StatisticsComponent,
    SortingDirective,
    SharepointComponent,
    FooterComponent,
    FormUploadComponent,
    DetailsUploadComponent,
    ListUploadComponent,
    LandingPageComponent,
    BarChartComponent,
    PieChartVisualComponent,
    UserListComponent],

  imports: [

    FusionChartsModule, // Include in imports
    TableModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    ChartsModule,
    Ng2TableModule,
    NgSelectModule,

    ToastrModule.forRoot(
      {
        timeOut: 4000
      }
    ) // ToastrModule added
  ],
  exports: [
    // HomeComponent
  ],
  providers: [
    // {
    //   provide: APP_BASE_HREF,
    //   useValue: window['base-href']
    // },

    HttpErrorHandler,
    SortingDirective,
    ToastrService,
    // AuthGuard,
    AlertService,
    UserService,
    MessageService,
    UserListService,
    httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
