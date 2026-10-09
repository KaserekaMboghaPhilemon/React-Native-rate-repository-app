import { render, screen } from "@testing-library/react-native";
import { describe, expect, it } from "@jest/globals";
import RepositoryListContainer from "../../components/RepositoryListContainer";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", async () => {
      const repositories = [
        {
          id: "jaredpalmer/formik",
          fullName: "jaredpalmer/formik",
          description: "Build forms in React, without the tears",
          language: "TypeScript",
          forksCount: 1600,
          stargazersCount: 23000,
          ratingAverage: 88,
          reviewCount: 10,
          ownerAvatarUrl: "https://example.com/formik.png",
        },
        {
          id: "async-library/react-async",
          fullName: "async-library/react-async",
          description:
            "React hook for declarative promise resolution and data fetching",
          language: "JavaScript",
          forksCount: 1200,
          stargazersCount: 1500,
          ratingAverage: 78,
          reviewCount: 5,
          ownerAvatarUrl: "https://example.com/react-async.png",
        },
      ];

      await render(<RepositoryListContainer repositories={repositories} />);

      const repositoryItems = screen.getAllByTestId("repositoryItem");

      expect(repositoryItems).toHaveLength(2);

      expect(repositoryItems[0]).toHaveTextContent("jaredpalmer/formik", {
        exact: false,
      });
      expect(repositoryItems[0]).toHaveTextContent(
        "Build forms in React, without the tears",
        { exact: false }
      );
      expect(repositoryItems[0]).toHaveTextContent("TypeScript", {
        exact: false,
      });
      expect(repositoryItems[0]).toHaveTextContent("1.6k", { exact: false });
      expect(repositoryItems[0]).toHaveTextContent("23.0k", { exact: false });
      expect(repositoryItems[0]).toHaveTextContent("88", { exact: false });
      expect(repositoryItems[0]).toHaveTextContent("10", { exact: false });

      expect(
        repositoryItems[1]
      ).toHaveTextContent("async-library/react-async", { exact: false });
      expect(repositoryItems[1]).toHaveTextContent(
        "React hook for declarative promise resolution and data fetching",
        { exact: false }
      );
      expect(repositoryItems[1]).toHaveTextContent("JavaScript", {
        exact: false,
      });
      expect(repositoryItems[1]).toHaveTextContent("1.2k", { exact: false });
      expect(repositoryItems[1]).toHaveTextContent("1.5k", { exact: false });
      expect(repositoryItems[1]).toHaveTextContent("78", { exact: false });
      expect(repositoryItems[1]).toHaveTextContent("5", { exact: false });
    });
  });
});
