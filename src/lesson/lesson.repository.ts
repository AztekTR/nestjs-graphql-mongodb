import { EntityRepository, MongoRepository } from 'typeorm';
import { Lesson } from './lesson.entity';

@EntityRepository(Lesson)
export class LessonRepository extends MongoRepository<Lesson> {}
