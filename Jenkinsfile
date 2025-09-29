pipeline {
  agent any

  tools {
    nodejs 'NodeJS_22' // заміни на свою NodeJS версію в Jenkins
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
        // Запуск тестів, навіть якщо падають, щоб далі згенерувати звіт
        sh 'npx playwright test || true'
        // Генерація повноцінного HTML-звіту в окрему папку
        sh 'npx playwright show-report --output=html-report'
      }
    }

    stage('Check Report Exists') {
      steps {
        echo "🧐 Перевірка наявності html-report:"
        sh 'ls -la'
        sh 'ls -la html-report || echo "❌ html-report НЕ знайдено!"'
        sh 'test -f html-report/index.html && echo "✅ index.html є!" || echo "❌ index.html НЕ знайдено!"'
      }
    }

    stage('Archive HTML Report') {
      steps {
        echo "📦 Архівація html-report у Jenkins артефакти"
        archiveArtifacts artifacts: 'html-report/**', fingerprint: true
      }
    }

    stage('Publish Playwright Report') {
      steps {
        echo "🌐 Публікація HTML-звіту через HTML Publisher плагін"
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
      echo "📧 Надсилання email з посиланням на звіт"
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

      echo "🧹 Очистка воркспейсу"
      cleanWs()
    }
  }
}
