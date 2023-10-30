module.exports = {
    branches: [
       "main",
       "next",
       "next-major",
       {
          name: "beta",
          prerelease: true,
       },
       {
          name: "alpha",
          prerelease: true,
       },
    ],
    plugins: [
       "@semantic-release/commit-analyzer",
       "@semantic-release/release-notes-generator",
       [
          "@semantic-release/changelog",
          {
             changelogFile: "docs/CHANGELOG.md",
             changelogTitle:
                "# Changelog \n\nRegistro de Alterações: Mantenha-se atualizado com as últimas novidades e melhorias!",
          },
       ],
       "@semantic-release/npm",
       [
          "@semantic-release/git",
          {
             assets: ["docs/CHANGELOG.md"],
             message: "chore: 🔖 release v${nextRelease.version} [skip ci]",
          },
       ],
       [
          "@semantic-release/github",
          {
             assets: false,
          },
       ],
       [
          "@semantic-release/git",
          {
             message: "chore: 🔖 release v${nextRelease.version} [skip ci]",
          },
       ],
    ],
 };