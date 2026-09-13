# 🤖 QABrains End-to-End Automation Framework

A production-style end-to-end test automation framework built with Python, Playwright, and Pytest, designed around maintainability, CI/CD execution, automated reporting, team notifications, and AI-assisted test failure analysis.

The project goes beyond writing automated tests by connecting the entire workflow—from test execution and containerization to reporting, notifications, and automated failure analysis.

## 🛠 Tech Stack

`Python` · `Playwright` · `Pytest` · `Docker` · `GitHub Actions` · `Allure` · `Slack API` · `Ollama` · `Qwen 2.5 3B`

## 🚀 Highlights

### Framework

* Built a structured Page Object Model (POM) architecture with reusable pages, locators, fixtures, utilities, configuration, and test data.
* Automated end-to-end test scenarios covering login, registration, form submission, and password reset.

### CI/CD & Execution

* Containerized test execution using **Docker** for consistent environments.
* Integrated automated test execution with **GitHub Actions**.
* Configured scheduled and workflow-triggered test execution.

### Reporting & Observability

* Integrated Allure Reports for detailed test execution results.
* Built automated Slack notifications containing test status, test counts, branch/commit information, execution details, and report links.

### AI-Assisted Failure Analysis

* Integrated local Ollama + Qwen 2.5 3B into the GitHub Actions workflow to analyze failed Playwright test output.
* Designed the AI analysis as non-blocking, ensuring AI failures never mask the original test failure.
* Generated concise AI failure analysis and made the results available through GitHub Actions.
* Implemented local LLM-based analysis without relying on a paid AI API.

### Security

* Used environment variables and GitHub Secrets for sensitive configuration.
* Avoided hardcoded credentials and API keys.

## 🧠 Engineering Focus

**Automation Architecture · CI/CD · Dockerization · Test Reporting · Observability · AI-Assisted Testing · Maintainable Test Design**

## 🔗 Repository

[View on GitHub](https://github.com/jeremyyymrcs/qabrains-demo-tests)

---

## 🚧 More Projects Coming Soon

More automation, framework engineering, CI/CD, and AI-assisted testing projects will be added soon.

