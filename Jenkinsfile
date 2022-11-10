pipeline {
	agent any
	stages {
		stage('Docker') {
            steps {
				sh  '''
					cd reddit-front
					echo BASE_URL=http://back:3000/api > .env
					docker-compose up --build -d
					'''
            }
		}
	}
}
