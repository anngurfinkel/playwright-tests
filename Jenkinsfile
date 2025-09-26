pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Run tests') {
            steps {
                sh 'npx playwright test --reporter=html'
            }
        }
        stage('Archive report') {
            steps {
                archiveArtifacts 'playwright-report/**'
            }
        }
    }
}
