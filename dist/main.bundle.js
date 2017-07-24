webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section {\r\n    background-color: lightgray;\r\n}\r\n\r\n.about {\r\n    padding: 10px 300px;\r\n    font-size: larger;\r\n}\r\n\r\n.heading {\r\n    margin-left: 35%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <h1 class=\"heading\">\n    Welcome to Just In Time Self Storage\n  </h1>\n  <div class=\"about\">\n    Conveniently located at 1660 Matheson Blvd in Mississauga, Just In Time Self-Storage offers you a choice of 248 spacious\n    public storage units. Each of these storage spaces is individually alarmed and completely secure, thus making sure your\n    belongings are always safe. Climate control within the storage units means that even your temperature-sensitive items\n    are well-maintained and remain exactly as you leave them even after many months in a storage unit. Just In Time also\n    offers customers 24-hour access to their units so that you can self store and access your belongings any time you want.\n    Our professionally managed staff will guide you through the entire process and are always available to answer all your\n    queries, starting with a free tour and consultation!\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage_tips_storage_tips_component__ = __webpack_require__("../../../../../src/app/storage-tips/storage-tips.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__container_container_component__ = __webpack_require__("../../../../../src/app/container/container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__units_units_component__ = __webpack_require__("../../../../../src/app/units/units.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });





