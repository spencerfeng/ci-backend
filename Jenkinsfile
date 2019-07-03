pipeline {

  agent any

  stages {

    stage('Setup database') {
      steps {
        sh 'docker-compose up -d database'
        sh 'docker-compose run migration'
      }
    }

    stage('Test') {
      steps {
        sh 'docker-compose run server npx mocha --recursive'
      }
    }

  }

  post {
    always {
      sh 'docker image prune -fa'
    }
  }
}