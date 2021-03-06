import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './about/history/history.component';
import { ExportControlComplianceComponent } from './about/export-control-compliance/export-control-compliance.component';
import { WhistleblowingComponent } from './about/whistleblowing/whistleblowing.component';
import { FooterComponent } from './footer/footer.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { CareersComponent } from './careers/careers.component';
import { CatagoriesComponent } from './catagories/catagories.component';
import { SubcatagoriesComponent } from './subcatagories/subcatagories.component';
import { ProductsComponent } from './products/products.component';
import { SubSubCatagoryComponent } from './sub-sub-catagory/sub-sub-catagory.component';
import { HttpClientModule } from '@angular/common/http';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarTrimPipe } from './navbar-trim.pipe';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { MainCategoryComponent } from './main-category/main-category.component';
import { SeeWhatWeDoComponent } from './see-what-we-do/see-what-we-do.component';
import { SingleNewsEventComponent } from './single-news-event/single-news-event.component';
import { AllTestimonialComponent } from './all-testimonial/all-testimonial.component';
import { TestimonialDetailComponent } from './testimonial-detail/testimonial-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatTabsModule} from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { SocialLinkComponent } from './social-link/social-link.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalConstants } from '../app/common/global-constant';
import {MatMenuModule} from '@angular/material/menu';
import { ViewPdfComponent } from './view-pdf/view-pdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import {MatTableModule} from '@angular/material/table';
import { TeamComponent } from './about/team/team.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NoRedCardPipe } from './no-red-card.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HistoryComponent,
    ExportControlComplianceComponent,
    WhistleblowingComponent,
    FooterComponent,
    SolutionsComponent,
    NewsEventsComponent,
    CareersComponent,
    CatagoriesComponent,
    SubcatagoriesComponent,
    ProductsComponent,
    SubSubCatagoryComponent,
    ComingSoonComponent,
    EventsComponent,
    ContactComponent,
    NavbarTrimPipe,
    SeeWhatWeDoComponent,
    SingleNewsEventComponent,
    AllTestimonialComponent,
    TestimonialDetailComponent,
    SubCategoryComponent  ,
    MainCategoryComponent,
    SocialLinkComponent,
    LoginComponent,
    SignupComponent,
    ViewPdfComponent,
    ApplyNowComponent,
    ProfileComponent,
    TeamComponent,
    InstrumentComponent,
    NotFoundComponent,
    SideNavComponent,
    NoRedCardPipe 
  ],
  imports: [
    MatExpansionModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatTreeModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    PdfViewerModule,
    MatMenuModule,
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatTabsModule,
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GlobalConstants],
  bootstrap: [AppComponent]
})
export class AppModule { }
