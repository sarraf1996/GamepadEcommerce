pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Check out the source code from Git.
                git url: 'https://github.com/sarraf1996/GamepadEcommerce.git', branch: 'main'
                echo 'Source code from GitHub fetched successfully.'
            }
        }
        stage('Build') {
            steps {
                // Start the build process.
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
                message "Are you sure to continue?"
                ok "Yes, continue."
            }
            steps {
                echo 'Deployed on prod. environment successfully.'
            }
        }
    }
    post {
        always {
            echo "========always========"
        }
        success {
            echo "========pipeline executed successfully with all stages========"
        }
        failure {
            echo "========pipeline execution failed within some stage========"
        }
    }
}