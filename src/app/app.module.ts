import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes'; // Asegúrate de que la ruta sea correcta

@NgModule({
    declarations: [
        AppComponent,
        // Otros componentes que tengas
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes) // Asegúrate de que esto esté configurado
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
