/**
 * Check the HTTP status code and resolve or reject accordingly
 * @param {object} response - the Response() object to process
 */
export function status(response) {
    console.log("this is response status")
    console.log(response.status)
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      return new Promise((resolve, reject) => {
        return response.json().then(reject);
      });
    }
}

/**
 * Extract the response body for further processing
 * @param {object} response - the Response() object to process
 */
export function json(response) {
  return response.json();
}
