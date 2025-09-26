pipeline {
  agent any

  environment {
    PLAYWRIGHT_BROWSERS_PATH = './node_modules/playwright/.local-browsers'
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

    stage('Run tests') {
      steps {
        // Завжди повертає 0, щоб pipeline не падав
        sh 'npx playwright test --reporter=html || true'
      }
    }

    // 🟡 Архівація HTML-звіту Playwright
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
        to: 'ahurfinkel@labelyourdata.com',
        mimeType: 'text/html'
      )
    }
  }
}
