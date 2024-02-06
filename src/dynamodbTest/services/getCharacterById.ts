import { dynamodb, TABLE_NAME } from "../dynamo"

const getCharaterById = async (id: string) => {
    try {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id: id
            }
        };

        const result = await dynamodb.get(params).promise();


        return result;
    } catch (err: any) {
        throw new Error(err.message);
    }
}


export { getCharaterById }