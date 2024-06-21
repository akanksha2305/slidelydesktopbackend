"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs = __importStar(require("fs"));
const router = (0, express_1.Router)();
// Endpoint to check if server is running
router.get('/ping', (req, res) => {
    res.json(true);
});
// Endpoint to submit a form entry
router.post('/submit', (req, res) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    if (!name || !email || !phone || !github_link || !stopwatch_time) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    const newSubmission = { name, email, phone, github_link, stopwatch_time };
    const db = JSON.parse(fs.readFileSync('src/db.json', 'utf8'));
    db.submissions.push(newSubmission);
    fs.writeFileSync('src/db.json', JSON.stringify(db, null, 2));
    res.status(201).json({ message: 'Submission saved successfully.' });
});
// Endpoint to read a form entry by index
router.get('/read', (req, res) => {
    const index = parseInt(req.query.index, 10);
    const db = JSON.parse(fs.readFileSync('src/db.json', 'utf8'));
    if (index >= 0 && index < db.submissions.length) {
        res.json(db.submissions[index]);
    }
    else {
        res.status(404).json({ error: 'Submission not found.' });
    }
});
exports.default = router;
