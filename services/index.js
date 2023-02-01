import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const requestHeaders = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
};

export const getQuizzes = async (limit, offset) => {
  const query = gql`
    query GetQuizzes($limit: Int!, $offset: Int!) {
      quizzesConnection(first: $limit, skip: $offset) {
        edges {
          node {
            slug
            time
            title
            image {
              url
            }
            description
            id
            category {
              title
              slug
            }
            questions {
              id
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  `;

  const result = await request(
    graphqlAPI,
    query,
    { limit, offset },
    requestHeaders
  );

  return result.quizzesConnection;
};

export const getQuiz = async (slug) => {
  const query = gql`
    query GetQuiz($slug: String!) {
      quizzesConnection(where: { slug: $slug }) {
        edges {
          node {
            slug
            time
            title
            description
            image {
              url
            }
            id
            questions {
              id
              answerOptions {
                ... on Answer {
                  id
                  isCorrect
                  answerText
                }
              }
              questionText
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug }, requestHeaders);

  return result.quizzesConnection;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categoriesConnection {
        edges {
          node {
            description
            slug
            title
            id
            image {
              url
            }
            icon {
              url
            }
            quizzes {
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, {}, requestHeaders);

  return result.categoriesConnection;
};

export const getCategory = async (slug) => {
  const query = gql`
    query GetCategory($slug: String!) {
      categoriesConnection(where: { slug: $slug }) {
        edges {
          node {
            description
            slug
            title
            image {
              url
            }
            icon {
              url
            }
            quizzes {
              id
              time
              title
              description
              slug
              image {
                url
              }
              questions {
                id
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug }, requestHeaders);

  return result.categoriesConnection;
};

export const getRecentQuizzes = async () => {
  const query = gql`
    query GetRecentQuizzes {
      quizzes(orderBy: publishedAt_DESC, first: 3) {
        slug
        title
        description
        time
        id
        category {
          title
        }
        questions {
          id
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, {}, requestHeaders);
  return result.quizzes;
};

export const getTotalQuizNumber = async () => {
  const query = gql`
    query GetTotalQuizNumber {
      quizzesConnection {
        aggregate {
          count
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, {}, requestHeaders);

  return result.quizzesConnection;
};

export const getCategoryFormId = async (id) => {
  const query = gql`
    query GetCategory($id: ID!) {
      categories(where: { id: $id }) {
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { id }, requestHeaders);

  return result.categories[0].slug;
};
