/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @class
 * Represents images, movies, and audio.
 * Create a <code>MediaItem</code> object using the
 * <a href="opensocial.html#newMediaItem">
 * opensocial.newMediaItem()</a> method.
 *
 * @name opensocial.MediaItem
 */

/**
 * Represents images, movies, and audio.
 *
 * @param {String} mimeType The media's type
 * @param {String} url The media's location
 * @param {Map.<opensocial.MediaItem.Field, Object>} opt_params
 *    Any other fields that should be set on the media item object.
 *    All of the defined Fields are supported.
 * @constructor
 * @private
 */
opensocial.MediaItem = function() {};


/**
 * @static
 * @class
 * The possible types of media items.
 *
 * <p>
 * <b>See also:</b>
 * <a href="opensocial.MediaItem.Field.html">
 * opensocial.MediaItem.Field</a>
 * </p>
 *
 * @name opensocial.MediaItem.Type = {
 */
opensocial.MediaItem.Type = {
  /** 
   * This field may be used interchangeably with the string 'image'.
   * @member opensocial.MediaItem.Type 
   */
  IMAGE : 'image',
  /** 
   * This field may be used interchangeably with the string 'video'.
   * @member opensocial.MediaItem.Type 
   */
  VIDEO : 'video',
  /** 
   * This field may be used interchangeably with the string 'audio'.
   * @member opensocial.MediaItem.Type 
   */
  AUDIO : 'audio'
}


/**
 * @static
 * @class
 * All of the fields that media items have.
 *
 * <p>
 * <b>See also:</b>
 * <a href="opensocial.MediaItem.html#getField">
 * opensocial.MediaItem.getField()</a>
 * </p>
 *
 * @name opensocial.MediaItem.Field
 */
opensocial.MediaItem.Field = {
  /**
   * The type of media, specified as a
   * <a href="opensocial.MediaItem.Type.html">
   * <code>MediaItem.Type</code></a> object.
   * This field may be used interchangeably with the string 'type'.
   * @member opensocial.MediaItem.Field
   */
  TYPE : 'type',

  /**
   * The MIME type of media, specified as a string.
   * This field may be used interchangeably with the string 'mimeType'.
   * @member opensocial.MediaItem.Field
   */
  MIME_TYPE : 'mimeType',

  /**
   * A string specifying the URL where the media can be found.
   * This field may be used interchangeably with the string 'url'.
   * @member opensocial.MediaItem.Field
   */
  URL : 'url'
};


/**
 * Gets the media item data that's associated with the specified key.
 *
 * @param {String} key The key to get data for; see the
 *   <a href="opensocial.MediaItem.Field.html">Field</a> class
 *   for possible values
 * @param {Map.&lt;opensocial.DataRequest.DataRequestFields, Object&gt;}
 *  opt_params Additional
 *    <a href="opensocial.DataRequest.DataRequestFields.html">params</a>
 *    to pass to the request. 
 * @return {String} The data
 */
opensocial.MediaItem.prototype.getField = function(key, opt_params) {};


/**
 * Sets data for this media item associated with the given key.
 *
 * @param {String} key The key to set data for
 * @param {String} data The data to set
 */
opensocial.MediaItem.prototype.setField = function(key, data) {};
