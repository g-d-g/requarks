var express = require('express');
var router = express.Router();

/*
 * CREATE - Select category
 */
router.get('/', function(req, res, next) {

	db.Category.findAll({
		order: 'name'
	}).then(function(cats) {
		res.render('create/create', {
			navbar_active: 'create',
			page_script: 'create',
			categories: cats
		});
	});

});

/*
 * CREATE - Form
 */
router.get('/:id', function(req, res, next) {

	// Get category

	db.Category.findOne({
		where: { slug: req.params.id }
	}).then((cat) => {

		if(cat) {
			return { category: cat };
		} else {
			return Promise.reject(new Error('Invalid category'));
		}

	}).then((reqdata) => {

		// Get subcategories

		return db.SubCategory.findAll({
			where: { CategoryId: reqdata.category.id },
			order: 'sortIndex'
		}).then(function(subcats) {
			
			if(subcats) {
				reqdata.subcategories = subcats;
				return reqdata;
			} else {
				return Promise.reject(new Error('Missing subcategory for this category. At least one required.'));
			}

		});

	}).then((reqdata) => {

		res.render('create/create-form', {
			navbar_active: 'create',
			page_script: 'create',
			reqdata
		});

	}).catch(next);

});

module.exports = router;
