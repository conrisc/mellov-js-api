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
    root.WhatApi.UserPost = factory(root.WhatApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UserPost model module.
   * @module model/UserPost
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>UserPost</code>.
   * @alias module:model/UserPost
   * @class
   * @param email {String} 
   * @param password {String} 
   */
  var exports = function(email, password) {
    this.email = email;
    this.password = password;
  };

  /**
   * Constructs a <code>UserPost</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserPost} obj Optional instance to populate.
   * @return {module:model/UserPost} The populated <code>UserPost</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {String} password
   */
  exports.prototype.password = undefined;


  return exports;

}));
