import { 
    autoGeneratedHashKey,
    attribute,
    rangeKey,
    table,
} from '@aws/dynamodb-data-mapper-annotations';
import { IGoal } from '../igoal.entity';

@table('goals')
export class Goal implements IGoal {
    
    @autoGeneratedHashKey()
    id: string;

    @rangeKey()
    createdAt: Date;

    @attribute()
    name: string;

    @attribute()
    description: string;
}