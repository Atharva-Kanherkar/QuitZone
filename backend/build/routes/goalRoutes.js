"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Goal_1 = __importDefault(require("../models/Goal"));
const router = express_1.default.Router();
router.post('/createGoal', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, target, currentValue, startDate, endDate } = req.body;
    try {
        const goal = new Goal_1.default({
            name,
            target,
            currentValue,
            startDate,
            endDate
        });
        const savedGoal = yield Goal_1.default.create(goal);
        res.json(savedGoal);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
exports.default = router;
