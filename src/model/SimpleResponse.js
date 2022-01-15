/*
 * What API
 * This is what-api
 *
 * OpenAPI spec version: 1.2.1
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.22
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WhatApi) {
      root.WhatApi = {};
    }
    root.WhatApi.SimpleResponse = factory(root.WhatApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SimpleResponse model module.
   * @module model/SimpleResponse
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>SimpleResponse</code>.
   * @alias module:model/SimpleResponse
   * @class
   * @param message {String} 
   */
  var exports = function(message) {
    this.message = message;
  };

  /**
   * Constructs a <code>SimpleResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SimpleResponse} obj Optional instance to populate.
   * @return {module:model/SimpleResponse} The populated <code>SimpleResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], Object);
    }
    return obj;
  }

  /**
   * @member {String} message
   */
  exports.prototype.message = undefined;

  /**
   * @member {Object} data
   */
  exports.prototype.data = undefined;


  return exports;

}));