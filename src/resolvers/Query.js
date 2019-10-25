const users = (parent, args, context, info) => {
  return context.prisma.users();
};

const repos = (parent, args, context, info) => {
  // return context.prisma.links();
  return [];
};

export default {
  users,
  repos
};
