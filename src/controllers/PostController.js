// Provide CRUD functionality for the PostModel

const { PostModel } = require("../models/PostModel");

async function createPost(title, content) {
    let result = await PostModel.create({
        title: title,
        content: content
        // date: Date.now() - Has a default value
    });

    return result;
}

async function getPost(req, res) {
    
}

async function getPosts(req, res) {
    
}

async function updatePost(req, res) {
    
}

async function updatePosts(req, res) {
    
}

async function deletePost(req, res) {
    
}

async function deletePosts(req, res) {
    
}

module.exports = {
    createPost,
    getPost,
    getPosts,
    updatePost,
    updatePosts,
    deletePost,
    deletePosts
}