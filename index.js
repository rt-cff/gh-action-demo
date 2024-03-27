export async function lambdaHandler(event, context) {
  console.log("hello world");

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda 1" }),
  };
}

export default lambdaHandler;
