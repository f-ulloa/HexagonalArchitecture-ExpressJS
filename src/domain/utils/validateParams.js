export function validateRequiredParams(body, requiredParams) {
  for (const param of requiredParams) {
    if (!body[param]) {
      throw new Error(`${param} is required`);
    }
  }
}
