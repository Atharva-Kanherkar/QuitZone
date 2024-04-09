"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_js_1 = __importDefault(require("./db.js"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const goalRoutes_1 = __importDefault(require("./routes/goalRoutes"));
const app = (0, express_1.default)();
// Connect to MongoDB
(0, db_js_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Use the routes
app.use('/api', goalRoutes_1.default);
// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
