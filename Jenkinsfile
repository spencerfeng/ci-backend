pipeline {

  agent any

  stages {

    stage('Setup database') {
      steps {
        sh 'npm run setup'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }

  }

  post {
    always {
      sh 'docker image prune -fa'
    }
  }
}