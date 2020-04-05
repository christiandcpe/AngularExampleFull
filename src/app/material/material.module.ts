import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatMenuModule,
        MatInputModule,
        MatGridListModule,
        MatTableModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule
    ],
    exports: [
        MatToolbarModule,
        MatMenuModule,
        MatInputModule,
        MatGridListModule,
        MatTableModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule
    ]
})
export class MaterialModule{}