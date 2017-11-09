import { Component, OnInit, Injectable, Input, Host, Optional } from '@angular/core';
/**
 * Service examples
 */
@Injectable()
export class TabContainerService {
    message: string = "default";
    log(message: string) {
        this.message = "default " + message;
        console.log("normal", message);
    }
}
@Injectable()
export class SpecificTabContainerService {
    message: string = "specific";
    log(message: string) {
        console.log("specific", message);
    }
}
/**
 * TestComponents
 */
@Component({
    selector: 'log',
    template: '<div>log: {{message}}</div>'
})
export class LogComponent {
    get message() {
        return this.service.message;
    }
    //should be specific TabContainerService
    constructor(private service: TabContainerService) {
        console.log('LogComponent service instance:', service.message);
    }
}

@Component({
    selector: 'tab-container',
    template: '<div class="tab-container"><log></log><ng-content></ng-content></div>', //this log here should be specific!!
    viewProviders: [{ provide: TabContainerService, useClass: SpecificTabContainerService }], //this makes sure that de Log in our template gets the specific, but anything in ng-content will get the normal one
    //providers: [{ provide: TabContainerService, useClass: SpecificTabContainerService }] //this overrides any call to TabContainerService (view or ng-content) and will return SpecificTabContainerService
})
export class TabContainerComponent implements OnInit {
    constructor(private service: TabContainerService) { 
        console.log("TabContainer instance", service.message);
    }
    ngOnInit() { }
}

@Component({
    selector: 'tab',
    template: '<div (click)="onClick()"><ng-content></ng-content></div>'
})
export class TabComponent implements OnInit {
    nr: number = Math.random();
    //should be normal service:
    constructor(private service : TabContainerService) { 
        console.log("Tab instance", service.message);
    }

    ngOnInit() { }
    onClick(){
        this.service.log('click from tab ' + this.nr);
    }
}