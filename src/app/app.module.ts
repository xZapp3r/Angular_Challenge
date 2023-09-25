import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LogService } from './log.service'

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// basic backend tools --^~~7
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// structure scss
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
// import { MatInputModule } from '@angular/material/input';

// more Routes
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';

//Mat apply
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { ChatComponent } from './chat/chat.component';
import { AdminComponent } from './admin/admin.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    DashboardComponent,
    RegisterComponent,
    ChatComponent,
    AdminComponent,
    FinanceiroComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    // MatInputModule,
    MatFormFieldModule,
    

  ],
  providers: [
    LogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
