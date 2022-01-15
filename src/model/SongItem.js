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
    root.WhatApi.SongItem = factory(root.WhatApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SongItem model module.
   * @module model/SongItem
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>SongItem</code>.
   * @alias module:model/SongItem
   * @class
   * @param title {String} 
   * @param url {String} 
   * @param dateAdded {String} 
   * @param tags {Array.<String>} 
   */
  var exports = function(title, url, dateAdded, tags) {
    this.title = title;
    this.url = url;
    this.dateAdded = dateAdded;
    this.tags = tags;
  };

  /**
   * Constructs a <code>SongItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SongItem} obj Optional instance to populate.
   * @return {module:model/SongItem} The populated <code>SongItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('_id'))
        obj.id = ApiClient.convertToType(data['_id'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('dateAdded'))
        obj.dateAdded = ApiClient.convertToType(data['dateAdded'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], ['String']);
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * @member {String} dateAdded
   */
  exports.prototype.dateAdded = undefined;

  /**
   * @member {Array.<String>} tags
   */
  exports.prototype.tags = undefined;


  return exports;

}));