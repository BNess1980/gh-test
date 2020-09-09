import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from '../app/table/table.component';
import { PageComponent } from '../app/page/page.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: TableComponent },
  { path: 'case-detail/:caseId', component: PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
