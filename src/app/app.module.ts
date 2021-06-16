import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    TestimonialDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
