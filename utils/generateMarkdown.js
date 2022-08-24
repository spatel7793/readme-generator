function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "Boost":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    default:
      return "";
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return "https://opensource.org/licenses/Apache-2.0";
    case "Boost":
      return "https://www.boost.org/LICENSE_1_0.txt";
    default:
      return "";
  }
}

function generateMarkdown(data) {
  console.log(data.license)
  console.log(data)
  return `# ${data.title}

  ## Licensing
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Contact](#contact)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.testing}

  ## Contact
  -GitHub: [${data.github}](https://github.com/${data.github})
  -Email: ${data.email}
`;
}

module.exports = generateMarkdown;