var AppRoutingModule = __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
    {
        path: '',
        redirectTo: '/jit',
        pathMatch: 'full'
    },
    { path: 'units', component: __WEBPACK_IMPORTED_MODULE_3__units_units_component__["a" /* UnitsComponent */] },
    { path: 'jit', component: __WEBPACK_IMPORTED_MODULE_2__container_container_component__["a" /* ContainerComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_1__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'storage-tips', component: __WEBPACK_IMPORTED_MODULE_0__storage_tips_storage_tips_component__["a" /* StorageTipsComponent */] }
]);
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n<!-- <div style=\"text-align:center\">\n  <app-container></app-container>\n</div> -->\n<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Just In Time Storage';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_header_main_header_component__ = __webpack_require__("../../../../../src/app/main-header/main-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__container_container_component__ = __webpack_require__("../../../../../src/app/container/container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__image_info_widget_image_info_widget_component__ = __webpack_require__("../../../../../src/app/image-info-widget/image-info-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__units_units_component__ = __webpack_require__("../../../../../src/app/units/units.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__storage_tips_storage_tips_component__ = __webpack_require__("../../../../../src/app/storage-tips/storage-tips.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__why_choose_us_why_choose_us_component__ = __webpack_require__("../../../../../src/app/why-choose-us/why-choose-us.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__main_header_main_header_component__["a" /* MainHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__container_container_component__["a" /* ContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_6__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__image_info_widget_image_info_widget_component__["a" /* ImageInfoWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_9__units_units_component__["a" /* UnitsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_11__storage_tips_storage_tips_component__["a" /* StorageTipsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__why_choose_us_why_choose_us_component__["a" /* WhyChooseUsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".headerImage {\r\n    width: 100%;\r\n    height: 400px;\r\n}\r\n\r\n.map {\r\n    float: left;\r\n}\r\n\r\n.contact {\r\n    margin-top: 200px;\r\n    float: right;\r\n    margin-right: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<img class=\"headerImage\" src=\"./assets/contact.jpg\" />\n\n<div class=\"map\">\n  <iframe width=\"450\" height=\"300\" frameborder=\"0\" style=\"border:0; margin-top:50px;\" src=\"https://www.google.com/maps/embed/v1/place?q=place_id:EjAxNjYgTWF0aGVzb24gQmx2ZCBFLCBNaXNzaXNzYXVnYSwgT04gTDRaLCBDYW5hZGE&key=AIzaSyBVvM7tl84jNtIgAMjWuEtt90Inplr7Zm4\"\n    allowfullscreen></iframe>\n</div>\n<div class=\"contact\">\n  <!-- <form action=\"http://formspree.io/sahilgandhi15@gmail.com\" method=\"post\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <label for=\"senderEmail\">Enter Your Email</label>\n        <input type=\"email\" id=\"senderEmail\" name=\"_replyto\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <label for=\"message\">Enter Your Message</label>\n        <textarea name=\"body\" id=\"message\"></textarea>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <input type=\"submit\" value=\"Send\">\n      </div>\n    </div>\n  </form> -->\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <label for=\"email\">Email -</label>\n      <a href=\"mailto:sahilgandhi15@gmail.com\" id=\"email\">jitStorage@gmail.com</a>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <label for=\"contact\">Contact No. -</label>\n      <span id=\"contact\">905-629-1660</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/container/container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/container.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <app-image-info-widget></app-image-info-widget>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <app-about></app-about>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/container/container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContainerComponent = (function () {
    function ContainerComponent() {
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    return ContainerComponent;
}());
ContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-container',
        template: __webpack_require__("../../../../../src/app/container/container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/container.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContainerComponent);

//# sourceMappingURL=container.component.js.map

/***/ }),

/***/ "../../../../../src/app/image-info-widget/image-info-widget.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#MyImage {\r\n    position: relative;\r\n    margin: 20px auto 0;\r\n    width: 100%;\r\n    max-width: 300px;\r\n    max-height: 300px;\r\n}\r\n\r\n#theImage {\r\n    display: block;\r\n    position: relative;\r\n    width: 250px;\r\n    height: 200px;\r\n    border: 3px solid grey;\r\n}\r\n\r\n#myButton {\r\n    position: absolute;\r\n    left: 90px;\r\n    top: 90px;\r\n    background-color: grey;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    height: 300px;\r\n    margin: 1px 100px;\r\n    left: 500px;\r\n}\r\n\r\nul li {\r\n    float: left;\r\n    display: inline;\r\n    margin-left: 250px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-info-widget/image-info-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <!-- <li>\n    <div id=\"MyImage\">\n      <img id=\"theImage\" src=\"./assets/whyChooseUs.jpg\" />\n      <button id=\"myButton\" class=\"btn btn-primary\">Why Choose Us</button>\n    </div>\n  </li> -->\n  <li>\n    <div id=\"MyImage\">\n      <img id=\"theImage\" src=\"./assets/testimonials.jpg\" />\n      <button id=\"myButton\" (click)=\"units()\" class=\"btn btn-primary\">Units</button>\n    </div>\n  </li>\n  <li>\n    <div id=\"MyImage\">\n      <img id=\"theImage\" src=\"./assets/StorageTips.jpg\" />\n      <button id=\"myButton\" (click)=\"storageTips()\" class=\"btn btn-primary\">Storage Tips</button>\n    </div>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/image-info-widget/image-info-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageInfoWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageInfoWidgetComponent = (function () {
    function ImageInfoWidgetComponent(router) {
        this.router = router;
    }
    ImageInfoWidgetComponent.prototype.ngOnInit = function () {
    };
    ImageInfoWidgetComponent.prototype.storageTips = function () {
        this.router.navigate(['/storage-tips']);
    };
    ImageInfoWidgetComponent.prototype.units = function () {
        this.router.navigate(['/units']);
    };
    return ImageInfoWidgetComponent;
}());
ImageInfoWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({
        selector: 'app-image-info-widget',
        template: __webpack_require__("../../../../../src/app/image-info-widget/image-info-widget.component.html"),
        styles: [__webpack_require__("../../../../../src/app/image-info-widget/image-info-widget.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object])
], ImageInfoWidgetComponent);

var _a;
//# sourceMappingURL=image-info-widget.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-header/main-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".headerImage {\r\n    width: 100%;\r\n    height: 600px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-header/main-header.component.html":
/***/ (function(module, exports) {

module.exports = "<img class=\"headerImage\" src=\"./assets/headerImage.jpg\" />"

/***/ }),

/***/ "../../../../../src/app/main-header/main-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainHeaderComponent = (function () {
    function MainHeaderComponent() {
    }
    MainHeaderComponent.prototype.ngOnInit = function () {
    };
    return MainHeaderComponent;
}());
MainHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-main-header',
        template: __webpack_require__("../../../../../src/app/main-header/main-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-header/main-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainHeaderComponent);

//# sourceMappingURL=main-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul li {\r\n    float: left;\r\n    margin-left: 10%;\r\n    cursor: pointer;\r\n}\r\n.jitLogo{\r\n    font-size: 45px;\r\n}\r\n\r\n.headerlogo{\r\n    height: 50px;\r\n}\r\n\r\n.main {\r\n    background-color: black;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\n.section {\r\n    background-color: black;\r\n    color: white;\r\n    padding-top: 3%;\r\n    padding-bottom: 3%;\r\n    opacity: .6;\r\n    position: fixed;\r\n    width: 100%; \r\n    font-size: 25px;   \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <div class=\"main\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <ul>\n          <li *ngFor=\"let item of navOptions; let first = first;\">\n            <span *ngIf=\"first\" class=\"jitLogo\">\n             <img class=\"headerlogo\" src=\"./assets/logo.jpg\"> {{item}}\n            </span>\n            <span *ngIf=\"!first\">\n              <a (click)=\"navigation(item)\">{{item}}</a>\n            </span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var nav;
(function (nav) {
    nav[nav["About"] = 0] = "About";
    nav[nav["Units"] = 1] = "Units";
    nav[nav["Contact"] = 2] = "Contact";
})(nav || (nav = {}));
var NavBarComponent = (function () {
    function NavBarComponent(router) {
        this.router = router;
        this.navOptions = ['JIT Storage', 'Home', 'Units', 'Contact'];
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.navigation = function (url) {
        if (url === 'Units') {
            this.router.navigate(['/units']);
        }
        if (url === 'Home') {
            this.router.navigate(['/jit']);
        }
        if (url === 'JIT Storage') {
            this.router.navigate(['/jit']);
        }
        if (url === 'Contact') {
            this.router.navigate(['/contact']);
        }
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-nav-bar',
        template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], NavBarComponent);

var _a;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/storage-tips/storage-tips.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".storageTips {\r\n    background-color: lightgray;\r\n}\r\n\r\n.headerImage {\r\n    width: 100%;\r\n    height: 300px;\r\n}\r\n\r\nli {\r\n    margin-bottom: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/storage-tips/storage-tips.component.html":
/***/ (function(module, exports) {

module.exports = "<img class=\"headerImage\" src=\"./assets/StorageTips.jpg\" />\n<div class=\"storageTips\">\n  <h3>\n    Helpful Storage Tips:\n  </h3>\n  <hr>\n  <ul type=\"square\">\n    <li>\n      Store frequently needed items at the front of the storage unit, and move rarely used items to the back. It is also a good\n      idea to try and leave enough space to walk through all the way to the back of the unit. This will save you the effort\n      of moving items if you need to get something from the back of the unit.\n    </li>\n    <li>\n      Many people often forget exactly what items they placed in storage, and spend hours looking for an item in their houses instead.\n      By making a record of all the items you're placing in storage, you can save yourself a lot of time and effort!\n    </li>\n    <li>\n      All furniture items should be covered to prevent dust.\n    </li>\n    <li>\n      Bigger items should be dismantled to help save space, if possible.\n    </li>\n    <li>\n      Mattresses and other furniture should be stood up straight where possible, both to save space and to help protect them from\n      losing shape.\n    </li>\n    <li>\n      The more items you can place in boxes, the more space you save. Heavier boxes should be on the bottom, and fragile boxes\n      should preferably be stacked on top of them.\n    </li>\n    <li>\n      Volatile materials such as paints, fuel etc. should never be stored.\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/storage-tips/storage-tips.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageTipsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageTipsComponent = (function () {
    function StorageTipsComponent() {
    }
    StorageTipsComponent.prototype.ngOnInit = function () {
    };
    return StorageTipsComponent;
}());
StorageTipsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-storage-tips',
        template: __webpack_require__("../../../../../src/app/storage-tips/storage-tips.component.html"),
        styles: [__webpack_require__("../../../../../src/app/storage-tips/storage-tips.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StorageTipsComponent);

//# sourceMappingURL=storage-tips.component.js.map

/***/ }),

/***/ "../../../../../src/app/units/units.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "thead {\r\n    background-color: grey;\r\n    font-weight: normal;\r\n    text-align: center;\r\n}\r\n\r\ntable {\r\n    border: 1px solid black;\r\n}\r\n\r\nth {\r\n    font-weight: normal;\r\n    text-align: center;\r\n}\r\n\r\n.headerImage {\r\n    width: 100%;\r\n    height: 400px;\r\n}\r\n\r\n.section {\r\n    background-color: lightgray;\r\n}\r\n\r\n.about {\r\n    padding: 10px 300px;\r\n    font-size: larger;\r\n}\r\n\r\n.unitsSection {\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    margin: 50px 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/units/units.component.html":
/***/ (function(module, exports) {

module.exports = "<img class=\"headerImage\" src=\"./assets/units.jpg\" />\n<div class=\"unitsSection\">\n  <div class=\"section\">\n    <p>\n      Whether you are an individual or a business customer, Just In Time has a solution for your storage space needs! We offer\n      a full range of self-store unit sizes starting from 5'x5' units the size of a large closet, all the way to 15'x25'\n      units that are each as spacious as a 4-bedroom apartment. Every one of these units is clean, dry and completely secure,\n      thus ensuring complete peace of mind when you self store belongings with us.\n    </p>\n\n    <p>\n      Just In Time strives to be a one-stop shop as far as public storage needs are concerned. To save you a trip to the store,\n      Just In Time offers sturdy locks for purchase on location.\n    </p>\n  </div>\n  <div class=\"unitsDescription\">\n    <table class=\"table table-bordered table-striped table-responsive\">\n      <thead>\n        <tr>\n          <th>\n            Size\n          </th>\n          <th>\n            Description\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>\n            5X5\n          </td>\n          <td>\n            THIS UNIT IS THE SIZE OF A LARGE CLOSET\n          </td>\n        </tr>\n        <tr>\n          <td>\n            5X8\n          </td>\n          <td>\n            THIS UNIT IS THE SIZE OF A SMALL WALK IN CLOSET\n          </td>\n        </tr>\n        <tr>\n          <td>\n            5X10\n          </td>\n          <td>\n            THIS UNIT IS THE SIZE OF A WALK IN CLOSET\n          </td>\n        </tr>\n        <tr>\n          <td>\n            5X12.5\n          </td>\n          <td>\n            THIS UNIT IS THE SIZE OF A SMALL BEDROOM\n          </td>\n        </tr>\n        <tr>\n          <td>\n            6X10\n          </td>\n          <td>\n            THIS UNIT IS A LITTLE LARGER THEN A WALK IN CLOSET\n          </td>\n        </tr>\n        <tr>\n          <td>\n            8X10\n          </td>\n          <td>\n            THIS IS THE SIZE OF A LARGE BATHROOM </td>\n        </tr>\n        <tr>\n          <td>\n            10X10\n          </td>\n          <td>\n            THIS UNIT IS THE SIZE OF A ONE BEDROOM APARTMENT </td>\n        </tr>\n        <tr>\n          <td>\n            10X12.5\n          </td>\n          <td>\n            THIS IS THE SIZE OF A LARGE KITCHEN\n          </td>\n        </tr>\n        <tr>\n          <td>\n            10X15\n          </td>\n          <td>\n            THIS UNIT IS THE SIZE OF A TWO BEDROOM APARTMENT\n          </td>\n        </tr>\n        <tr>\n          <td>\n            10X17.5\n          </td>\n          <td>\n            THIS IS THE SIZE OF A LARGE DINNING ROOM\n          </td>\n        </tr>\n        <tr>\n          <td>\n            10X20\n          </td>\n          <td>\n            THIS IS THE SIZE OF A LIVING ROOM\n          </td>\n        </tr>\n        <tr>\n          <td>\n            10X25\n          </td>\n          <td>\n            THIS IS THE SIZE OF A FAMILY ROOM\n          </td>\n        </tr>\n        <tr>\n          <td>\n            15X12.5\n          </td>\n          <td>\n            THIS IS THE SIZE OF A THRE BEDROOM APARTMENT\n          </td>\n        </tr>\n        <tr>\n          <td>\n            15X25\n          </td>\n          <td>\n            THIS IS THE SIZE OF A FOUR BEDROOM APARTMENT\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/units/units.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnitsComponent = (function () {
    function UnitsComponent() {
    }
    UnitsComponent.prototype.ngOnInit = function () {
        this.test = 'help';
    };
    return UnitsComponent;
}());
UnitsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-units',
        template: __webpack_require__("../../../../../src/app/units/units.component.html"),
        styles: [__webpack_require__("../../../../../src/app/units/units.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UnitsComponent);

//# sourceMappingURL=units.component.js.map

/***/ }),

/***/ "../../../../../src/app/why-choose-us/why-choose-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/why-choose-us/why-choose-us.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  why-choose-us works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/why-choose-us/why-choose-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhyChooseUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhyChooseUsComponent = (function () {
    function WhyChooseUsComponent() {
    }
    WhyChooseUsComponent.prototype.ngOnInit = function () {
    };
    return WhyChooseUsComponent;
}());
WhyChooseUsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-why-choose-us',
        template: __webpack_require__("../../../../../src/app/why-choose-us/why-choose-us.component.html"),
        styles: [__webpack_require__("../../../../../src/app/why-choose-us/why-choose-us.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WhyChooseUsComponent);

//# sourceMappingURL=why-choose-us.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map