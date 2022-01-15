# WhatApi.UsersApi

All URIs are relative to *https://virtserver.swaggerhub.com/conrisc2/WhatApi/1.2.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNote**](UsersApi.md#addNote) | **POST** /note | adds a note item
[**addSong**](UsersApi.md#addSong) | **POST** /song | adds a song item
[**addTag**](UsersApi.md#addTag) | **POST** /tag | adds a tag item
[**getYtItems**](UsersApi.md#getYtItems) | **GET** /ytitems | Get data
[**removeNote**](UsersApi.md#removeNote) | **DELETE** /note | removes a note item
[**removeSong**](UsersApi.md#removeSong) | **DELETE** /song | removes a song item
[**removeTag**](UsersApi.md#removeTag) | **DELETE** /tag | removes a song item
[**searchNote**](UsersApi.md#searchNote) | **GET** /note | searches note
[**searchSong**](UsersApi.md#searchSong) | **GET** /song | Search song
[**searchTag**](UsersApi.md#searchTag) | **GET** /tag | Search tag
[**updateNote**](UsersApi.md#updateNote) | **PUT** /note | updates a note item
[**updateSong**](UsersApi.md#updateSong) | **PUT** /song | updates a song item
[**updateTag**](UsersApi.md#updateTag) | **PUT** /tag | updates a tag item


<a name="addNote"></a>
# **addNote**
> 'String' addNote(opts)

adds a note item

Adds an item to the database

### Example
```javascript
var WhatApi = require('what_api');
var defaultClient = WhatApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
var AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

var apiInstance = new WhatApi.UsersApi();

var opts = { 
  'noteItem': new WhatApi.NoteItem() // NoteItem | Note item to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addNote(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteItem** | [**NoteItem**](NoteItem.md)| Note item to add | [optional] 

### Return type

**'String'**

### Authorization

[AuthorizationHeader](../README.md#AuthorizationHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

<a name="addSong"></a>
# **addSong**
> 'String' addSong(opts)

adds a song item

Adds an item to the database

### Example
```javascript
var WhatApi = require('what_api');
var defaultClient = WhatApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
var AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

var apiInstance = new WhatApi.UsersApi();

var opts = { 
  'songItem': new WhatApi.SongItem() // SongItem | Song item to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addSong(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **songItem** | [**SongItem**](SongItem.md)| Song item to add | [optional] 

### Return type

**'String'**

### Authorization

[AuthorizationHeader](../README.md#AuthorizationHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

<a name="addTag"></a>
# **addTag**
> 'String' addTag(opts)

adds a tag item

Adds an item to the database

### Example
```javascript
var WhatApi = require('what_api');
var defaultClient = WhatApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
var AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

var apiInstance = new WhatApi.UsersApi();

var opts = { 
  'tagItem': new WhatApi.TagItem() // TagItem | Tag item to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addTag(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagItem** | [**TagItem**](TagItem.md)| Tag item to add | [optional] 

### Return type

**'String'**

### Authorization

[AuthorizationHeader](../README.md#AuthorizationHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

<a name="getYtItems"></a>
# **getYtItems**
> [YtVideoItem] getYtItems(title, opts)

Get data

By passing in url, you can fetch data 

### Example
```javascript
var WhatApi = require('what_api');
var defaultClient = WhatApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
var AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

var apiInstance = new WhatApi.UsersApi();

var title = "title_example"; // String | title to search

var opts = { 
  'limit': 5 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getYtItems(title, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **String**| title to search | 
 **limit** | **Number**| maximum number of records to return | [optional] [default to 5]

### Return type

[**[YtVideoItem]**](YtVideoItem.md)

### Authorization

[AuthorizationHeader](../README.md#AuthorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeNote"></a>
# **removeNote**
> removeNote(id)

removes a note item

Removes an item from the database

### Example
```javascript
var WhatApi = require('what_api');
var defaultClient = WhatApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
var AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

var apiInstance = new WhatApi.UsersApi();

var id = "id_example"; // String | note id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeNote(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| note id | 

### Return type

null (empty response body)

### Authorization

[AuthorizationHeader](../README.md#AuthorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeSong"></a>
# **removeSong**
> removeSong(id)

removes a song item

Removes an item from the database

### Example
```javascript
var WhatApi = require('what_api');
var defaultClient = WhatApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
var AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

var apiInstance = new WhatApi.UsersApi();

var id = "id_example"; // String | song id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeSong(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| song id | 

### Return type

null (empty response body)

### Authorization

[AuthorizationHeader](../README.md#AuthorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeTag"></a>
# **removeTag**
> removeTag(id)

removes a song item

Removes an item from the database

### Example
```javascript
var WhatApi = require('what_api');
var defaultClient = WhatApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
var AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

var apiInstance = new WhatApi.UsersApi();

var id = "id_example"; // String | tag id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeTag(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| tag id | 

### Return type

null (empty response body)

### Authorization

[AuthorizationHeader](../README.md#AuthorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="searchNote"></a>
# **searchNote**
> [NoteItem] searchNote(opts)

searches note

By passing in the appropriate options, you can search for available note in the system 

### Example
```javascript
var WhatApi = require('what_api');
var defaultClient = WhatApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
var AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

var apiInstance = new WhatApi.UsersApi();

var opts = { 
  'id': "id_example", // String | note id
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchNote(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| note id | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[NoteItem]**](NoteItem.md)

### Authorization

[AuthorizationHeader](../README.md#AuthorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchSong"></a>
# **searchSong**
> [SongItem] searchSong(opts)

Search song

By passing in the appropriate options, you can search for available song in the system 

### Example
```javascript
var WhatApi = require('what_api');
var defaultClient = WhatApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
var AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

var apiInstance = new WhatApi.UsersApi();

var opts = { 
  'id': "id_example", // String | song id
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56, // Number | maximum number of records to return
  'title': "title_example", // String | a phrase song's title must contain
  'tags': ["tags_example"], // [String] | tags which song must contain
  'sort': "sort_example" // String | type of sort to use
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchSong(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| song id | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 
 **title** | **String**| a phrase song's title must contain | [optional] 
 **tags** | [**[String]**](String.md)| tags which song must contain | [optional] 
 **sort** | **String**| type of sort to use | [optional] 

### Return type

[**[SongItem]**](SongItem.md)

### Authorization

[AuthorizationHeader](../README.md#AuthorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchTag"></a>
# **searchTag**
> [TagItem] searchTag(opts)

Search tag

By passing in the appropriate options, you can search for available tag in the system 

### Example
```javascript
var WhatApi = require('what_api');
var defaultClient = WhatApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
var AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

var apiInstance = new WhatApi.UsersApi();

var opts = { 
  'id': "id_example", // String | tag id
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchTag(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| tag id | [optional] 
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[TagItem]**](TagItem.md)

### Authorization

[AuthorizationHeader](../README.md#AuthorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateNote"></a>
# **updateNote**
> updateNote(opts)

updates a note item

Updates an item in the database

### Example
```javascript
var WhatApi = require('what_api');
var defaultClient = WhatApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
var AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

var apiInstance = new WhatApi.UsersApi();

var opts = { 
  'noteItem': new WhatApi.NoteItem() // NoteItem | Note item to update
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateNote(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteItem** | [**NoteItem**](NoteItem.md)| Note item to update | [optional] 

### Return type

null (empty response body)

### Authorization

[AuthorizationHeader](../README.md#AuthorizationHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateSong"></a>
# **updateSong**
> SongItem updateSong(opts)

updates a song item

Updates an item in the database

### Example
```javascript
var WhatApi = require('what_api');
var defaultClient = WhatApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
var AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

var apiInstance = new WhatApi.UsersApi();

var opts = { 
  'songItem': new WhatApi.SongItem() // SongItem | Note item to update
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSong(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **songItem** | [**SongItem**](SongItem.md)| Note item to update | [optional] 

### Return type

[**SongItem**](SongItem.md)

### Authorization

[AuthorizationHeader](../README.md#AuthorizationHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateTag"></a>
# **updateTag**
> updateTag(opts)

updates a tag item

Updates an item in the database

### Example
```javascript
var WhatApi = require('what_api');
var defaultClient = WhatApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
var AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

var apiInstance = new WhatApi.UsersApi();

var opts = { 
  'tagItem': new WhatApi.TagItem() // TagItem | Note item to update
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateTag(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagItem** | [**TagItem**](TagItem.md)| Note item to update | [optional] 

### Return type

null (empty response body)

### Authorization

[AuthorizationHeader](../README.md#AuthorizationHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

