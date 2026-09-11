# Projects

## 🤖 Ultimate Automation Framework

**QABrains End-to-End Test Automation Framework**

A production-style end-to-end test automation framework built with **Python, Playwright, and Pytest**, designed with maintainability, scalability, CI/CD integration, and intelligent test failure analysis in mind.

### 🛠 Tech Stack

`Python` · `Playwright` · `Pytest` · `Docker` · `GitHub Actions` · `Allure` · `Slack API` · `Ollama` · `Qwen 2.5`

### 🚀 Highlights

* Built a structured **Page Object Model (POM)** architecture for maintainable and scalable test automation
* Automated end-to-end test scenarios covering **login, registration, form submission, and password reset**
* Containerized test execution using **Docker** for consistent environments
* Integrated the test suite into **GitHub Actions** for automated CI/CD execution
* Implemented **Allure Reports** for detailed and visual test reporting
* Built automated **Slack notifications** containing test results, execution details, branch/commit information, and report links
* Integrated **local AI-powered failure analysis using Ollama** directly into the GitHub Actions workflow
* Uses **Qwen 2.5 3B** to analyze failed Playwright test output and generate a concise failure analysis
* Designed the AI analysis to be **non-blocking**, ensuring AI failures never hide the original test failure
* Implemented secure environment-variable and GitHub Secrets handling with **no hardcoded credentials or API keys**

### 🧠 Engineering Focus

**Automation Architecture · CI/CD · Dockerization · Test Reporting · Observability · AI-assisted Testing · Maintainable Test Design**

### 🔗 Repository

[View on GitHub](https://github.com/jeremyyymrcs/qabrains-demo-tests)
