import AWS from 'aws-sdk';
import { GetItemOutput, PutItemOutput } from 'aws-sdk/clients/dynamodb';

/**
 * Base repository interface.
 */
export interface IRepository<T> {
  /**
   * Receives an ID and fetch data from database by that ID.
   *
   * @param id Id of the document
   */
  getById(id: string): Promise<GetItemOutput>;

  /**
   * Insert one item in the table.
   *
   * @param data Object that you want to store
   */
  create(data: Partial<T>): Promise<PutItemOutput>;
}

/**
 * This Repository class is the base repository. It is an abstract class because it can only be
 * extended.
 */
export default class Repository<T> implements IRepository<T> {
  private readonly documentClient: AWS.DynamoDB.DocumentClient;
  private readonly table: string;

  constructor(table: string) {
    this.documentClient = new AWS.DynamoDB.DocumentClient();
    this.table = table;
  }

  public async getById(id: string): Promise<GetItemOutput> {
    let params = {
      TableName: this.table,
      Key: {
        name: id
      }
    };
    try {
      const response = await this.documentClient.get(params).promise();
      return response;
    } catch (e) {
      throw e;
    }
  }

  public async create(data: Partial<T>): Promise<PutItemOutput> {
    let params = {
      TableName: this.table,
      Item: data
    };
    try {
      const response = await this.documentClient.put(params).promise();
      return response;
    } catch (e) {
      throw e;
    }
  }
}
