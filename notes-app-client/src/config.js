export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: 'notes-app-jzars',
    BUCKET: 'us-east-2'
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://9o7dib7jb5.execute-api.us-east-2.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_dH8ROutK5',
    APP_CLIENT_ID: '7b05qc244nc0ecfql04c6qc477',
    IDENTITY_POOL_ID: 'us-east-2:af347042-73a3-47be-862b-d206d5b75649'
  }
};
