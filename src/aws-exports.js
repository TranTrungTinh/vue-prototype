/* eslint-disable camelcase */
import { Auth } from 'aws-amplify'

const aws_exports = {
  Auth: {
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'ap-southeast-1:293a7f14-82e7-4eb9-b58a-82cc2a5162ab',

    // REQUIRED - Amazon Cognito Region
    region: 'ap-southeast-1',

    // OPTIONAL - Amazon Cognito Federated Identity Pool Region
    // Required only if it's different from Amazon Cognito Region
    identityPoolRegion: 'ap-southeast-1',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'ap-southeast-1_tNZ5l7J1a',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: 'nf0829493kr0lb4ut7j7kmdg5',

    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    // If set false,
    mandatorySignIn: true,

    // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
    authenticationFlowType: 'USER_SRP_AUTH'
  },
  Storage: {
    AWSS3: {
      bucket: 'tds-storage-dev-s3attachmentsbucket-haq7hbt8x3qa', // REQUIRED -  Amazon S3 bucket
      region: 'ap-southeast-1' // OPTIONAL -  Amazon service region
    }
  },
  API: {
    endpoints: [
      {
        name: 'TDSApi',
        endpoint: 'https://7c1mhq1pvc.execute-api.ap-southeast-1.amazonaws.com/dev',
        custom_header: async () => {
          return { Authorization: (await Auth.currentSession()).idToken.jwtToken }
        }
      }
    ]
  }
}

export default aws_exports
