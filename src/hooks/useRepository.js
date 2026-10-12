import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const { data, loading, error, fetchMore } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id, first: 4 },
  });

  return {
    repository: data?.repository,
    loading,
    error,
    fetchMore,
  };
};

export default useRepository;
