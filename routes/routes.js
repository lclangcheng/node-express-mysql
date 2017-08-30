const express = require('express');
const { index, findOne, add, update, destroy } = require('../controllers/post');

const router = express.Router();

router.get('/', (req, res) => {
	res.json({
		status: res.statusCode,
		message: 'Welcome to tha API!!!!'
	})
});

router.get('/posts', index);
router.get('/posts/:id', findOne);
router.post('/posts/add', add);
router.put('/posts/update/:id', update);
router.delete('/posts/delete/:id', destroy);

module.exports = router;