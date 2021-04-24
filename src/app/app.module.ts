import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, DatePipe } from '@angular/common';
import {
  MatInputModule, MatSelectModule, MatButtonModule,
  MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatNativeDateModule, MAT_DATE_LOCALE, MatProgressSpinnerModule, MatIconModule, MatDialogModule, MatAutocompleteModule, MatButtonToggleModule, MatCardModule, MatStepperModule, MatExpansionModule, MatGridListModule, MatListModule, MatMenuModule, MatPaginatorModule, MatRadioModule, MatProgressBarModule, MatRippleModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
]

// Import components
import {
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
} from './components';

const APP_COMPONENTS = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HomeComponent } from './views/home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LaddaModule } from 'angular2-ladda';
import { ToasterModule } from 'angular2-toaster';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateProfileComponent } from './views/Account/update-profile/update-profile.component';
import { AddUserComponent } from './views/manageUsers/add-user/add-user.component';
import { ListUsersComponent } from './views/manageUsers/list-users/list-users.component';
import { DataFilterPipe } from './pipes/datafilter.pipe';
import { EditUserComponent } from './views/manageUsers/edit-user/edit-user.component';
import { TokenInterceptor } from './services/token.interceptor';
import { LoginComponent } from './views/Account/login/login.component';
import { DataTableModule } from 'angular2-datatable';
import { RecoverPasswordComponent } from './views/Account/recover-password/recover-password.component';
import { UpdatePasswordComponent } from './views/Account/update-password/update-password.component';
import { DataTablesModule } from 'angular-datatables';
import { FabComponent } from './components/fab/fab.component';
import {TranslateModule,TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from  '@angular/common/http';
import { DateSqlPipe } from './pipes/date-sql.pipe';
import { ArticleListComponent } from './views/Article/article-list/article-list.component';
import { ArticleAddComponent } from './views/Article/article-add/article-add.component';
import { ArticleEditComponent } from './views/Article/article-edit/article-edit.component';
import { ArticleShowComponent } from './views/Article/article-show/article-show.component';
import { ClientListComponent } from './views/Client/client-list/client-list.component';
import { ClientAddComponent } from './views/Client/client-add/client-add.component';
import { ClientEditComponent } from './views/Client/client-edit/client-edit.component';
import { ClientShowComponent } from './views/Client/client-show/client-show.component';
import { VoitureListComponent } from './views/Voiture/voiture-list/voiture-list.component';
import { VoitureAddComponent } from './views/Voiture/voiture-add/voiture-add.component';
import { VoitureEditComponent } from './views/Voiture/voiture-edit/voiture-edit.component';
import { VoitureShowComponent } from './views/Voiture/voiture-show/voiture-show.component';
import { OrdreDeReparationListComponent } from './views/OrdreDeReparation/ordre-de-reparation-list/ordre-de-reparation-list.component';
import { OrdreDeReparationAddComponent } from './views/OrdreDeReparation/ordre-de-reparation-add/ordre-de-reparation-add.component';
import { OrdreDeReparationEditComponent } from './views/OrdreDeReparation/ordre-de-reparation-edit/ordre-de-reparation-edit.component';
import { OrdreDeReparationShowComponent } from './views/OrdreDeReparation/ordre-de-reparation-show/ordre-de-reparation-show.component';
import { BonDeReceptionListComponent } from './views/BonDeReception/bon-de-reception-list/bon-de-reception-list.component';
import { BonDeReceptionAddComponent } from './views/BonDeReception/bon-de-reception-add/bon-de-reception-add.component';
import { BonDeReceptionEditComponent } from './views/BonDeReception/bon-de-reception-edit/bon-de-reception-edit.component';
import { BonDeReceptionShowComponent } from './views/BonDeReception/bon-de-reception-show/bon-de-reception-show.component';
import { TestComponent } from './views/test/test.component';
import { CdkTableModule } from '@angular/cdk/table';
import { ArticlePipe } from './pipes/article.pipe';
import { ClientPipe } from './pipes/client.pipe';
import { FournisseurPipe } from './pipes/fournisseur.pipe';
import { VoiturePipe } from './pipes/voiture.pipe';
import { ReglementClientAddComponent } from './views/ReglementClient/reglement-client-add/reglement-client-add.component';
import { ReglementClientShowComponent } from './views/ReglementClient/reglement-client-show/reglement-client-show.component';
import { ReglementClientListComponent } from './views/ReglementClient/reglement-client-list/reglement-client-list.component';
import { ReglementClientEditComponent } from './views/ReglementClient/reglement-client-edit/reglement-client-edit.component';
import { ReglementFournisseurAddComponent } from './views/ReglementFournisseur/reglement-fournisseur-add/reglement-fournisseur-add.component';
import { ReglementFournisseurEditComponent } from './views/ReglementFournisseur/reglement-fournisseur-edit/reglement-fournisseur-edit.component';
import { ReglementFournisseurListComponent } from './views/ReglementFournisseur/reglement-fournisseur-list/reglement-fournisseur-list.component';
import { ReglementFournisseurShowComponent } from './views/ReglementFournisseur/reglement-fournisseur-show/reglement-fournisseur-show.component';
import { FournisseurAddComponent } from './views/Fournisseur/fournisseur-add/fournisseur-add.component';
import { FournisseurEditComponent } from './views/Fournisseur/fournisseur-edit/fournisseur-edit.component';
import { FournisseurListComponent } from './views/Fournisseur/fournisseur-list/fournisseur-list.component';
import { FournisseurShowComponent } from './views/Fournisseur/fournisseur-show/fournisseur-show.component';
import { DevisClientAddComponent } from './views/DevisClient/devis-client-add/devis-client-add.component';
import { DevisClientEditComponent } from './views/DevisClient/devis-client-edit/devis-client-edit.component';
import { DevisClientListComponent } from './views/DevisClient/devis-client-list/devis-client-list.component';
import { DevisClientShowComponent } from './views/DevisClient/devis-client-show/devis-client-show.component';



export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}


