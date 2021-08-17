import { loadFilesSync, mergeTypeDefs } from "graphql-tools";
import path from 'path';

const mergePath = loadFilesSync(
  path.join(__dirname, "modules/**/graphql/schema.gql")
);

const schema = mergeTypeDefs(mergePath);

export default schema;