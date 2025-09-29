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

    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run Playwright tests') {
      steps {
        sh 'npx playwright test || true'
      }
    }

    stage('Generate HTML Report') {
      steps {
        sh 'npx playwright show-report --output=html-report'
      }
    }

    stage('Check report exists') {
      steps {
        sh 'ls -l html-report'
        sh 'ls -l html-report/assets'
      }
    }

    stage('Archive HTML Report') {
      steps {
        archiveArtifacts artifacts: 'html-report/**', fingerprint: true
      }
    }

    stage('Publish Playwright Report') {
      steps {
        publishHTML([
          allowMissing: false,
          alwaysLinkToLastBuild: true,
          keepAll: true,
          reportDir: 'html-report',
          reportFiles: 'index.html',
          reportName: 'Playwright Report'
        ])
      }
    }
  }

  post {
    always {
      emailext (
        subject: "Playwright Report - ${currentBuild.fullDisplayName}",
        body: """
          <p>🔧 Build result: <strong>${currentBuild.currentResult}</strong></p>
          <p>📄 <a href="${env.BUILD_URL}Playwright_20Report">Відкрити Playwright звіт</a></p>
        """,
        to: 'ann.gurfinkel@gmail.com',
        mimeType: 'text/html'
      )
      cleanWs()
    }
  }
}
