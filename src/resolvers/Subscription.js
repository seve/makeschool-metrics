// const newLinkSubscribe = (parent, args, context, info) => {
//   return context.prisma.$subscribe.link({ mutation_in: ["CREATED"] }).node();
// };
// const newLink = {
//   subscribe: newLinkSubscribe,
//   resolve: payload => {
//     return payload;
//   }
// };

// const newVoteSubscribe = (parent, args, context, info) => {
//   return context.prisma.$subscribe.vote({ mutation_in: ["CREATED"] }).node();
// };

// const newVote = {
//   subscribe: newVoteSubscribe,
//   resolve: payload => {
//     return payload;
//   }
// };

const newCommit = {
  subscribe: () => null,
  resolve: payload => payload
};

const newRepo = {
  subscribe: () => null,
  resolve: payload => payload
};
export default {
  newCommit,
  newRepo
};
