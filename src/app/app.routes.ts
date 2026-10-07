import { Routes } from '@angular/router';
import { ListaAlumnos } from './escuela/lista-alumnos/lista-alumnos';

export const routes: Routes = [

    {
        path:'formulario', 
        children:[
            {
                path:'usuarios',
                loadComponent:()=>
                    import('./formularios/usuario/usuario').then(
                        (c)=>c.Usuario
                    )
            },
            {
                path:'zodiaco',
                loadComponent:()=>
                    import('./formularios/zodiaco/zodiaco').then(
                        (c)=>c.Zodiaco
                    )
            },

        ]


    },
    {   
        path:'escuela', 
        children:[
            {
                path:'lista-alumnos',
                loadComponent:()=>
                    import('./escuela/lista-alumnos/lista-alumnos').then(
                        (c)=>c.ListaAlumnos
                    )
            },

        ]
    
    },


    {
        path:'',redirectTo: 'admin', pathMatch:'full'
    },
    {
        path:'**',redirectTo: 'admin'
    }
];
