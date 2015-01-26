'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash'),
    googleTranslate = require('google-translate')('AIzaSyAreXCkSvg3qFEOZuu_B3DzGIzoWUvfvEY');


/**
 * Create a Translator
 */
exports.create = function(req, res) {

};

/**
 * Show the current Translator
 */
exports.read = function(req, res) {

};

/**
 * Update a Translator
 */
exports.update = function(req, res) {

};

/**
 * Delete an Translator
 */
exports.delete = function(req, res) {

};

/**
 * List of Translators
 */
exports.list = function(req, res) {

};

/**
 * Translate
 */

exports.translate = function(req, res) {
    //console.log(req.body.leftText);
    googleTranslate.translate(req.body.text, 'es', function(er, translation) {
        //res.json(translation);
        res.jsonp(translation);
        //console.log('RES: ', res);
        console.log('translation: ', translation);
    });
};