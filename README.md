# get-blob-duration
Convenience method to patch Chromium bug when getting duration of HTML5 video or audio Blob.

# Installation 

`npm install --save get-blob-duration`   

or

`yarn add get-blob-duration`

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
import getBlobDuration from 'get-blob-duration'

(async function() {
  const duration = await getBlobDuration(blob)
  console.log(duration + ' seconds')
})()
```

Or pass an object URL string if you already have one:

```javascript
import getBlobDuration from 'get-blob-duration'

(async function() {
  const blobUrl = 'blob:https://mdn.mozillademos.org/012345678-9abc-def0-1234-56789abcdef0'
  const duration = await getBlobDuration(blobUrl)
  console.log(duration + ' seconds')
})()
```

## Changelog

### 1.2.0

- **Security:** Update deps
- **Bug:** Fix #8 (thx @fheyen for bug report)
- **Task:** Pin deps
- **Improvement:** Introduce Github Actions
- **Improvement:** Promise rejects if video el throws an error (thx @Stopa for code)

### 1.1.2

- Bump lodash from 4.17.15 to 4.17.19 [pull #6](https://github.com/evictor/get-blob-duration/pull/6/files)
- Audit fix + npm up

### 1.1.1

- Update deps

### 1.1.0

- Allow usage with blob URL - [kandros](https://github.com/kandros)
- Typescript typings - [kandros](https://github.com/kandros)
- Fix npm audits + various package upgrades

### 1.0.1

- Typescript defs (thanks [kandros](https://github.com/kandros))
- Fix audits + gulp update to ^4.0.0

### 1.0.0

Initial release