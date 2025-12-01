import { useMutation } from '@tanstack/vue-query'
import type { ExtractResponse } from '@/api/uploadApi'
import { uploadExtractDocument } from '@/api/uploadApi'

export function useUploadExtractMutation(
  onSuccess?: (data: ExtractResponse) => void,
  onError?: (error: Error) => void,
) {
  return useMutation<ExtractResponse, Error, File>({
    mutationFn: uploadExtractDocument,
    onSuccess,
    onError,
  })
}