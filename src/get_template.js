import { promises } from 'fs';

const TEMPLATE_PATH = './';

const getTemplate = async (name) => {
  if (window.location.port === '') {
    return promises.readFile(`src/${TEMPLATE_PATH}${name}.html`, 'utf8');
  }
  const response = await fetch(`${TEMPLATE_PATH}${name}.html`);
  return response.text();
};

export default getTemplate;
