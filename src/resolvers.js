const { Link } = require("../models");

const resolvers = {
  Query: {
    async link(parent, { id }, { models }) {
      return models.Link.findByPk(id);
    },
    async allLinks(parent, args, { models }) {
      return models.Link.findAll();
    },
  },
  Mutation: {
    createLink: async (parent, { url, slug }) => {
      return await Link.create({
        url,
        slug,
      });
    },
  },
};

module.exports = resolvers;
