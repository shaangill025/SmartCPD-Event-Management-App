import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SmartCpdEventMgmtSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SmartCpdEventMgmtSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SmartCpdEventMgmtSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SmartCpdEventMgmtSharedModule {
  static forRoot() {
    return {
      ngModule: SmartCpdEventMgmtSharedModule
    };
  }
}
