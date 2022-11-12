pipeline {
	agent any
	stages {
		stage('Docker') {
			environment {
				REACT_APP_BASE_URL = credentials('BASE_URL')
    		}
            steps {
				sh  '''
					cd reddit-front
					docker-compose up --build -d
					'''
            }
		}
	}
}
