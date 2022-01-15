# WhatApi.DevelopersApi

All URIs are relative to *https://virtserver.swaggerhub.com/conrisc2/WhatApi/1.2.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**signInUser**](DevelopersApi.md#signInUser) | **POST** /user/login | login user
[**signUpUser**](DevelopersApi.md#signUpUser) | **POST** /user/register | register new user


<a name="signInUser"></a>
# **signInUser**
> SimpleResponse signInUser(opts)

login user

signs in user

### Example
```javascript
var WhatApi = require('what_api');

var apiInstance = new WhatApi.DevelopersApi();

var opts = { 
  'userCredentials': new WhatApi.UserPost() // UserPost | User's credentials
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.signInUser(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCredentials** | [**UserPost**](UserPost.md)| User's credentials | [optional] 

### Return type

[**SimpleResponse**](SimpleResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="signUpUser"></a>
# **signUpUser**
> SimpleResponse signUpUser(opts)

register new user

signs up new user

### Example
```javascript
var WhatApi = require('what_api');

var apiInstance = new WhatApi.DevelopersApi();

var opts = { 
  'userCredentials': new WhatApi.UserPost() // UserPost | User's credentials
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.signUpUser(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCredentials** | [**UserPost**](UserPost.md)| User's credentials | [optional] 

### Return type

[**SimpleResponse**](SimpleResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

