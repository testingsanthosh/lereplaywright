pipeline {
    agent any

    environment {
        NODE_VERSION = '22.14.0'
    }

    tools {
        nodejs "${NODE_VERSION}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Clone your GitHub repo
                git url: 'https://github.com/testingsanthosh/lereplaywright.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm packages
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                // Install required browsers
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                // Run Playwright tests
                sh 'npx playwright test --project=chromium'
            }
        }

        stage('Archive Report') {
            steps {
                // Archive HTML test report
                archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            cleanWs()
        }
    }
}
