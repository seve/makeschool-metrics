import http from "http";
import createHandler from "github-webhook-handler";

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

  handler.on("star", event => {
    console.log(event);
  });
};
