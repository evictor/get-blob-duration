export interface GetBlobDurationInterface {
  (blob: Blob | string): Promise<number>
}

declare const getBlobDuration: GetBlobDurationInterface

export default getBlobDuration
