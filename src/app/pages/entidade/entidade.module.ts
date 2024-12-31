import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { EntidadeComponent } from './entidade.component';
import { EntidadeRoutingModule } from './entidade-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule(
    {
        providers: [],
        declarations: [EntidadeComponent],
        imports: [
            CommonModule,
            EntidadeRoutingModule,
            NavbarModule,
            SidebarModule,
            ReactiveFormsModule
        ]
    }
)

export class EntidadeModule { }
