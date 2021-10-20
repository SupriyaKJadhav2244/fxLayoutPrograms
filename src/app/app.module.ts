import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridlistComponent } from './gridlist/gridlist.component';
import { MatToolbarModule } from '@angular/material/toolbar';  
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexlayoutComponent } from './flexlayout/flexlayout.component';
import { FlexlayoutgapComponent } from './flexlayoutgap/flexlayoutgap.component';
import { FxlayoutalignComponent } from './fxlayoutalign/fxlayoutalign.component';
import { FxflexComponent } from './fxflex/fxflex.component';
import { FlexoffsetComponent } from './flexoffset/flexoffset.component';
import { FxflexalignComponent } from './fxflexalign/fxflexalign.component';
import { FxshowandfxhideComponent } from './fxshowandfxhide/fxshowandfxhide.component';
import { FxexampleComponent } from './fxexample/fxexample.component';
import { FxflexorderComponent } from './fxflexorder/fxflexorder.component';

@NgModule({
  declarations: [
    AppComponent,
    GridlistComponent,
    FlexlayoutComponent,
    FlexlayoutgapComponent,
    FxlayoutalignComponent,
    FxflexComponent,
    FlexoffsetComponent,
    FxflexalignComponent,
    FxshowandfxhideComponent,
    FxexampleComponent,
    FxflexorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
