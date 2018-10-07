import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NativeScriptUIDataFormModule } from 'nativescript-pro-ui/dataform/angular';

import { HttpClientModule } from '@angular/common/http';

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { InputAnimeComponent } from './input-anime/input-anime.component';

import { GlobalService } from "./services/global.service";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUIDataFormModule,
        TNSFontIconModule.forRoot({
            'fa': './assets/fontawesome.css'
        })
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        LoginComponent,
        RegisterComponent,
        InputAnimeComponent,
        ItemDetailComponent
    ],
    providers: [
        GlobalService,
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
