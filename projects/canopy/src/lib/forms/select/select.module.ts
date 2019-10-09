import { NgModule } from '@angular/core';

import { LgLabelModule } from '../label/label.module';
import { LgSelectFieldComponent } from './select-field.component';
import { LgSelectDirective } from './select.directive';

@NgModule({
  imports: [LgLabelModule],
  declarations: [LgSelectDirective, LgSelectFieldComponent],
  exports: [LgSelectDirective, LgSelectFieldComponent],
  entryComponents: [LgSelectFieldComponent]
})
export class LgSelectModule {}