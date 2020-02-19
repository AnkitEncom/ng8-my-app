(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/about/about.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/about/about.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Angular 8 is an open-source, client-side TypeScript based JavaScript framework. It is written in TypeScript and complied into JavaScript. Angular 8 is used to create dynamic web applications. It is very similar to its previous versions except having some extensive features.</p>\n\n<h3>DEVELOP ACROSS ALL PLATFORMS</h3>\n<p>Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/contact/contact.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/contact/contact.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Contact Us</h1>\n<form [formGroup]=\"messageForm\" (ngSubmit)=\"onSubmit()\">\n  <h5 *ngIf=\"success\">Your Form Is Valid</h5>\n<label>\n  Name:\n  <input type=\"text\" formControlName=\"name\" >\n  <div *ngIf=\"submitted && messageForm.controls.name.errors\" class=\"error\">\n    <div *ngIf=\"messageForm.controls.name.errors.required\">\n      Name is required\n    </div>\n  </div>\n</label>\n<label>\n  Message:\n  <textarea formControlName=\"message\"></textarea>\n  <div *ngIf=\"submitted && messageForm.controls.message.errors\" class=\"error\">\n    <div *ngIf=\"messageForm.controls.message.errors.required\">\n      Message required\n    </div>\n  </div>\n</label>\n<input type=\"submit\" value=\"Submit\" class=\"cta\">\n</form>\n\n<div *ngIf=\"submitted\" class=\"results\">\n  <strong>Name</strong> <span>{{messageForm.controls.name.value}}</span>\n  <strong>Message</strong><span>{{messageForm.controls.message.value}}</span>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1 [class.color]=\"h1style\">My Home</h1>\n<h1 [ngClass]=\"{\n  'color':h1style,\n  'large': !h1style\n}\">Home</h1>\n<button (click)=\"FirstClick()\">Click Me</button>-->\n\n<h1>Users </h1>\n<ul *ngIf=\"users\">\n  <li *ngFor=\"let user of users.data\">\n   <img [src]=\"user.avatar\">\n   <p>{{user.first_name}} {{user.last_name}}</p>\n </li>\n</ul>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/nav/nav.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/nav/nav.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <a routerLink=\"/\" class=\"logo\">{{appTitle}}</a>\n    <nav>\n      <ul>\n        <li><a routerLink=\"/\">Home</a></li>\n        <li><a routerLink=\"/about\">About</a></li>\n        <li><a routerLink=\"/contact\">Contact us</a></li>\n      </ul>\n    </nav>\n  </div>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<section>\n  <router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/Components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/Components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  background: #eeeeee;\n  padding: 2em;\n  border-radius: 4px;\n  margin-bottom: 7px;\n  grid-template-columns: 60px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hYm91dC9GOlxcQW5raXRfUGFud2FyXFxBbmd1bGFyQXBwXFxuZy10ZW1wL3NyY1xcYXBwXFxDb21wb25lbnRzXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuICBwYWRkaW5nOiAyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDdweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggYXV0bztcclxufVxyXG4iLCJwIHtcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcbiAgcGFkZGluZzogMmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/Components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/Components/about/about.component.scss")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/Components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/Components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  display: block;\n}\nlabel input, label textarea {\n  display: block;\n  width: 50%;\n  margin-bottom: 20px;\n  padding: 1em;\n}\nlabel .error {\n  margin-top: -20px;\n  background: yellow;\n  padding: 0.5em;\n  display: inline-block;\n  font-size: 0.9em;\n  margin-bottom: 20px;\n}\n.cta {\n  background: #7700FF;\n  border: none;\n  color: white;\n  text-transform: uppercase;\n  border-radius: 4px;\n  padding: 1em;\n  cursor: pointer;\n  font-family: \"Montserrat\";\n}\n.results {\n  margin-top: 50px;\n}\n.results strong {\n  display: block;\n}\n.results span {\n  margin-bottom: 20px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9jb250YWN0L0Y6XFxBbmtpdF9QYW53YXJcXEFuZ3VsYXJBcHBcXG5nLXRlbXAvc3JjXFxhcHBcXENvbXBvbmVudHNcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGO0FEQ0U7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NOO0FERUU7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FOO0FESUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNGRjtBREtBO0VBQ0UsZ0JBQUE7QUNGRjtBRElFO0VBQ0ksY0FBQTtBQ0ZOO0FESUU7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICBpbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgcGFkZGluZzogMWVtO1xyXG4gIH1cclxuXHJcbiAgLmVycm9yIHtcclxuICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHllbGxvdztcclxuICAgICAgcGFkZGluZzogLjVlbTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IC45ZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY3RhIHtcclxuICBiYWNrZ3JvdW5kOiAjNzcwMEZGO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxufVxyXG5cclxuLnJlc3VsdHMge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gIHN0cm9uZyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbiIsImxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5sYWJlbCBpbnB1dCwgbGFiZWwgdGV4dGFyZWEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMWVtO1xufVxubGFiZWwgLmVycm9yIHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGJhY2tncm91bmQ6IHllbGxvdztcbiAgcGFkZGluZzogMC41ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmN0YSB7XG4gIGJhY2tncm91bmQ6ICM3NzAwRkY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDFlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG59XG5cbi5yZXN1bHRzIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5yZXN1bHRzIHN0cm9uZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnJlc3VsdHMgc3BhbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ContactComponent = /** @class */ (function () {
    function ContactComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.success = false;
        this.submitted = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.messageForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    ContactComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.messageForm.invalid) {
            return;
        }
        this.success = true;
    };
    ContactComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/Components/contact/contact.component.scss")]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/Components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/Components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  color: yellowgreen;\n}\n\n.large {\n  font-size: 4em;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nul li {\n  background: #eeeeee;\n  padding: 2em;\n  border-radius: 4px;\n  margin-bottom: 7px;\n  display: grid;\n  grid-template-columns: 60px auto;\n}\n\nul li p {\n  font-weight: bold;\n  margin-left: 20px;\n}\n\nul li img {\n  border-radius: 50%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ob21lL0Y6XFxBbmtpdF9QYW53YXJcXEFuZ3VsYXJBcHBcXG5nLXRlbXAvc3JjXFxhcHBcXENvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUFVLFVBQUE7QUNJWjs7QURGRTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUNJTjs7QURGTTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNJVjs7QURETTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ0dWIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3J7XHJcbiAgY29sb3I6IHllbGxvd2dyZWVuO1xyXG59XHJcbi5sYXJnZXtcclxuICBmb250LXNpemU6IDRlbTtcclxufVxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtwYWRkaW5nOiAwO1xyXG5cclxuICBsaSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuICAgICAgcGFkZGluZzogMmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IGF1dG87XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG4iLCIuY29sb3Ige1xuICBjb2xvcjogeWVsbG93Z3JlZW47XG59XG5cbi5sYXJnZSB7XG4gIGZvbnQtc2l6ZTogNGVtO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxudWwgbGkge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICBwYWRkaW5nOiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggYXV0bztcbn1cbnVsIGxpIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG51bCBsaSBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/data.service */ "./src/app/Services/data.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(data) {
        this.data = data;
        this.h1style = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUserList().subscribe(function (data) {
            _this.users = data;
            console.log(_this.users);
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/Components/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Components/nav/nav.component.scss":
/*!***************************************************!*\
  !*** ./src/app/Components/nav/nav.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background: #7700FF;\n}\nheader .logo {\n  font-weight: bold;\n}\nheader nav {\n  justify-self: right;\n}\nheader nav ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\nheader nav ul li {\n  float: left;\n}\nheader nav ul li a {\n  padding: 1.5em;\n  text-transform: uppercase;\n  font-size: 0.8em;\n}\nheader nav ul li a:hover {\n  background: #8E2BFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9uYXYvRjpcXEFua2l0X1BhbndhclxcQW5ndWxhckFwcFxcbmctdGVtcC9zcmNcXGFwcFxcQ29tcG9uZW50c1xcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7QURDRTtFQUNJLGlCQUFBO0FDQ047QURFRTtFQUNJLG1CQUFBO0FDQU47QURFTTtFQUNJLHFCQUFBO0VBQ0EsU0FBQTtFQUFXLFVBQUE7QUNDckI7QURDVTtFQUNJLFdBQUE7QUNDZDtBRENjO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDbEI7QURDa0I7RUFDSSxtQkFBQTtBQ0N0QiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogIzc3MDBGRjtcclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7IHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzhFMkJGRjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxufVxyXG4iLCJoZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjNzcwMEZGO1xufVxuaGVhZGVyIC5sb2dvIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5oZWFkZXIgbmF2IHtcbiAganVzdGlmeS1zZWxmOiByaWdodDtcbn1cbmhlYWRlciBuYXYgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbmhlYWRlciBuYXYgdWwgbGkge1xuICBmbG9hdDogbGVmdDtcbn1cbmhlYWRlciBuYXYgdWwgbGkgYSB7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuaGVhZGVyIG5hdiB1bCBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzhFMkJGRjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/Components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.appTitle = 'My App';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/Components/nav/nav.component.scss")]
        })
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/Services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getUserList = function () {
        return this.http.get('https://reqres.in/api/users');
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/home/home.component */ "./src/app/Components/home/home.component.ts");
/* harmony import */ var _Components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/about/about.component */ "./src/app/Components/about/about.component.ts");
/* harmony import */ var _Components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/contact/contact.component */ "./src/app/Components/contact/contact.component.ts");






var routes = [
    { path: '', component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _Components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'contact', component: _Components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-temp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/nav/nav.component */ "./src/app/Components/nav/nav.component.ts");
/* harmony import */ var _Components_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/about/about.component */ "./src/app/Components/about/about.component.ts");
/* harmony import */ var _Components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/contact/contact.component */ "./src/app/Components/contact/contact.component.ts");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/home/home.component */ "./src/app/Components/home/home.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _Components_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _Components_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _Components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _Components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Ankit_Panwar\AngularApp\ng-temp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map