import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule
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
        MatIconModule,
        MatDialogModule
    ],
    exports: [
        MatToolbarModule,
        MatMenuModule,
        MatInputModule,
        MatGridListModule,
        MatTableModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatDialogModule
    ]
})
export class MaterialModule{}