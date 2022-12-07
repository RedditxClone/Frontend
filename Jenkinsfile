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
					echo REACT_APP_BASE_URL=$REACT_APP_BASE_URL > .env
					docker-compose -p 'phase2' up --build -d
					'''
            }
		}
	}
}
