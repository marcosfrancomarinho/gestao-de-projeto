import type { IdGenerator } from '../../domain/gateway/id.generator.js';
import { v6 } from 'uuid';

export class UuidIdGenerator implements IdGenerator {
  public generate(): string {
    return v6();
  }
}