@NgModule({
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient],
      }
      

    }),
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,    
    ToasterModule,
    FormsModule,    
    DataTableModule,    
    LaddaModule,
    DataTablesModule,
    

    // material Modules
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    DataTablesModule,
    ModalModule.forRoot()


  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    HomeComponent,
    UpdateProfileComponent,

    AddUserComponent,
   
    ListUsersComponent,
   
    DataFilterPipe,
   
    EditUserComponent,
    LoginComponent,
    RecoverPasswordComponent,
    UpdatePasswordComponent,

    ArticleListComponent, ArticleAddComponent, ArticleEditComponent, ArticleShowComponent,
    ClientListComponent, ClientAddComponent, ClientEditComponent, ClientShowComponent,
    VoitureListComponent, VoitureAddComponent, VoitureEditComponent, VoitureShowComponent,
    OrdreDeReparationListComponent, OrdreDeReparationAddComponent, OrdreDeReparationEditComponent, OrdreDeReparationShowComponent,
    BonDeReceptionListComponent, BonDeReceptionAddComponent, BonDeReceptionEditComponent, BonDeReceptionShowComponent,
    TestComponent,
    ArticlePipe, ClientPipe, FournisseurPipe, VoiturePipe,
    ReglementClientAddComponent, ReglementClientShowComponent, ReglementClientListComponent, ReglementClientEditComponent,
    ReglementFournisseurAddComponent, ReglementFournisseurEditComponent, ReglementFournisseurListComponent, ReglementFournisseurShowComponent, FournisseurAddComponent, FournisseurEditComponent, FournisseurListComponent, FournisseurShowComponent,

    FabComponent,
    DateSqlPipe,
    DevisClientAddComponent,
    DevisClientEditComponent,
    DevisClientListComponent,
    DevisClientShowComponent,
   
    
  ],
  providers: [DatePipe,{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  } ,
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [ AddUserComponent]
})
export class AppModule {

 }
