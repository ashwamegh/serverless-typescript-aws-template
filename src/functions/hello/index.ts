import { APIGatewayEvent, Context, Callback } from 'aws-lambda';
import 'source-map-support/register';

export default async (event: APIGatewayEvent, context: Context, callback: Callback): Promise<any> => {
	return {
		statusCode: 200,
		body: JSON.stringify(
			{
				message: 'Go Serverless Webpack (Typescript) v3.0! Your function executed successfully!',
				env: JSON.stringify(process.env),
				input: event,
				context: context,
				callback: callback,
			},
			null,
			2,
		),
	};
};
