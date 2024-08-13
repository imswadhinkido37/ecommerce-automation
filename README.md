# QA Automation
## Overview

Welcome to the QA Automation Framework repository! This project provides a comprehensive solution for frontend automation, performance testing, and security testing. Leveraging modern tools and technologies, this framework ensures efficient and accurate testing across various applications. This document offers detailed instructions on setup, tools used, and testing procedures.

## Table of Contents

1. [Frontend Automation](#frontend-automation)
2. [Performance Testing](#performance-testing)
3. [Security Testing](#security-testing)
4. [API Testing](#api-testing)
5. [GitHub Actions](#github-actions)
6. [Generating Reports and Screenshots](#generating-reports-and-screenshots)
7. [How to Test](#how-to-test)
8. [Tools Used](#tools-used)

## Frontend Automation

### Tools Used

- **Playwright**: A robust automation library for end-to-end testing of web applications.
- **NPM**: Node.js package manager for installing Playwright and its dependencies.
- **NPX**: Tool to execute packages without global installation, used for running Playwright commands.

### Setup

1. **Install Dependencies**: Ensure Node.js is installed. Install Playwright and other dependencies using:
    ```bash
    npm install playwright
    ```

2. **Test Scripts**: The frontend tests are implemented using Playwright. Scripts for interactions with Amazon and Flipkart are located in the `tests` directory.

3. **Running Tests**: Execute Playwright tests with:
    ```bash
    npx playwright test
    ```

### Test Scripts

- **Amazon Test**: Automates interactions with the Amazon website, covering search and purchase functionalities.
- **Flipkart Test**: Automates interactions with the Flipkart website, similar to the Amazon test.

## Performance Testing

### Tools Used

- **JMeter**: Open-source tool for performance and load testing of applications.

### Setup

1. **Install JMeter**: Download and install JMeter from the [official website](https://jmeter.apache.org/).

2. **Test Plans**: Configure performance test plans to simulate user load and measure application performance.

3. **Running Tests**: Execute JMeter test plans with:
    ```bash
    jmeter -n -t path/to/test-plan.jmx -l path/to/results.jtl
    ```

## Security Testing

### Tools Used

- **OWASP ZAP**: Security scanning tool to identify vulnerabilities in web applications.

### Setup

1. **Install ZAP**: Download and install OWASP ZAP from the [official website](https://www.zaproxy.org/).

2. **Scan Configuration**: Set up ZAP to scan your application for security vulnerabilities.

3. **Running Scans**: Start the scan via the GUI or command line:
    ```bash
    zap-cli quick-scan http://your-application-url
    ```

## API Testing

### Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Setting Up Postman](#setting-up-postman)
4. [Creating Test Cases](#creating-test-cases)
5. [Running Tests](#running-tests)
6. [Test Report](#test-report)
7. [Conclusion](#conclusion)

### Introduction

This section provides detailed instructions on setting up and executing API tests using Postman. It covers installation, environment setup, test case creation, running tests, and interpreting test reports.

### Installation

#### Postman Installation

1. **Download Postman**:
   - Visit the [Postman website](https://www.postman.com/downloads/).
   - Download the version suitable for your operating system (Windows, macOS, or Linux).

2. **Install Postman**:
   - Follow the installation steps based on your OS:
     - **Windows**: Run the `.exe` file and follow the setup wizard.
     - **macOS**: Drag the Postman application to the Applications folder.
     - **Linux**: Extract the tar file and run the Postman executable.

3. **Launch Postman**:
   - Open Postman from your applications menu or desktop shortcut.

### Setting Up Postman

#### Create a New Workspace

1. **Open Postman**:
   - Launch Postman and sign in (or create a new account).

2. **Create Workspace**:
   - Click on the **Workspace** dropdown in the top left corner.
   - Select **Create Workspace** and enter a name (e.g., "API Testing").

#### Import or Create API Collection

1. **Import Collection**:
   - Click **Import** in the top left corner.
   - Import a Postman collection file or provide a link.

2. **Create Collection Manually**:
   - Click the **Collections** tab on the left sidebar.
   - Click **+ New Collection**.
   - Name the collection (e.g., "E-commerce API Tests").
   - Add folders and requests as necessary.

### Creating Test Cases

#### Define Test Scenarios

1. **Create New Request**:
   - In your collection, click **+ New Request**.
   - Enter the request name (e.g., "Search Product API").
   - Choose the HTTP method (GET, POST, etc.) and enter the API endpoint URL.

2. **Add Request Details**:
   - **Headers**: Add required headers (e.g., `Content-Type`, `Authorization`).
   - **Body**: For POST or PUT requests, provide the request body in JSON or other formats.

3. **Write Tests**:
   - Go to the **Tests** tab of the request.
   - Write JavaScript test scripts. Examples:
     ```javascript
     pm.test("Status code is 200", function () {
         pm.response.to.have.status(200);
     });

     pm.test("Response time is less than 200ms", function () {
         pm.expect(pm.response.responseTime).to.be.below(200);
     });

     pm.test("Response contains product name", function () {
         pm.response.to.have.jsonBody('name');
     });
     ```

4. **Organize Tests**:
   - Group related requests into folders within the collection for better organization.

### Running Tests

#### Manual Run

1. **Select Collection or Request**:
   - Choose the collection or request from the sidebar.

2. **Send Request**:
   - Click **Send** to execute the request and view the response.

3. **Review Results**:
   - Check the status code, response body, and test results in the **Test Results** tab.

#### Automated Testing with Collection Runner

1. **Open Collection Runner**:
   - Click the **Runner** button or use `Cmd/Ctrl + Alt + R`.

2. **Configure Runner**:
   - Select the collection to run.
   - Configure environment variables if needed.
   - Click **Run** to execute all requests.

3. **Review Results**:
   - Review test results, including pass/fail status and response details.

### Test Report

1. **Generate Report**:
   - Use Postman's built-in reporting features or integrate with Newman for command-line reporting.
   - Install Newman with: `npm install -g newman`
   - Generate reports with: `newman run <collection-file> -r html`

2. **Include in Documentation**:
   - Attach or link generated reports in your GitHub repository.

### Conclusion

This document provides comprehensive guidance on setting up and executing API tests using Postman. Follow these instructions to ensure thorough API testing and detailed documentation. For additional support, consult the [Postman documentation](https://learning.postman.com/docs/) or seek further assistance.

## GitHub Actions

### Setup

1. **Create Workflow**: Set up a GitHub Actions workflow to automate testing, including frontend, performance, and security tests.

2. **Configuration**: Configure the workflow file (`.github/workflows/test.yml`) to run tests on push and pull request events.

3. **Running Actions**: GitHub Actions will automatically execute the defined workflows based on repository events.

## Generating Reports and Screenshots

### Reports

- **Playwright Reports**: Detailed reports generated after running Playwright tests, including execution times and failure details.
- **JMeter Reports**: Performance test results summarized in JMeter reports, providing insights into application performance.

### Screenshots

- **Playwright**: Screenshots of key pages and interactions captured during Playwright tests to aid in debugging.

### Viewing Reports

1. **Playwright Reports**: Located in the `playwright-report` directory.
2. **JMeter Reports**: Found in the directory specified during test execution.

## How to Test

1. **Frontend Tests**:
   - Install Node.js, NPM, and Playwright.
   - Run tests with `npx playwright test`.

2. **Performance Tests**:
   - Install JMeter and configure test plans.
   - Execute tests with `jmeter -n -t path/to/test-plan.jmx -l path/to/results.jtl`.

3. **Security Tests**:
   - Install OWASP ZAP and configure it for your application.
   - Run scans via ZAP's GUI or command line.

## Tools Used

- **Playwright**: For frontend automation.
- **JMeter**: For performance testing.
- **OWASP ZAP**: For security testing.
- **GitHub Actions**: For continuous integration and automated testing.
- **NPM & NPX**: For managing and running Node.js packages.
- **Postman**: For API testing.

##imswadhinkido37
