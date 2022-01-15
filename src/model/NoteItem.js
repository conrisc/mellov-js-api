/*
 * Mellov API
 * Mellov API
 *
 * OpenAPI spec version: 1.2.3
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
    if (!root.MellovApi) {
      root.MellovApi = {};
    }
    root.MellovApi.NoteItem = factory(root.MellovApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NoteItem model module.
   * @module model/NoteItem
   * @version 1.2.3
   */

  /**
   * Constructs a new <code>NoteItem</code>.
   * @alias module:model/NoteItem
   * @class
   * @param creationDate {String} 
   * @param text {String} 
   */
  var exports = function(creationDate, text) {
    this.creationDate = creationDate;
    this.text = text;
  };

  /**
   * Constructs a <code>NoteItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NoteItem} obj Optional instance to populate.
   * @return {module:model/NoteItem} The populated <code>NoteItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('_id'))
        obj.id = ApiClient.convertToType(data['_id'], 'String');
      if (data.hasOwnProperty('creationDate'))
        obj.creationDate = ApiClient.convertToType(data['creationDate'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} creationDate
   */
  exports.prototype.creationDate = undefined;

  /**
   * @member {String} text
   */
  exports.prototype.text = undefined;


  return exports;

}));
