import { ObjectLiteral } from "typeorm";
import { dataSource } from "../src/dataSource.ts";
import { app }  from "../src/server.ts"

export default class TestUtils {
  static app: any;
  static port: number;

  constructor() {
    TestUtils.app = app;
    TestUtils.port = 3000;
  }

  private static async clearTable(entity: ObjectLiteral) {
    const repo = dataSource.getRepository(entity.name);
    await repo.query(`DELETE FROM "${entity.tableName}";`);
  }
  
  private static async clearDb() {
    const entities = dataSource.entityMetadatas;
    for (const entity of entities) {
      try{
        await TestUtils.clearTable(entity);
      } catch(e) {
        console.error('error clearing table: ', e)
        continue
      }
    }
    console.log("db cleared");
  }

  static async initializeApp() {
    try {
      await dataSource.initialize();
      console.log("Data Source has been initialized!");
    } catch (err) {
      console.error("Error during Data Source initialization", err);
    }
    await TestUtils.app.listen(TestUtils.port, () => {
      console.log(`Server listening on port ${TestUtils.port}`);
    });
    return await TestUtils.clearDb()
  }
}
