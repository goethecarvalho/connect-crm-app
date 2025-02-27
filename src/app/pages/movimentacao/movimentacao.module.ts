import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { MovimentacaoComponent } from './movimentacao.component';
import { MovimentacaoRoutingModule } from './movimentacao-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule(
    {
        providers: [],
        declarations: [MovimentacaoComponent],
        imports: [
            CommonModule,
            MovimentacaoRoutingModule,
            NavbarModule,
            SidebarModule,

            FormsModule,
            ReactiveFormsModule,
            NgSelectModule
        ]
    }
)

export class MovimentacaoModule { }
