import { apiClient } from '@/api/client'

export interface ExtractResponse {
  success: boolean
  message?: string
  filename?: string
  data: any
}

export async function uploadExtractDocument(file: File): Promise<ExtractResponse> {
  const formData = new FormData()
  formData.append('file', file)

  // URL API eksternal (bukan proxy /api)
  const apiUrl = 'https://ekstrak-gold.vercel.app/extract'

  const headers: Record<string, string> = {}

  const { data } = await apiClient.post<ExtractResponse>(apiUrl, formData, {
    headers,
  })

  if (!data.success) {
    throw new Error(data.message || 'Gagal mengextract dokumen')
  }

  return data
}