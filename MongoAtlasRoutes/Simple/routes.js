const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://ambrosaxoxo:<password>@cluster0-cfxls.mongodb.net/test?retryWrites=true", {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => {
	console.log('connected to db');
}).catch(err => {
	console.log('error', err.message);
});

const PostSchema = new mongoose.Schema({
	title: String,
	description: String,
});
const Post = mongoose.model("Post", PostSchema);
app.get('/', async (req, res) => {
	let post = await Post.create({title: 'this aint no test', description: 'also a test'});
	res.send(post);
});





app.listen(3000, () => {
	console.log('server on');
});