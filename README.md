# get-blob-duration
Convenience method to patch Chromium bug when getting duration of HTML5 video or audio Blob.

## Usage

Import the method however you like (browser, module, etc.). Once you have it in scope:

```javascript
// Returns Promise<Number>
getBlobDuration(blob).then(function(duration) {
  console.log(duration + ' seconds');
});
```

Or use ECMAScript 6:

```javascript
// yada yada async
const duration = await getBlobDuration(blob)
console.log(duration + ' seconds')
```