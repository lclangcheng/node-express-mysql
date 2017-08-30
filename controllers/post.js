const db = require('../config/db');

exports.index = (req, res) => {
	const sqlQuery = `SELECT * FROM posts`;

	db.query(sqlQuery, (error, result) => {
		if (error) console.log('OH SHIT: ', error);

		return res.json(result);
	});
};

exports.findOne = (req, res) => {
	const id = req.params.id;
	const sqlQuery = `SELECT * FROM posts WHERE id = ${id}`;

	db.query(sqlQuery, (error, result) => {
		if (error) console.log('OH SHIT: ', error);

		return res.json(result);
	});
};

exports.add = (req, res) => {
	const post = {
		title: req.body.title,
		ingress: req.body.ingress,
		body: req.body.body,
		excerpt: req.body.excerpt,
		created: req.body.created  || new Date()
	};
	
	const sqlQuery = `INSERT INTO posts SET ?`;
	db.query(sqlQuery, post, (error) => {
		if (error) console.log('eRRORRR when adding post');

		return res.json({
			message: 'Added post'
		});
	});
};

exports.update = (req, res) => {
	const id = req.params.id;
	const sqlQuery = `UPDATE posts SET ? WHERE id = ${id}`;

	const keys = Object.keys(req.body);
	const updatedKeys = keys.map(item => {
		return {
			[item]: req.body[item]
		}
	});

	db.query(sqlQuery, updatedKeys, (error, result) => {
		if (error) console.log('eRRORRR in updating post', error);

		return res.json({
			message: 'Updated post',
			updatedPostId: id,
		});
	});
};

exports.destroy = (req, res) => {
	const id = req.params.id;
	const sqlQuery = `DELETE FROM posts WHERE id = ${id}`

	db.query(sqlQuery, (error, result) => {
		return res.json({
			message: 'Post deleted',
			deletedPostId: id
		});
	});
};