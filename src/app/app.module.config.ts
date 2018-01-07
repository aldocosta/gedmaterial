import { RouterModule, Routes  } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { CadastrousuarioComponent } from './views/cadastrousuario/cadastrousuario.component';
import { CadastrodepartamentoComponent } from './views/cadastrodepartamento/cadastrodepartamento.component';
import { DepartamentopermissoesComponent } from './views/departamentopermissoes/departamentopermissoes.component';


class AppModuleRoutes  {
    private static appRoutes: Routes = [
        { path: '', component: LoginComponent },
        { path: 'users', component: CadastrousuarioComponent },
        { path: 'deptos',component: CadastrodepartamentoComponent},
        { path: 'deptopermissao',component:DepartamentopermissoesComponent}
    ];

    public static getRoutes(){
        return RouterModule.forRoot(this.appRoutes);      
    }   
}  

export {AppModuleRoutes}