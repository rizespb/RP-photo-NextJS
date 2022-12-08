export const enum ERequestStatus {
  Success = 'success',
  Error = 'error',
}

export interface ISendReviewResponse {
  status: ERequestStatus
}
