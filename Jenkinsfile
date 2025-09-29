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

    stage('Install Playwright Browsers') {
      steps {
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Run Playwright tests') {
      steps {
        script {
          // Запускаємо тести. Якщо є фейли — pipeline продовжиться
          def result = sh(script: 'npx playwright test || true', returnStatus: true)
          // Зберігаємо код для перевірки пізніше
          currentBuild.description = "Test status code: ${result}"
          env.TEST_EXIT_CODE = result.toString()
          sh 'cp -r playwright-report html-report || echo "No report found"'
        }
      }
    }

    stage('Check Report') {
      steps {
        sh 'ls -la html-report'
        sh 'test -f html-report/index.html && echo "✅ index.html існує!" || echo "❌ index.html НЕ знайдено!"'
      }
    }

    stage('Archive Artifacts') {
      steps {
        archiveArtifacts artifacts: 'html-report/**', fingerprint: true
        archiveArtifacts artifacts: 'test-results/**/*.zip', fingerprint: true
      }
    }

    stage('Generate PDF Report') {
      steps {
        sh '''
          npm install -g html-pdf-cli || true
          html-pdf html-report/index.html report.pdf || echo "PDF generation failed"
        '''
        archiveArtifacts artifacts: 'report.pdf', fingerprint: true
      }
    }

    stage('Publish Playwright HTML Report') {
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

    stage('Fail if tests failed') {
      when {
        expression {
          return env.TEST_EXIT_CODE != '0'
        }
      }
      steps {
        error("❌ Playwright tests failed. Exit code: ${env.TEST_EXIT_CODE}")
      }
    }
  }

  post {
    always {
      emailext (
        subject: "📋 Playwright Report - ${currentBuild.fullDisplayName}",
        body: """
          <p><strong>Build result:</strong> ${currentBuild.currentResult}</p>
          <p>✅ <a href="${env.BUILD_URL}Playwright_Report">Show Playwright HTML report</a></p>
          <p>📎 PDF Report and traces archived as artifacts.</p>
        """,
        to: 'ann.gurfinkel@gmail.com',
        mimeType: 'text/html'
      )

      cleanWs()
    }
  }
}
