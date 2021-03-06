/*
 * Mellov API
 * Mellov API
 *
 * OpenAPI spec version: 1.2.3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.22
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The NoteItem model module.
 * @module model/NoteItem
 * @version 1.2.3
 */
export class NoteItem {
  /**
   * Constructs a new <code>NoteItem</code>.
   * @alias module:model/NoteItem
   * @class
   * @param creationDate {String} 
   * @param text {String} 
   */
  constructor(creationDate, text) {
    this.creationDate = creationDate;
    this.text = text;
  }

  /**
   * Constructs a <code>NoteItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NoteItem} obj Optional instance to populate.
   * @return {module:model/NoteItem} The populated <code>NoteItem</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new NoteItem();
      if (data.hasOwnProperty('_id'))
        obj.id = ApiClient.convertToType(data['_id'], 'String');
      if (data.hasOwnProperty('creationDate'))
        obj.creationDate = ApiClient.convertToType(data['creationDate'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
NoteItem.prototype.id = undefined;

/**
 * @member {String} creationDate
 */
NoteItem.prototype.creationDate = undefined;

/**
 * @member {String} text
 */
NoteItem.prototype.text = undefined;


