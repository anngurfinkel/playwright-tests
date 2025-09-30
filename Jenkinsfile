post {
    always {
        emailext (
            subject: "Playwright Test Results",
            body: """
                <p>✅ Тести Playwright завершено. Перевірте звіт нижче:</p>

                <p>
                    <a href="${env.BUILD_URL}HTML_20Report/" style="
                        background-color: #28a745;
                        color: white;
                        padding: 10px 15px;
                        text-decoration: none;
                        border-radius: 5px;
                        display: inline-block;
                        font-weight: bold;
                    ">
                        🔍 Show Playwright Report
                    </a>
                </p>

                <p>📦 Повна збірка Jenkins: <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>
            """,
            mimeType: 'text/html',
            to: 'ann.gurfinkel@gmail.com'
        )
        cleanWs()
    }
}
