import { Column, DataType, Model, Table } from 'sequelize-typescript';

import { sequelize } from '@/constants';

@Table({ modelName: 'Server', tableName: 'server.servers' })
export class ServerModel extends Model {
	declare createdAt: Date;
	declare id: number;

	@Column({
		allowNull: false,
		type: DataType.STRING(15),
		unique: true,
		validate: { isIPv4: true }
	})
	declare ip: string;

	@Column({
		allowNull: false,
		type: DataType.STRING(16),
		unique: true
	})
	declare interfaceName: string;

	@Column({
		allowNull: false,
		type: DataType.STRING(16),
		unique: true
	})
	declare name: string;

	@Column({
		allowNull: false,
		type: DataType.SMALLINT.UNSIGNED,
		validate: { max: 65535, min: 1 }
	})
	declare port: number;

	@Column({ type: DataType.TEXT })
	declare postDown: string;

	@Column({ type: DataType.TEXT })
	declare postUp: string;

	@Column({
		allowNull: false,
		type: DataType.CHAR(44),
		unique: true
	})
	declare privateKey: string;

	@Column({
		allowNull: false,
		type: DataType.CHAR(44),
		unique: true
	})
	declare publicKey: string;
	declare updatedAt: Date;
}

sequelize.addModels([ServerModel]);
