const helper = (context) => {
  const params = context.data.root;
  return `${params.name}${params.suffix}`;
};

module.exports = helper;

