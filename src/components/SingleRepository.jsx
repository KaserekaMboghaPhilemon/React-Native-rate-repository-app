import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, loading, error } = useRepository(id);

  if (loading && !repository) {
    return <Text>Loading repository...</Text>;
  }

  if (error && !repository) {
    return <Text>Unable to load repository: {error.message}</Text>;
  }

  return <RepositoryItem item={repository} showGithubButton />;
};

export default SingleRepository;
