import { useQuery } from '@tanstack/vue-query'
import { apiClient } from '@/api/client'

interface ExampleData {
  message: string
}

export function useExampleQuery() {
  return useQuery<ExampleData>({
    queryKey: ['example'],
    queryFn: async () => {
      const { data } = await apiClient.get<ExampleData>('/example')
      return data
    },
  })
}


