import getBlobDuration from '../src/getBlobDuration'

let dummyVideoEl, mockBlob
const dummyErrorEventObject = {
  target: {
    error: 'Dummy error message'
  }
}

beforeEach(() => {
  dummyVideoEl = jest.fn()

  dummyVideoEl.addEventListener = jest.fn((eventName, handler) => {
    expect(eventName).toBe('loadedmetadata')
    handler()
  })

  document.createElement = jest.fn(elType => {
    expect(elType).toBe('video')
    return dummyVideoEl
  })

  window.URL.createObjectURL = jest.fn()

  mockBlob = jest.fn()
})

it('should handle ordinary duration retrieval', async () => {
  dummyVideoEl.duration = 23741

  const duration = await getBlobDuration(mockBlob)
  expect(duration).toBe(23741)

  expect(window.URL.createObjectURL).toHaveBeenCalledWith(mockBlob)
})

it('should handle ordinary duration retrieval', async () => {
  dummyVideoEl.duration = 12345

  const duration = await getBlobDuration('fake-blob-url')
  expect(duration).toBe(12345)

  expect(window.URL.createObjectURL).not.toHaveBeenCalled()
  expect(dummyVideoEl.src).toBe('fake-blob-url')
})

it('should execute Chrome bugfix duration retrieval as needed', async () => {
  dummyVideoEl.duration = Infinity

  // noinspection ES6MissingAwait
  const durationP = getBlobDuration(mockBlob)
  await new Promise(async resolve => {
    dummyVideoEl.duration = 98543
    dummyVideoEl.ontimeupdate()
    const duration = await durationP
    expect(duration).toBe(98543)
    resolve()
  })
})

it('should reject with the error object if an error occurs', async () => {
  dummyVideoEl.duration = Infinity

  // noinspection ES6MissingAwait
  const durationP = getBlobDuration(mockBlob)
  dummyVideoEl.onerror(dummyErrorEventObject)
  await expect(durationP).rejects.toMatch(dummyErrorEventObject.target.error)
})
