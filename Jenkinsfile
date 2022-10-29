pipeline {
    agent { docker { image 'node:19' } }
    stages {
        stage('test version') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
