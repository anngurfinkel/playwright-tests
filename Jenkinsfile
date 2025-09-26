pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:$PATH"
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh '/usr/local/bin/npm ci'
            }
        }
        stage('Run tests') {
            steps {
                sh '/usr/local/bin/npx playwright test --reporter=html || true'
            }
        }
        stage('Archive report') {
            steps {
                archiveArtifacts 'playwright-report/**'
            }
        }
    }
}
