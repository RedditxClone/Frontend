pipeline {
	agent any
	stages {
		stage('Docker') {
			environment {
				REACT_APP_BASE_URL = credentials('BASE_URL')
				REACT_APP_GOOGLE_ID = credentials('REACT_APP_GOOGLE_ID')
				REACT_APP_GOOGLE_SECRET = credentials('REACT_APP_GOOGLE_SECRET')
				REACT_APP_GITHUB_ID = credentials('REACT_APP_GITHUB_ID')
				REACT_APP_GITHUB_SECRET = credentials('REACT_APP_GITHUB_SECRET')
    		}
            steps {
				sh  '''
					cd reddit-front
					echo REACT_APP_BASE_URL=$REACT_APP_BASE_URL > .env
					echo REACT_APP_GOOGLE_ID=$REACT_APP_GOOGLE_ID >> .env
					echo REACT_APP_GOOGLE_SECRET=$REACT_APP_GOOGLE_SECRET >> .env
					echo REACT_APP_GITHUB_ID=$REACT_APP_GITHUB_ID >> .env
					echo REACT_APP_GITHUB_SECRET=$REACT_APP_GITHUB_SECRET >> .env
					docker-compose -p 'phase2' up --build -d
					'''
            }
		}
	}
}
