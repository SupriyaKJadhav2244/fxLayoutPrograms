import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexlayoutComponent } from './flexlayout/flexlayout.component';
import { FlexlayoutgapComponent } from './flexlayoutgap/flexlayoutgap.component';
import { FlexoffsetComponent } from './flexoffset/flexoffset.component';
import { FxexampleComponent } from './fxexample/fxexample.component';
import { FxflexComponent } from './fxflex/fxflex.component';
import { FxflexalignComponent } from './fxflexalign/fxflexalign.component';
import { FxflexorderComponent } from './fxflexorder/fxflexorder.component';
import { FxlayoutalignComponent } from './fxlayoutalign/fxlayoutalign.component';
import { FxshowandfxhideComponent } from './fxshowandfxhide/fxshowandfxhide.component';

const routes: Routes = [
  {path:'',redirectTo:'flexLayout',pathMatch:'full'},
  {path:'flexLayout',component:FlexlayoutComponent},
  {path:'flexLayoutGap',component:FlexlayoutgapComponent},
  {path:'flexLayoutAlign',component:FxlayoutalignComponent},
  {path:'fxFlex',component:FxflexComponent},
  {path:'fxFlexOffset',component:FlexoffsetComponent},
  {path:'fxFlexAlign',component:FxflexalignComponent},
  {path:'fxShowAndfxHide',component:FxshowandfxhideComponent},
  {path:'fxFlexOrder',component:FxflexorderComponent},
  {path:'examples',component:FxexampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
