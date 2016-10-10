System.register(['angular2/core', './element.component', './elementid.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, element_component_1, elementid_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (element_component_1_1) {
                element_component_1 = element_component_1_1;
            },
            function (elementid_service_1_1) {
                elementid_service_1 = elementid_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(dynamicComponentLoader, elementRef) {
                    this.dynamicComponentLoader = dynamicComponentLoader;
                    this.elementRef = elementRef;
                    this.nextElementId = 0;
                }
                AppComponent.prototype.addBigElement = function () {
                    this.dynamicComponentLoader.loadIntoLocation(element_component_1.ElementComponent, this.elementRef, 'child');
                    this.nextElementId++;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'ang-app',
                        template: "\n  \t\t<div id=\"container\">\n      <div #child></div>\n  \t\t</div>\n  \t\t<button id=\"big\" (click)='addBigElement()'>Add big square</button>\n  ",
                        directives: [element_component_1.ElementComponent],
                        providers: [elementid_service_1.ElementidService]
                    }), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ElementRef])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map