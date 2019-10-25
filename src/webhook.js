import http from "http";
import createHandler from "github-webhook-handler";
import { graphql } from "@octokit/graphql";

import { prisma } from "./generated/prisma-client";

export default () => {
  const handler = createHandler({
    path: "/payload",
    secret: process.env.WEBHOOK_SECRET
  });

  http
    .createServer((req, res) =>
      handler(req, res, err => {
        res.statusCode = 404;
        res.end("not found");
      })
    )
    .listen(8000, () =>
      console.log("listening for webhooks on http://localhost:8000/payload")
    );

  handler.on("error", err => {
    console.error("Error:", err.message);
  });

  handler.on("star", async event => {
    const { id, login } = event.payload.sender;
    if (event.payload.action == "deleted") {
      const deletedUser = await prisma.deleteUser({
        id
      });
      const numberDeletedCommits = await prisma
        .deleteManyCommits({
          user: deletedUser
        })
        .count();

      const numberDeletedPullRequests = await prisma
        .deleteManyPullRequests({
          author: deletedUser
        })
        .count();

      const numberDeletedRepos = await prisma
        .deleteManyRepoes({
          commits_every: {},
          pullRequests_every: {}
        })
        .count();

      console.log("Deleted user:", deletedUser);
      console.log("Number of deleted repos:", numberDeletedRepos);
    } else {
      const { user } = await graphql({
        query: `
          query userCommits($username: String!) {
            user(login: $username) {
              repositories(first: 100) {
                nodes {
                  id
                  name
                  description
                  languages(first: 3) {
                    nodes {
                      name
                    }
                  }
                  stargazers {
                    totalCount
                  }
                  url
                }
              }
            }
          }
        `,
        username: login,
        headers: {
          authorization: `token ${process.env.GITHUB_SECRET}`
        }
      });

      console.log(user);

      const addedUser = await prisma.createUser({
        id,
        username: login
      });
      console.log("added user:", addedUser);
    }
  });
};
