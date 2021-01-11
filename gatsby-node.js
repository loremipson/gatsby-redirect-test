exports.createPages = ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: '/',
    component: `${__dirname}/src/templates/Test.jsx`,
  })
}
