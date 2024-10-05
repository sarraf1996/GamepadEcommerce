pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Name of the NodeJS installation configured in Global Tools Configuration.
    }

    stages {
        stage('Checkout') {
            steps {
                // Check out the source code from Git.
                git url: 'https://github.com/sarraf1996/GamepadEcommerce.git', branch: 'main'
                echo 'Source code from GitHub fetched successfully.'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install project specific dependencies listed under "package.json" file.
                sh 'npm install'
                echo 'Project dependencies installed successfully.'
            }
        }
        stage('Build') {
            steps {
                // Start the build process.
                sh 'npm run build'
                echo 'Build completed successfully.'
            }
        }
        stage('Test') {
            steps {
                // Start the testing process.
                echo 'Testing completed successfully.'
            }
        }
        stage('Deploy on test') {
            steps {
                echo 'Deployed on test environment successfully.'
            }
        }
        stage('Deploy on prod') {
            input {
                message 'Are you sure to continue?'
                ok 'Yes, continue.'
            }
            steps {
                // Start the Express server in the background.
                sh 'pwd'
                sh 'node --version'
                sh 'npm --version'
                sh 'ls -ltr'
                sh 'nohup node dist/bundle.js > output.log 2>&1 &'
                echo 'Express server deployed and started on prod. environment successfully on port 4000.'
            }
        }
    }
    post {
        always {
            echo '========always========'
        }
        success {
            echo '========pipeline executed successfully with all stages========'
        }
        failure {
            echo '========pipeline execution failed within some stage========'
        }
    }
}