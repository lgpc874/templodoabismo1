// Storage interface and in-memory implementation
export interface IStorage {
  getLevels(): Promise<any[]>;
  getEntities(): Promise<any[]>;
  getKnowledge(): Promise<any[]>;
}

class MemStorage implements IStorage {
  private levels: any[] = [];
  private entities: any[] = [];
  private knowledge: any[] = [];

  async getLevels(): Promise<any[]> {
    return this.levels;
  }

  async getEntities(): Promise<any[]> {
    return this.entities;
  }

  async getKnowledge(): Promise<any[]> {
    return this.knowledge;
  }
}

export const storage = new MemStorage();