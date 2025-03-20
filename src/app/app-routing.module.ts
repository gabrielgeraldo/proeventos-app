import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';

import { EventosComponent } from './components/eventos/eventos.component';
import { EventoDetalheComponent } from './components/eventos/evento-detalhe/evento-detalhe.component';
import { EventoListaComponent } from './components/eventos/evento-lista/evento-lista.component';

import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';

import { ContatosComponent } from './components/contatos/contatos.component';

import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { IntegracoesProtheusComponent } from './components/integracoesProtheus/integracoesProtheus.component';
import { RickemortyComponent } from './components/rickemorty/rickemorty.component';
import { RickemortyDetalheComponent } from './components/rickemorty/rickemorty-detalhe/rickemorty-detalhe.component';
import { RickemortyListaComponent } from './components/rickemorty/rickemorty-lista/rickemorty-lista.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'user', redirectTo: 'user/perfil' },
      {
        path: 'user/perfil',
        component: PerfilComponent,
      },
      { path: 'eventos', redirectTo: 'eventos/lista' },
      {
        path: 'eventos',
        component: EventosComponent,
        children: [
          { path: 'detalhe/:id', component: EventoDetalheComponent },
          { path: 'detalhe', component: EventoDetalheComponent },
          { path: 'lista', component: EventoListaComponent },
        ],
      },

      { path: 'rickemorty', redirectTo: 'rickemorty/lista' },
      {
        path: 'rickemorty', component: RickemortyComponent,
        children: [
            { path: 'detalhe/:id', component: RickemortyDetalheComponent },
            { path: 'detalhe', component: RickemortyDetalheComponent },
            { path: 'lista', component: RickemortyListaComponent },
        ]
      },

      { path: 'dashboard', component: DashboardComponent },
      { path: 'palestrantes', component: PalestrantesComponent },
      { path: 'contatos', component: ContatosComponent },
      { path: 'integracoesProthues', component: IntegracoesProtheusComponent },
    ],
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
    ],
  },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
