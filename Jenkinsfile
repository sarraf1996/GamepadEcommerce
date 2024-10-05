pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                echo 'test'
            }
        }
        stage('Build') {
            steps {
                echo 'build'
            }
        }
        stage('Deploy on test') {
            steps {
                echo 'deploy on test'
            }
        }
        stage('Deploy on prod') {
            steps {
                input {
                    message "Are you sure to continue..."
                    ok "Yes, continue"
                }
                echo 'deploy on prod'
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
            echo "========some stage while pipeline execution failed========"
        }
    }
}