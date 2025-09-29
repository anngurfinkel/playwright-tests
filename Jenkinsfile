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
        // Запускаємо тести навіть якщо вони фейляться
        sh 'npx playwright test || true'
      }
    }

    stage('Generate HTML Report') {
      steps {
        // Генеруємо повний статичний звіт
        sh 'npx playwright show-report --output=html-report'
      }
    }

    stage('Archive HTML Report') {
      steps {
        // Архівуємо повністю готовий html-звіт
        archiveArtifacts artifacts: 'html-report/**', fingerprint: true
      }
    }
  }

  post {
    always {
      emailext (
        subject: "Playwright Report - ${currentBuild.fullDisplayName}",
        body: """
          <p>🔧 Build result: <strong>${currentBuild.currentResult}</strong></p>
          <p>📄 <a href="${env.BUILD_URL}artifact/html-report/index.html">Відкрити Playwright звіт</a></p>
        """,
        to: 'ann.gurfinkel@gmail.com',
        mimeType: 'text/html'
      )
      cleanWs()
    }
  }
}
