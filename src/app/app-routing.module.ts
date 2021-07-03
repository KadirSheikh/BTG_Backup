import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExportControlComplianceComponent } from './about/export-control-compliance/export-control-compliance.component';
import { HistoryComponent } from './about/history/history.component';
import { TeamComponent } from './about/team/team.component';
import { WhistleblowingComponent } from './about/whistleblowing/whistleblowing.component';
import { AllTestimonialComponent } from './all-testimonial/all-testimonial.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { CareersComponent } from './careers/careers.component';
import { CatagoriesComponent } from './catagories/catagories.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { MainCategoryComponent } from './main-category/main-category.component';
import { NavbarService } from './navbar.service';
import { NewsEventsComponent } from './news-events/news-events.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { SeeWhatWeDoComponent } from './see-what-we-do/see-what-we-do.component';
import { SingleNewsEventComponent } from './single-news-event/single-news-event.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { SubSubCatagoryComponent } from './sub-sub-catagory/sub-sub-catagory.component';
import { SubcatagoriesComponent } from './subcatagories/subcatagories.component';
import { ViewPdfComponent } from './view-pdf/view-pdf.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'export-control-compliance', component: ExportControlComplianceComponent },
  { path: 'compliance-whistleblowing-scheme', component: WhistleblowingComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'news-&-press-release', component: NewsEventsComponent },
  { path: 'news_and_events/:id', component: NewsEventsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'catagory/:id', component: CatagoriesComponent },
  { path: 'subcatagory/:id', component: SubcatagoriesComponent },
  { path: 'sub-subcatagory/:id', component: SubSubCatagoryComponent },
  { path: 'product/:id', component: ProductsComponent },
  { path: 'solution-sub-category/:id', component: SubSubCatagoryComponent },
  { path: 'solution-main-category/:id', component: MainCategoryComponent },
  { path: 'instrument/:id', component: InstrumentComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'see-what-we-do' , component:SeeWhatWeDoComponent },
  { path: 'single_news/:id' , component:SingleNewsEventComponent },
  { path: 'all-testimonial' , component:AllTestimonialComponent },
  { path: 'view-pdf' , component:ViewPdfComponent },
  { path: 'apply-now' , component:ApplyNowComponent },
  { path: 'profile' , component:ProfileComponent },
  { path: 'teams' , component:TeamComponent },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
