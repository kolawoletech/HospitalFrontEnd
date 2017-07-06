import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import {RegisterComponent} from './register/index';
import {AddNote} from './addNote/index';


const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'addnote', component:AddNote, canActivate: [AuthGuard] },
    { path: 'addnote/:mrNo', component: AddNote, canActivate: [AuthGuard] },
    {path: 'home', component:HomeComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);