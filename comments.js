// Create web server 
const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const { check, validationResult } = require('express-validator');

// Get all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get specific comment
router.get('/:commentId', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        res.json(comment);
    } catch (err) {
        res.json({ message: err });
    }
});

// Add new comment
router.post('/', [
    check('comment', 'Comment is required').not().isEmpty(),
    check('author', 'Author is required').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Validation failed', errors: errors.array() });
    }
    const comment = new Comment({
        comment: req.body.comment,});}
        