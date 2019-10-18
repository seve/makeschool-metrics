const postedBy = (parent, args, context) => {
  return context.prisma.link({ id: parent.id }).postedBy();
};

const votes = (parent, args, context) => {
  return context.prisma.link({ id: parent.id }).postedBy();
};

export default { postedBy, votes };
