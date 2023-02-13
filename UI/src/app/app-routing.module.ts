import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RosterTableComponent } from './tables/roster-table/roster-table.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { YearMenuComponent } from './year-menu/year-menu.component';

const routes: Routes = [
  {path:'Home', component:HomeComponent},
  {path:'PageNotFound', component:PageNotFoundComponent},
  {path:'Roster', component:LayoutComponent, 
    children: [
      {path: '', component:YearMenuComponent, outlet: 'year'},
      {path: '', component:RosterTableComponent, outlet: 'main'}
    ]
},
  {path: '', pathMatch: 'full', redirectTo: 'Home'},
  {path: '**', redirectTo: '/PageNotFound'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routingComponents = [RosterTable20302031Component,RosterTable20292030Component]
