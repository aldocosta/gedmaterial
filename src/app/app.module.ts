import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes  } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatMenuModule,MatIconModule,MatToolbarModule,
         MatFormFieldModule, MatSelectModule ,MatOptionModule,MatInputModule,
         MatCardModule, MatCheckboxModule, MatTableModule,
         MatGridListModule, MatPaginatorModule, MatSortModule,
         MatDialogModule } from '@angular/material';

import 'hammerjs';
// import './polyfills';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './views/login/login.component';
import { CadastrousuarioComponent } from './views/cadastrousuario/cadastrousuario.component';
import { CadastrodepartamentoComponent } from './views/cadastrodepartamento/cadastrodepartamento.component';
import { DepartamentopermissoesComponent } from './views/departamentopermissoes/departamentopermissoes.component';

import { AppModuleRoutes } from './app.module.config';
import { GedgridComponent } from './components/gedgrid/gedgrid.component';
import { DgnovoComponent } from './views/cadastrousuario/dgnovo/dgnovo.component';

@NgModule({
  declarations: [     
    AppComponent,
    MenuComponent,
    LoginComponent,
    CadastrousuarioComponent,
    CadastrodepartamentoComponent,
    DepartamentopermissoesComponent,
    GedgridComponent,
    DgnovoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,
    AppModuleRoutes.getRoutes(),
    MatButtonModule,MatMenuModule,MatIconModule,MatToolbarModule,MatFormFieldModule,
    MatOptionModule, MatSelectModule,MatInputModule,MatCardModule,MatCheckboxModule,
    MatTableModule, MatGridListModule,MatPaginatorModule,MatSortModule,MatDialogModule
  ],
  entryComponents:[GedgridComponent,
    DgnovoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
