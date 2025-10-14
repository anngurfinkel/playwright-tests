pipeline {
    agent any

    tools {
        nodejs "NodeJS_22"
    }

    environment {
        PLAYWRIGHT_BROWSERS_PATH = "./ms-playwright"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Chromium') {
            steps {
                sh 'npx playwright install chromium --with-deps'
            }
        }

        stage('Run Playwright tests (Chromium only)') {
            steps {
                script {
                    def testResult = sh(script: 'npx playwright test --project=chromium', returnStatus: true)
                    if (testResult == 0) {
                        echo '✅ Тести пройшли успішно.'
                        currentBuild.result = 'SUCCESS'
                    } else {
                        echo '❌ Тести не пройшли.'
                        currentBuild.result = 'FAILURE'
                        error('Тести завершилися з помилками!')
                    }
                }
            }
        }

        stage('Check Report') {
            steps {
                sh '''
                    cp -r playwright-report html-report
                    test -f html-report/index.html && echo '✅ index.html існує!'
                '''
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'html-report/**/*', fingerprint: true
            }
        }

        stage('Publish Playwright HTML Report') {
            steps {
                publishHTML(target: [
                    reportDir: 'html-report',
                    reportFiles: 'index.html',
                    reportName: 'HTML Report',
                    keepAll: true,
                    alwaysLinkToLastBuild: true,
                    allowMissing: false
                ])
            }
        }
    }

    post {
        always {
            script {
                def statusText = (currentBuild.result == 'FAILURE') ? 'Failed' : 'Success'
                emailext (
                    subject: "Playwright Test Results: ${statusText}",
                    body: """
                        <p>Результат тестів: <strong>${statusText}</strong></p>
                        <p>🔗 <a href="${env.BUILD_URL}HTML_20Report/">Відкрити HTML звіт</a></p>
                        <p>🔗 <a href="${env.BUILD_URL}">Відкрити сторінку збірки</a></p>
                    """,
                    mimeType: 'text/html',
                    to: 'ann.gurfinkel@gmail.com'
                )
            }
            cleanWs()
        }
    }
}
