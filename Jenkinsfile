pipeline {

  agent any

  stages {

    stage('Setup database') {
      steps {
        sh 'docker-compose up -d database'
        sh 'pwd'
        sh 'docker-compose run -v .:/usr/app -v /usr/app/node_modules/ migration'
      }
    }

  }

  post {
    always {
      sh 'docker image prune -fa'
    }
  }
}