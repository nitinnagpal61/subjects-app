import {Component, AfterViewInit, TemplateRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, ApplicationRef, Injector, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ComponentPortal, Portal, TemplatePortal, DomPortalHost} from '@angular/cdk/portal';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * @title Portal overview
 */
@Component({
  selector: 'window',
  templateUrl: 'window.component.html',
  styleUrls: ['window.component.scss'],
})
export class WindowComponent implements AfterViewInit, OnChanges {
  @Input() id: number;
  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;
  templatePortal: TemplatePortal<any>;
  params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
  width=600,height=300,left=200,top=200`;

  private externalWindow;

  constructor(private _viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
    private route: ActivatedRoute,
    private router: Router) {}


  ngOnChanges(changes: SimpleChanges): void {
    
  }



  ngAfterViewInit() {
    this.externalWindow = window.open('', '', this.params );
    this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);

    // STEP 5: create a PortalHost with the body of the new window document    
    const host = new DomPortalHost(
      this.externalWindow.document.body,
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
      );

    // STEP 6: Attach the portal
    host.attach(this.templatePortal);
  }
}
