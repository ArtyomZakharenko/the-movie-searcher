export class Config {
  private static _API_KEY: string = 'af74547d47e746b0a7d75cc781980edb';
  public static get API_KEY(): string {
    return Config._API_KEY;
  }
}
