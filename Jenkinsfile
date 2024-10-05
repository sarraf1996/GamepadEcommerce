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
                echo12 'deploy on test'
            }
        }
        stage('Deploy on prod') {
            input {
                message "Are you sure to continue?"
                ok "Yes, continue."
            }
            steps {
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
            echo "========pipeline execution failed within some stage========"
        }
    }
}