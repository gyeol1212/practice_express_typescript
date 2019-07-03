"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var onMongoose = function () {
    mongoose_1.default.connect('mongodb://127.0.0.1:27017/task-manager-api', {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true
    });
};
exports.default = onMongoose;
