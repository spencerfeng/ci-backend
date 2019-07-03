pipeline {

  agent any

  stages {

    stage('Setup database') {
      steps {
        sh 'docker-compose up -d database'
        sh 'docker-compose up -d server'
      }
    }

  }

  post {
    always {
      sh 'docker image prune -fa'
    }
  }
}