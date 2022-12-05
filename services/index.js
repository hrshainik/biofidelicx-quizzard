import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const requestHeaders = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
};

export const getQuizzes = async () => {
  const query = gql`
    query GetQuizzes() {
      quizzesConnection {
        edges {
          node {
            slug
            time
            title
            description
            id
            category {
              title
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, {}, requestHeaders);

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
    query GetCategories() {
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
    query GetCategories($slug: String!) {
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
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug }, requestHeaders);

  return result.categoriesConnection;
};
