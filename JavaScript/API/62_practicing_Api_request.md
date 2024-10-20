# status code for server
```python
status: 
200 - ok
201 - created
202 - accepted
203 - non authoritative information
204 - no content
205 - reset content
206 - partial content
207 - multi status (webdav)
208 Already Reported (WebDAV)
226 IM Used
```

# 300 level section:
##preflite

```python

300 Multiple Choices
301 Moved Permanently
302 Found
303 See Other
304 Not Modified
305 Use Proxy (Deprecated)
306 (Unused)
307 Temporary Redirect
308 Permanent Redirect (experimental)
```
# 400 level section:
```python
400 Bad Request
401 Unauthorized
402 Payment Required (Experimental)
403 Forbidden
404 Not Found
405 Method Not Allowed
406 Not Acceptable
```

# 500 level section:
```python
500 Internal Server Error
501 Not Implemented
502 Bad Gateway
503 Service Unavailable
504 Gateway Timeout
505 HTTP Version Not Supported (Experimental)
506 Variant Also Negotiates (Experimental)
507 Insufficient Storage (WebDAV)
508 Loop Detected (WebDAV)
510 Not Extended
511 Network Authentication Required
```