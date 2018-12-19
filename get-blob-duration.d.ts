export interface GetBlobDurationInterface {
  (blob: Blob): Promise<number>
}

declare const getBlobDuration: GetBlobDurationInterface

export default getBlobDuration
