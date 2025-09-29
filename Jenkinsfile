pipeline {
  agent any

  tools {
    nodejs 'NodeJS_22'
  }

  environment {
    PLAYWRIGHT_BROWSERS_PATH = './node_modules/playwright/.local-browsers'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Check npm') {
      steps {
        sh 'which npm'
        sh 'which node'
        sh 'npm --version'
        sh 'node --version'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run tests') {
      steps {
        sh 'npx playwright test --reporter=html || true'
      }
    }

    stage('Archive Report') {
      steps {
        archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
      }
    }
  }

  post {
    always {
      emailext (
        subject: "Playwright Report - ${currentBuild.fullDisplayName}",
        body: """
          <p>Build result: ${currentBuild.currentResult}</p>
          <p><a href="${env.BUILD_URL}artifact/playwright-report/index.html">🔍 View Playwright Report</a></p>
        """,
        to: 'ann.gurfinkel@gmail.com',
        mimeType: 'text/html'
      )
      cleanWs()
    }
  }
}
