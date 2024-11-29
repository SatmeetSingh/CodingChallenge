import { WcTool } from './wc';

const greet = () => {
  return WcTool(process.argv[2], process.argv[3]);
};

greet();
