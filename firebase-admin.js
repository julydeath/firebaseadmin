import * as admin from "firebase-admin";

const firebaseConfig = {
  type: "service_account",
  project_id: "inacademy-e6a28",
  private_key_id: "69bd329581a88d9d2b8cb9e9cb7565bd7487c170",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC+Bx4vW026Ln1D\nPwTe76hroAmi3RSEmtXdku4OmyxQxBUkuCzie4b+rY3VKyzSeic/pbcCL72JirwM\nNsCmU9hIDQJIynCSV19xXKXwC8mCVGFniAf1ypfcwJA5ut75x050tsnJVfMUy1Bx\nOGu3NCBiw2bLQGR0S5JzqSP0Qk64t/A31Mg41loJMxsTmO5Y1Za3VXGfTx1D5vEe\nHSI+pgfE9kW+XA07jt2cW0wMdGOjJxmBG40wW4p9warLSrBhKvOutwpuPOq5IcbH\ni9wmjABVoO6UQk7Ky4RUQ3cEDkRDC2b6DbtTf2GZwh1IvOzuNXD1J77IsFZnhfI6\nfDMIsIZ/AgMBAAECggEAHS2cneroGXFv/HZduhmUg8oUELTfpKjds+MOuKFtAY3K\nLVQ2WCRdixd9EsFJZZwqEKTSX/ySnt71lu6FUETJje6pbiHffSj7V73BIQW+UEvC\nlRIXHs+X1+adfq/J8xJ+Yn96pnaTF5tMY8YlDAFuA5w7WXQuuIiuGSJcifHwgn4/\ncZkYsBXZyLKZ7Vd+qlptXMuIaPngmSgFNJEsoDtHrva0SBjPPwYYCc3uWotAsOeH\nrHgYgUajV29MkcbP9dvNhq8JX6otN+YH2655HvLHH5pfb3kwH6TksBsyJX5JFjug\nH7oPA1OwNyITJJVVEEQxTD2B4Av1Z/TA4F0L8HuHyQKBgQD+S5D5FzEJ2SBRvf3n\nKySa2To1mo/0eRfMz9r2ZCAChUJe44PWZ2UuWJigzZVUN72ef7WKYpZLiQGtMSy6\nFmE/Vv3147RyVhGupgen0P7XHzFmHq2fmsL00dw7QKbSEdpfPfBJ6twTH6nbBigP\nys8gVMS7UIeBPHDihV7FWfp7jQKBgQC/TUC5P6ajsUWf5P+kWVfzuKLmOQsiGcil\nPqd+Ko8uU+re7De0yPxzgmTRV5vXrVif6yUDWqBrPqlZYvq8GCs7CJ3VNC04joh0\nsB+E3ZsMm9Noj9GY6B1pp7NrRGXhJaYyT91D4yNHsGa1Ox2V/lpYCz0UeXYOYmjd\nNOaSm4SBOwKBgQD4A19bcYEEZ92bm798rJlA5Uhea2anO0s5GCgoUrLdgnae8Srt\n+121e/cwLhHMV6j6Yvf+BfUrqm4WKnXC8HzcN83s+a5OLR+FxKyGwdEqomOdg6I2\nncwy1lMC/yU0kPD4HwKyNPt7M1CIK1L7RAQLNmHBhuMB6p72brllpUIlKQKBgBjU\n81DYlU3sRehidlikDEmjrumJgAt2I1hn0KAM8DcIR5WWPgjmifaId4PBBoaxhq6D\nfHN6ARbKtHrY4UknLf1kufAh7LjJr6bN8dlyVp0FYSTSfleF0cOUNDL5Vuwp0e/3\n8/XK9xpoKHzf5pBAywNguhX9SjjFx2znYAKp00JfAoGBAMQl2t5urWxxcdHOS/mb\nAe7OcC3hmTSb6OAsCKovxQ339eefwgMol94n1sMPLqeaFYKXKnPF9T9+puwXnQfe\nJgnEQpSq+aGxdhSnfcA3oV233/lPQ+gfpFmz5Gy+E01/74nAPKPYNtrIW3YhhCCs\nWFv1nebDUl6Y/IzruIuuFhKv\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-qpuws@inacademy-e6a28.iam.gserviceaccount.com",
  client_id: "105639372200597463579",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qpuws%40inacademy-e6a28.iam.gserviceaccount.com",
}(async () => {
  try {
    await admin.initializeApp({
      credential: admin.credential.cert(firebaseConfig),
    });
  } catch (error) {
    if (!/already exists/u.test(error.message)) {
      console.error("Firebase admin initialization error", error.stack);
    }
  }
})();

export default admin;
