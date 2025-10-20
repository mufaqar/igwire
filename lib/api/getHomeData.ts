// lib/api/getHomeData.ts
import client from "@/lib/apollo-client";
import { GET_POSTS } from "../queries/getPosts";
import { GetPostsQuery, Post } from "../gql-types";


export async function getBlogData(): Promise<Post[]> {
  try {
    const { data } = await client.query<GetPostsQuery>({
      query: GET_POSTS,
      variables: { first: 3 }, // optional
    });

    // Ensure only valid posts are returned
    return (data?.posts?.nodes ?? []).filter((p): p is Post => !!p);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}
