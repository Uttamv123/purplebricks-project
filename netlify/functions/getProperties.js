const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient({
  region: process.env.MY_AWS_REGION,
  accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
});

exports.handler = async () => {
  try {
    const params = {
      TableName: 'properties'
    };

    const data = await dynamo.scan(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(data.Items)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };
  }
};
