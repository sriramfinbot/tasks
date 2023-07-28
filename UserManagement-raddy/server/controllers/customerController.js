const Customer = require('../models/customer');
const mongoose = require('mongoose');


/**
 * 
 * GET /
 * Homepage
 */

exports.homepage = async (req, res) => {

    const messages = await req.consumeFlash('info');

    const locals = {
        title: 'NodeJs',
        description: 'Free Nodejs UMS'
    }

    res.render('index', { locals, messages });

}

/**
 * 
 * GET /
 * New Customer Form
 */

exports.addCustomer = async (req, res) => {

    const locals = {
        title: 'Add New Customer - NodeJs',
        description: 'Free Nodejs UMS'
    }

    res.render('customer/add', locals);

}




/**
 * 
 * POST /
 * Create New Customer
 */

exports.postCustomer = async (req, res) => {

    console.log(req.body);

    const newCustomer = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        details: req.body.details,
        tel: req.body.tel,
        email: req.body.email,
    })

    try {
        await Customer.create(newCustomer);

        await req.flash('info', 'New customer has been added.');
        res.redirect('/');
    } catch (error) {
        console.log(error)
    }



}