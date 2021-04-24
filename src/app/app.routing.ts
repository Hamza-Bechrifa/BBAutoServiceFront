import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';
import { HomeComponent } from './views/home/home.component';
import { UpdateProfileComponent } from './views/Account/update-profile/update-profile.component';
import { AddUserComponent } from './views/manageUsers/add-user/add-user.component';
import { ListUsersComponent } from './views/manageUsers/list-users/list-users.component';
import { EditUserComponent } from './views/manageUsers/edit-user/edit-user.component';
import { LoginComponent } from './views/Account/login/login.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { RecoverPasswordComponent } from './views/Account/recover-password/recover-password.component';
import { UpdatePasswordComponent } from './views/Account/update-password/update-password.component';
import { ArticleListComponent } from './views/Article/article-list/article-list.component';
import { ArticleAddComponent } from './views/Article/article-add/article-add.component';
import { ArticleShowComponent } from './views/Article/article-show/article-show.component';
import { ArticleEditComponent } from './views/Article/article-edit/article-edit.component';
import { ClientEditComponent } from './views/Client/client-edit/client-edit.component';
import { ClientShowComponent } from './views/Client/client-show/client-show.component';
import { ClientListComponent } from './views/Client/client-list/client-list.component';
import { ClientAddComponent } from './views/Client/client-add/client-add.component';
import { VoitureListComponent } from './views/Voiture/voiture-list/voiture-list.component';
import { VoitureAddComponent } from './views/Voiture/voiture-add/voiture-add.component';
import { VoitureShowComponent } from './views/Voiture/voiture-show/voiture-show.component';
import { VoitureEditComponent } from './views/Voiture/voiture-edit/voiture-edit.component';
import { OrdreDeReparationListComponent } from './views/OrdreDeReparation/ordre-de-reparation-list/ordre-de-reparation-list.component';
import { OrdreDeReparationAddComponent } from './views/OrdreDeReparation/ordre-de-reparation-add/ordre-de-reparation-add.component';
import { OrdreDeReparationShowComponent } from './views/OrdreDeReparation/ordre-de-reparation-show/ordre-de-reparation-show.component';
import { OrdreDeReparationEditComponent } from './views/OrdreDeReparation/ordre-de-reparation-edit/ordre-de-reparation-edit.component';
import { BonDeReceptionListComponent } from './views/BonDeReception/bon-de-reception-list/bon-de-reception-list.component';
import { BonDeReceptionAddComponent } from './views/BonDeReception/bon-de-reception-add/bon-de-reception-add.component';
import { BonDeReceptionShowComponent } from './views/BonDeReception/bon-de-reception-show/bon-de-reception-show.component';
import { BonDeReceptionEditComponent } from './views/BonDeReception/bon-de-reception-edit/bon-de-reception-edit.component';
import { TestComponent } from './views/test/test.component';
import { ReglementClientListComponent } from './views/ReglementClient/reglement-client-list/reglement-client-list.component';
import { ReglementClientAddComponent } from './views/ReglementClient/reglement-client-add/reglement-client-add.component';
import { ReglementClientShowComponent } from './views/ReglementClient/reglement-client-show/reglement-client-show.component';
import { ReglementClientEditComponent } from './views/ReglementClient/reglement-client-edit/reglement-client-edit.component';
import { ReglementFournisseurListComponent } from './views/ReglementFournisseur/reglement-fournisseur-list/reglement-fournisseur-list.component';
import { ReglementFournisseurAddComponent } from './views/ReglementFournisseur/reglement-fournisseur-add/reglement-fournisseur-add.component';
import { ReglementFournisseurShowComponent } from './views/ReglementFournisseur/reglement-fournisseur-show/reglement-fournisseur-show.component';
import { ReglementFournisseurEditComponent } from './views/ReglementFournisseur/reglement-fournisseur-edit/reglement-fournisseur-edit.component';
import { FournisseurListComponent } from './views/Fournisseur/fournisseur-list/fournisseur-list.component';
import { FournisseurEditComponent } from './views/Fournisseur/fournisseur-edit/fournisseur-edit.component';
import { FournisseurAddComponent } from './views/Fournisseur/fournisseur-add/fournisseur-add.component';
import { FournisseurShowComponent } from './views/Fournisseur/fournisseur-show/fournisseur-show.component';
import { DevisClientListComponent } from './views/DevisClient/devis-client-list/devis-client-list.component';
import { DevisClientAddComponent } from './views/DevisClient/devis-client-add/devis-client-add.component';
import { DevisClientShowComponent } from './views/DevisClient/devis-client-show/devis-client-show.component';
import { DevisClientEditComponent } from './views/DevisClient/devis-client-edit/devis-client-edit.component';

