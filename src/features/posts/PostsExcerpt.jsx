/* eslint-disable react/prop-types */
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TImeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

export const PostsExcerpt = ({ post }) => {
  return (
    <>
      <article key={post.id} className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{post.title}</h3>
        <p className="text-lg text-gray-700 font-semibold text-justify">
          {post.body.substring(0, 75)}...
        </p>

        <p className="text-sm">
          <Link className="block font-bold text-lg" to={`post/${post.id}`}>
            View Post
          </Link>
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post} />
      </article>
    </>
  );
};
