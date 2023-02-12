import {
  QueryFunction,
  QueryKey,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";

const useQueryHandler = <TData, TError>(
  key: QueryKey,
  fetcherFn: QueryFunction<TData, QueryKey>,
  options?: UseQueryOptions<TData, TError>
) => {
  const {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
    isFetched,
    isFetching,
    refetch,
  } = useQuery<TData, TError>({
    queryKey: key,
    queryFn: fetcherFn,
    retry: (failureCount: number, error: TError) => {
      if (failureCount > 3) {
        return false;
      }
      if (error) {
        return true;
      }
      return false;
    },
    refetchOnWindowFocus: false,
    ...options,
  });

  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
    isFetched,
    isFetching,
    refetch,
  };
};

export default useQueryHandler;
