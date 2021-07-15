import { Transaction } from 'src/transaction/transaction.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class User{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name_Of_Enterprize: string;

  @Column()
  password: string;

  @Column()
  data_state: boolean;

  @ManyToMany(() => Transaction)
  @JoinTable({
    name: 'access_right',
    joinColumn: {
      name: 'User',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'Transaction',
      referencedColumnName: 'id'
    }
})
  transactions: Transaction[];
}
