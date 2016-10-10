System.register(['angular2/core', './elementid.service'], function(exports_1, context_1) {
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
    var core_1, elementid_service_1;
    var ElementComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (elementid_service_1_1) {
                elementid_service_1 = elementid_service_1_1;
            }],
        execute: function() {
            ElementComponent = (function () {
                function ElementComponent(_elementidSevice) {
                    this._elementidSevice = _elementidSevice;
                }
                ElementComponent.prototype.ngOnInit = function () {
                    this.posY = 200;
                    this.posX = 300;
                    this.elementId = this._elementidSevice.getElementId();
                    this.mouseDown = false;
                };
                ElementComponent.prototype.mousedownElement = function (event) {
                    this.mouseDown = true;
                    this.posRelX = event.clientX - this.posX;
                    this.posRelY = event.clientY - this.posY;
                    //console.log('mousedown', event);
                };
                ElementComponent.prototype.mousemoveElement = function (event) {
                    if (this.mouseDown) {
                        this.posX = (event.clientX - this.posRelX) < 0 ? 0 : (event.clientX - this.posRelX) > 920 ? 920 : event.clientX - this.posRelX;
                        this.posY = (event.clientY - this.posRelY) < 0 ? 0 : (event.clientY - this.posRelY) > 420 ? 420 : event.clientY - this.posRelY;
                    }
                };
                ElementComponent.prototype.mouseupElement = function (event) {
                    this.mouseDown = false;
                };
                __decorate([
                    core_1.HostListener('mousedown', ['$event']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], ElementComponent.prototype, "mousedownElement", null);
                __decorate([
                    core_1.HostListener('mousemove', ['$event']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], ElementComponent.prototype, "mousemoveElement", null);
                __decorate([
                    core_1.HostListener('mouseup', ['$event']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], ElementComponent.prototype, "mouseupElement", null);
                ElementComponent = __decorate([
                    core_1.Component({
                        selector: 'ang-element',
                        template: "\n  \t\t<div id=\"{{elementId}}\" data-top=\"0\" data-left=\"0\" class=\"big\" style=\"top: {{posY}}px; left: {{posX}}px;\"></div>\n  "
                    }), 
                    __metadata('design:paramtypes', [elementid_service_1.ElementidService])
                ], ElementComponent);
                return ElementComponent;
            }());
            exports_1("ElementComponent", ElementComponent);
        }
    }
});
//# sourceMappingURL=element.component.js.map