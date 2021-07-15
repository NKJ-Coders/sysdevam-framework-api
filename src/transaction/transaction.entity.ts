import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

Entity()
export class Transaction{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  type: string;

  @Column()
  data_state: boolean;

  @ManyToMany(() => User)
  @JoinTable({
    name: 'user_transaction',
    joinColumn: {
      name: 'Transaction',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'User',
      referencedColumnName: 'id',
    }
})
  users: User[];
}