# QA Automation Framework

## Overview

Welcome to the QA Automation Framework repository! This project is designed to offer a comprehensive solution for frontend automation, performance testing, and security testing. The framework is built using modern tools and technologies to ensure efficient and accurate testing across various applications. Below, you'll find detailed information about the setup, tools used, and instructions for testing.

## Table of Contents

1. [Frontend Automation](#frontend-automation)
2. [Performance Testing](#performance-testing)
3. [Security Testing](#security-testing)
4. [GitHub Actions](#github-actions)
5. [Generating Reports and Screenshots](#generating-reports-and-screenshots)
6. [How to Test](#how-to-test)
7. [Tools Used](#tools-used)

## Frontend Automation

### Tools Used
- **Playwright**: A powerful automation library for end-to-end testing of web applications.
- **NPM**: Node.js package manager used to install Playwright and its dependencies.
- **NPX**: Tool to execute packages without installing them globally, used for running Playwright commands.

### Setup

1. **Install Dependencies**: Ensure you have Node.js installed. Install Playwright and other dependencies using:
    ```bash
    npm install playwright
    ```

2. **Test Scripts**: The frontend tests are implemented using Playwright, which handles various interactions with the Amazon and Flipkart e-commerce websites. The test scripts are written in JavaScript and are located in the `tests` directory.

3. **Running Tests**: To run the Playwright tests, use:
    ```bash
    npx playwright test
    ```

### Test Scripts

- **Amazon Test**: Automated interactions with the Amazon website, including search and purchase functionalities.
- **Flipkart Test**: Automated interactions with the Flipkart website, similar to the Amazon test.

## Performance Testing

### Tools Used
- **JMeter**: An open-source tool for performance testing and load testing of applications.

### Setup

1. **Install JMeter**: Download and install JMeter from the [official website](https://jmeter.apache.org/).

2. **Test Plans**: Performance test plans are configured to simulate user load and measure application performance.

3. **Running Tests**: Execute JMeter test plans using:
    ```bash
    jmeter -n -t path/to/test-plan.jmx -l path/to/results.jtl
    ```

## Security Testing

### Tools Used
- **OWASP ZAP**: A security scanning tool used to find vulnerabilities in web applications.

### Setup

1. **Install ZAP**: Download and install OWASP ZAP from the [official website](https://www.zaproxy.org/).

2. **Scan Configuration**: Configure ZAP to scan your application for security vulnerabilities.

3. **Running Scans**: Launch ZAP and start the scan via the GUI or using the command line:
    ```bash
    zap-cli quick-scan http://your-application-url
    ```

## GitHub Actions

### Setup

1. **Create Workflow**: A GitHub Actions workflow is set up to automate testing, including frontend, performance, and security tests.

2. **Configuration**: The workflow file (`.github/workflows/test.yml`) configures the CI pipeline to run tests on push and pull request events.

3. **Running Actions**: GitHub Actions will automatically execute the defined workflows based on the repository events.

## Generating Reports and Screenshots

### Reports

- **Playwright Reports**: Detailed test reports are generated after running Playwright tests, which include test results, execution times, and failure details.
- **JMeter Reports**: Performance test results are summarized in JMeter reports, providing insights into application performance.

### Screenshots

- **Playwright**: Screenshots of key pages and interactions are captured during the Playwright tests to aid in debugging and analysis.

### Viewing Reports

1. **Playwright Reports**: Located in the `playwright-report` directory.
2. **JMeter Reports**: Found in the directory specified during test execution.

## How to Test

1. **Frontend Tests**:
    - Install Node.js, NPM, and Playwright.
    - Run the Playwright tests using `npx playwright test`.

2. **Performance Tests**:
    - Install JMeter and configure test plans.
    - Execute tests with `jmeter -n -t path/to/test-plan.jmx -l path/to/results.jtl`.

3. **Security Tests**:
    - Install OWASP ZAP and configure it for your application.
    - Run security scans via ZAP's GUI or command line.

## Tools Used

- **Playwright**: For frontend automation.
- **JMeter**: For performance testing.
- **OWASP ZAP**: For security testing.
- **GitHub Actions**: For continuous integration and automated testing.
- **NPM & NPX**: For managing and running Node.js packages.

