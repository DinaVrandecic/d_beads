export async function fetchGraphQL(
    query: string,
    space_id: string | undefined,
    access_token: string | undefined
  ) {
    return fetch(`https://graphql.contentful.com/content/v1/spaces/${space_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({ query }),
    });
  }