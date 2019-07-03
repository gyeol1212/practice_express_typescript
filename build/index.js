"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("./db/mongoose"));
var post_1 = __importDefault(require("./routers/post"));
mongoose_1.default();
var app = express_1.default();
var port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(post_1.default);
app.listen(port, function () {
    console.log("Server is up on port " + port);
});
