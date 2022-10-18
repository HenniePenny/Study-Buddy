const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoute');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

/**
 * Things that can be improved
 *
 * Incomplete functions and commented code should be removed before merging the
 * pull request to main branch.
 *
 * API and HTML routes should be added to their respective files.
 *
 * Data validation is missing for all the post routes.
 *   For eg - for login api route, the req.body should be checked if it
 *   contains a valid email (pattern) before querying the database.
 *
 * Do not forget to run prettier and eslint before committing your code.
 *
 * Missing comprehensive documentation.
 *
 * Unnecessary console.log statements should not be added to production code.
 *
 * Merged branches should be deleted.
 *
 * Some resources on managing and naming branches -
 *
 * https://openclassrooms.com/en/courses/5671626-manage-your-code-project-with-git-github-old-version/6152276-use-branch-cleanup-techniques
 *
 * https://idiv-biodiversity.github.io/git-knowledge-base/branch-naming-conventions.html
 *
 * Resource describing some documentation practices using JSDoc -
 * https://www.valentinog.com/blog/jsdoc/
 *
 */

/**
 * Postive points -
 *
 * Do not forget how far you have come in your journey!
 *
 * You all worked hard as a team.
 *
 * You researched and tried two new packages  - AdminLTE and Papaparse
 *
 * The folder structure is well organised.
 *
 * The algorithm logic is a good start and works well.
 *
 * The app has a well polished and intuitive UI.
 *
 * Good work figuring out the database architecture to fit the needs of the project.
 *
 * Well done! Good luck for your future projects! :)
 *
 */
