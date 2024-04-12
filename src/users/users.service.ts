import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';

type ReplicationMode = 'master' | 'slave';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private dataSource: DataSource,
  ) {}

  async createUser(user: Omit<User, 'id' | 'isActive'>): Promise<User> {
    try {
      const curretUser = this.usersRepository.create(user);
      const save = await this.usersRepository.save(curretUser);
      return save;
    } catch (error) {
      throw new BadRequestException('Não foi possivel salvar o usuário');
    }
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(
    id: number,
    origin: ReplicationMode = 'master',
  ): Promise<(User & { origin: string }) | null> {
    try {
      const masterQueryRunner = this.dataSource.createQueryRunner(origin);
      const user = await this.dataSource
        .createQueryBuilder(User, 'user', masterQueryRunner)
        .setQueryRunner(masterQueryRunner)
        .where('user.id = :id', { id: id })
        .getOne();
      masterQueryRunner.release();
      return { origin: origin, ...user };
    } catch (error) {
      throw new BadRequestException('Usuário não encontrado');
    }
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
  async activeUser(
    id: number,
    updateUserDto: Pick<User, 'isActive'>,
  ): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id: id } });
    if (!user) {
      throw new BadRequestException('Usuário não encontrado', {
        description: 'User not found',
      });
    }
    user.isActive = updateUserDto.isActive;
    return await this.usersRepository.save(user);
  }
}
