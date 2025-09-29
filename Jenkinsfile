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
        // Запускаємо тести, навіть якщо є фейли
        sh 'npx playwright test || true'

        // Копіюємо звіт у окрему папку, яку архівуємо
        sh 'cp -r playwright-report html-report'
      }
    }

    stage('Перевірка репорту') {
      steps {
        sh 'ls -la html-report'
        sh 'test -f html-report/index.html && echo "✅ index.html існує!" || echo "❌ index.html НЕ знайдено!"'
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
        subject: "📋 Playwright Report - ${currentBuild.fullDisplayName}",
        body: """
          <p><strong>Build result:</strong> ${currentBuild.currentResult}</p>
          <p>✅ <a href="${env.BUILD_URL}Playwright_20Report">Переглянути Playwright звіт</a></p>
          <p>📁 <a href="${env.BUILD_URL}artifact/html-report/index.html">Завантажити як файл</a></p>
        """,
        to: 'ann.gurfinkel@gmail.com',
        mimeType: 'text/html'
      )

      cleanWs()
    }
  }
}
