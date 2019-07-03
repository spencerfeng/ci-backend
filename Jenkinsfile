pipeline {

  agent any

  stages {

    stage('Setup database') {
      steps {
        sh 'docker-compose up -d database'
        sh 'pwd'
        sh 'docker-compose up server'
      }
    }

  }

  post {
    always {
      sh 'docker image prune -fa'
    }
  }
}