export const routes: Routes = [

  {
    path: 'login',
    component: SimpleLayoutComponent,
    data: {
      title: 'Login'
    },
    children: [
      {
        path: '',
        component : LoginComponent,
      },
      
    ]
  },
  {
    path: 'recover/password',
    component: SimpleLayoutComponent,
    data: {
      title: 'mot de passe oublié '
    },
    children: [
      {
        path: '',
        component : RecoverPasswordComponent,
      }
    ]
  },
  {
    path: 'changer/password',
    component: SimpleLayoutComponent,
    data: {
      title: 'Changer le mot de passe'
    },
    children: [
      {
        path: '',
        component : UpdatePasswordComponent,
      }
    ]
  },
  {
    
    path: '',
    component: FullLayoutComponent,
    canActivate : [ AuthGuardGuard ],

  /*  data: {
      title: 'Acceuil'
    },*/
    children: [
     
      { 
        path: 'home',
      component: HomeComponent,
      pathMatch: 'full',
        
      },
      {
        path: 'edit-profil',
        component: UpdateProfileComponent,
        pathMatch: 'full',
      },
      
      {
        path: 'add/user',
        component: AddUserComponent,
        pathMatch: 'full',
      },
      {
        path: 'list/users',
        component: ListUsersComponent,
        pathMatch: 'full',
      },
      {
        path: 'edit/users',
        component: EditUserComponent,
        pathMatch: 'full',
      },
      {
        path: '',
        component: HomeComponent,
        canActivate:[ AuthGuardGuard ]
      },

      { path: 'test', component: TestComponent },
      { path: 'article', component: ArticleListComponent },
      { path: 'article/add', component: ArticleAddComponent },
      { path: 'article/show/:id', component: ArticleShowComponent },
      { path: 'article/edit/:id', component: ArticleEditComponent },

      { path: 'client', component: ClientListComponent },
      { path: 'client/add', component: ClientAddComponent },
      { path: 'client/show/:id', component: ClientShowComponent },
      { path: 'client/edit/:id', component: ClientEditComponent },

      { path: 'fournisseur', component: FournisseurListComponent },
      { path: 'fournisseur/add', component: FournisseurAddComponent },
      { path: 'fournisseur/show/:id', component: FournisseurShowComponent },
      { path: 'fournisseur/edit/:id', component: FournisseurEditComponent },

      { path: 'voiture', component: VoitureListComponent },
      { path: 'voiture/add', component: VoitureAddComponent },
      { path: 'voiture/show/:id', component: VoitureShowComponent },
      { path: 'voiture/edit/:id', component: VoitureEditComponent },

      { path: 'ordreDeReparation', component: OrdreDeReparationListComponent },
      { path: 'ordreDeReparation/add', component: OrdreDeReparationAddComponent },
      { path: 'ordreDeReparation/show/:id', component: OrdreDeReparationShowComponent },
      { path: 'ordreDeReparation/edit/:id', component: OrdreDeReparationEditComponent },

      { path: 'devisClient', component: DevisClientListComponent },
      { path: 'devisClient/add', component: DevisClientAddComponent },
      { path: 'devisClient/show/:id', component: DevisClientShowComponent },
      { path: 'devisClient/edit/:id', component: DevisClientEditComponent },

      { path: 'BonDeReception', component: BonDeReceptionListComponent },
      { path: 'BonDeReception/add', component: BonDeReceptionAddComponent },
      { path: 'BonDeReception/show/:id', component: BonDeReceptionShowComponent },
      { path: 'BonDeReception/edit/:id', component: BonDeReceptionEditComponent },

      { path: 'ReglementClient', component: ReglementClientListComponent },
      { path: 'ReglementClient/add/:typeDocument/:idDocument', component: ReglementClientAddComponent },
      { path: 'ReglementClient/show/:id', component: ReglementClientShowComponent },
      { path: 'ReglementClient/edit/:id', component: ReglementClientEditComponent },

      { path: 'ReglementFournisseur', component: ReglementFournisseurListComponent },
      { path: 'ReglementFournisseur/add/:typeDocument/:idDocument', component: ReglementFournisseurAddComponent },
      { path: 'ReglementFournisseur/show/:id', component: ReglementFournisseurShowComponent },
      { path: 'ReglementFournisseur/edit/:id', component: ReglementFournisseurEditComponent },
        
    ]
    
  }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
 
})
export class AppRoutingModule {}
