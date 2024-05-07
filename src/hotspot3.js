import {aws_apigateway as apigateway} from "aws-cdk-lib"

const resource = api.root.addResource("example")
resource.addMethod(
    "GET",
    new apigateway.HttpIntegration("https://example.org"),
    {
        authorizationType: apigateway.AuthorizationType.NONE // Sensitive
    }
)
