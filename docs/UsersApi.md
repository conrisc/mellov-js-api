# MellovApi.UsersApi

All URIs are relative to *https://mellov-server.herokuapp.com/api*

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

Create new note

### Example
```javascript
import {MellovApi} from 'mellov_api';
let defaultClient = MellovApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
let AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

let apiInstance = new MellovApi.UsersApi();

let opts = { 
  'noteItem': new MellovApi.NoteItem() // NoteItem | Note item to add
};
apiInstance.addNote(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

Add new song

### Example
```javascript
import {MellovApi} from 'mellov_api';
let defaultClient = MellovApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
let AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

let apiInstance = new MellovApi.UsersApi();

let opts = { 
  'songItem': new MellovApi.SongItem() // SongItem | Song item to add
};
apiInstance.addSong(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

Add new tag

### Example
```javascript
import {MellovApi} from 'mellov_api';
let defaultClient = MellovApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
let AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

let apiInstance = new MellovApi.UsersApi();

let opts = { 
  'tagItem': new MellovApi.TagItem() // TagItem | Tag item to add
};
apiInstance.addTag(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

Find yt items

### Example
```javascript
import {MellovApi} from 'mellov_api';
let defaultClient = MellovApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
let AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

let apiInstance = new MellovApi.UsersApi();

let title = "title_example"; // String | title to search

let opts = { 
  'limit': 5 // Number | maximum number of records to return
};
apiInstance.getYtItems(title, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

Remove a note

### Example
```javascript
import {MellovApi} from 'mellov_api';
let defaultClient = MellovApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
let AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

let apiInstance = new MellovApi.UsersApi();

let id = "id_example"; // String | note id

apiInstance.removeNote(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

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

Remove a song

### Example
```javascript
import {MellovApi} from 'mellov_api';
let defaultClient = MellovApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
let AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

let apiInstance = new MellovApi.UsersApi();

let id = "id_example"; // String | song id

apiInstance.removeSong(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

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

Remove a tag

### Example
```javascript
import {MellovApi} from 'mellov_api';
let defaultClient = MellovApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
let AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

let apiInstance = new MellovApi.UsersApi();

let id = "id_example"; // String | tag id

apiInstance.removeTag(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

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

Find note(s)

### Example
```javascript
import {MellovApi} from 'mellov_api';
let defaultClient = MellovApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
let AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

let apiInstance = new MellovApi.UsersApi();

let opts = { 
  'id': "id_example", // String | note id
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};
apiInstance.searchNote(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

Find song(s)

### Example
```javascript
import {MellovApi} from 'mellov_api';
let defaultClient = MellovApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
let AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

let apiInstance = new MellovApi.UsersApi();

let opts = { 
  'id': "id_example", // String | song id
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56, // Number | maximum number of records to return
  'title': "title_example", // String | a phrase song's title must contain
  'tags': ["tags_example"], // [String] | tags which song must contain
  'sort': "sort_example" // String | type of sort to use
};
apiInstance.searchSong(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

Find tag(s)

### Example
```javascript
import {MellovApi} from 'mellov_api';
let defaultClient = MellovApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
let AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

let apiInstance = new MellovApi.UsersApi();

let opts = { 
  'id': "id_example", // String | tag id
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};
apiInstance.searchTag(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

Update a note

### Example
```javascript
import {MellovApi} from 'mellov_api';
let defaultClient = MellovApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
let AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

let apiInstance = new MellovApi.UsersApi();

let opts = { 
  'noteItem': new MellovApi.NoteItem() // NoteItem | Note item to update
};
apiInstance.updateNote(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

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

Update a song

### Example
```javascript
import {MellovApi} from 'mellov_api';
let defaultClient = MellovApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
let AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

let apiInstance = new MellovApi.UsersApi();

let opts = { 
  'songItem': new MellovApi.SongItem() // SongItem | Note item to update
};
apiInstance.updateSong(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

Update a tag

### Example
```javascript
import {MellovApi} from 'mellov_api';
let defaultClient = MellovApi.ApiClient.instance;

// Configure API key authorization: AuthorizationHeader
let AuthorizationHeader = defaultClient.authentications['AuthorizationHeader'];
AuthorizationHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeader.apiKeyPrefix = 'Token';

let apiInstance = new MellovApi.UsersApi();

let opts = { 
  'tagItem': new MellovApi.TagItem() // TagItem | Note item to update
};
apiInstance.updateTag(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

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

