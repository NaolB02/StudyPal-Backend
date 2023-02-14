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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AuthService = void 0;
var common_1 = require("@nestjs/common");
var argon = require("argon2");
var mongoose_1 = require("@nestjs/mongoose");
var AuthService = /** @class */ (function () {
    function AuthService(userModel, jwt) {
        this.userModel = userModel;
        this.jwt = jwt;
    }
    AuthService.prototype.signup = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var hash, new_user, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, argon.hash(dto.password)];
                    case 1:
                        hash = _a.sent();
                        dto.password = hash;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        new_user = new this.userModel(dto);
                        return [4 /*yield*/, new_user.save()];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 4:
                        error_1 = _a.sent();
                        if (error_1.code === 11000) {
                            throw new common_1.ForbiddenException('Credentials taken');
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.signin = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var filter, cur_user, pwMatches;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filter = { username: dto.username };
                        return [4 /*yield*/, this.userModel.findOne(filter)
                            //username not found
                        ];
                    case 1:
                        cur_user = _a.sent();
                        //username not found
                        if (!cur_user) {
                            throw new common_1.ForbiddenException('Credentials incorrect');
                        }
                        return [4 /*yield*/, argon.verify(cur_user.password, dto.password)];
                    case 2:
                        pwMatches = _a.sent();
                        // if password incorrect throw exception
                        if (!pwMatches)
                            throw new common_1.ForbiddenException('Credentials incorrect');
                        return [2 /*return*/, this.signToken(dto.username)];
                }
            });
        });
    };
    AuthService.prototype.signToken = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, secret, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        payload = {
                            username: username
                        };
                        secret = 'secret101';
                        return [4 /*yield*/, this.jwt.signAsync(payload, {
                                expiresIn: '15m',
                                secret: secret
                            })];
                    case 1:
                        token = _a.sent();
                        return [2 /*return*/, {
                                access_token: token
                            }];
                }
            });
        });
    };
    AuthService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, mongoose_1.InjectModel)('User'))
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
