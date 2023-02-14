"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AuthController = void 0;
var common_1 = require("@nestjs/common");
var AuthController = /** @class */ (function () {
    function AuthController(authService) {
        this.authService = authService;
    }
    AuthController.prototype.signup = function (dto) {
        return this.authService.signup(dto);
    };
    AuthController.prototype.signin = function (dto) {
        console.log("sign in is called");
        return this.authService.signin(dto);
    };
    __decorate([
        (0, common_1.Post)('signup'),
        __param(0, (0, common_1.Body)())
    ], AuthController.prototype, "signup");
    __decorate([
        (0, common_1.HttpCode)(common_1.HttpStatus.OK),
        (0, common_1.Post)('signin'),
        __param(0, (0, common_1.Body)())
    ], AuthController.prototype, "signin");
    AuthController = __decorate([
        (0, common_1.Controller)('auth')
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
